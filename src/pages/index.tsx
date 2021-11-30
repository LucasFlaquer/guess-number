import { GetStaticProps } from 'next';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container } from '../components/Container';
import { Content } from '../components/Content';
import { Digit } from '../components/Digit';
import { Separator } from '../components/Separator';
import { Title } from '../components/Title';
import { fetchNumber } from '../services/fetchNumber';
import { numberColorsSchema } from '../utils/numberSchema';
import { ColorSchema } from '../utils/numberSchemaData';

interface HomeProps {
  value: number
  error:string | undefined
}


export const DigitsList = styled.div`
  display: flex;
  justify-content: center;
  span {
    display: block;
    &+span {

      margin-left: 15px;
    }
  }
`; 

export const Form = styled.form`
  margin-top:100px;
  display: flex;
`;

export const Input = styled.input`
  padding: 14px 8px;
  border: 2px solid #CFCFCF;
  border-radius: 4px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 12px;
  height: 42px;
  min-width: 210px;
  margin-right: 15px;
  outline: none;

  &:focus, &:active {
    border-color: #ef6c00;
  }
`;

export const Button = styled.button`
  display: block;
  height: 42px;
  text-transform: uppercase;
  background: linear-gradient(#ef6c00, #db6300);
  padding: 14px 8px;
  border-radius: 4px;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  border: 1px solid transparent;
  transition: filter .2s ease-in-out;

  &:hover {
    filter: brightness(0.8);
  }
`;

interface MessageProps {
  messageColor: string
}

export const Message = styled.p<MessageProps>`
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  height: 15px;
  margin-bottom: 40px;
  font-size: 1.3rem;
  font-family: 'Montserrat', sans-serif;
  color: ${props => props.messageColor || '#FF6600'};

`;

export const RestartButton = styled.button`
  background: linear-gradient(#434854, #9E9E9E);
  height: 42px;
  position: absolute;
  bottom: 20%;
  border-radius: 4px;
  border: 1px solid transparent;
  text-transform: uppercase;
  color: #FFF;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 14px 8px;
`

export default function Home({value, error}:HomeProps): JSX.Element {
  const [guessNumber, setGuessNumber] = useState('');
  const [digits, setDigits] = useState<ColorSchema[]>([]);
  const [correctNumber, setCorrectNumber] = useState(0);
  const [message, setMessage] = useState('');
  const [digitColor, setDigitColor] = useState('#262A34');
  const [messageColor, setMessageColor] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  useEffect(()=> {
    setDigits([numberColorsSchema(0)])
    setCorrectNumber(value);
    if(error) {
      setMessage('ERRO');
      setMessageColor('#CC3300');
      setDigitColor('#CC3300');
      setDigits([numberColorsSchema(5), numberColorsSchema(2), numberColorsSchema(2)]);
      setIsDisabled(true);
    } 
  }, [])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    if(guessNumber === '') return;
    const form = event.target as HTMLFormElement;
    
    console.log(guessNumber, correctNumber)
    if(Number(guessNumber) === correctNumber) {
      setMessage('Você acertou!!!!');
      setMessageColor('#00CC33');
      setDigitColor('#00CC33');
      setIsDisabled(true);
    }
    else if(Number(guessNumber) > correctNumber) 
      setMessage('É maior');
    else setMessage('É menor');    
    const digits = guessNumber.split('').map(number => numberColorsSchema(Number(number)));
    setDigits(digits);  
  }
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    console.log(event.target.value)
    if(event.target.value === '') {
      setGuessNumber('');
      return;
    }
    if(event.target.value.match(/^\d+$/)) {
      setGuessNumber(event.target.value);
    }
  }
  async function handleReset(): Promise<void> {
    setDigits([numberColorsSchema(0)]);
    try {
      const number = await fetchNumber();
      setCorrectNumber(number.value);
      setIsDisabled(false);
      setDigitColor('#262A34');
      setGuessNumber('');
      setMessageColor('');
      setMessage('');
      
    } catch (error:any) {
      setDigitColor('#CC3300');
      setDigits(error.response.status.toString().split('').map((number: string)=> numberColorsSchema(Number(number))));
    }

  }

  return (
    <Container>
      <Title> 
        Qual é o Número?
        <Separator />
      </Title>
      <Content>
        <Message messageColor={messageColor}>{message}</Message>
        <DigitsList>
          {digits.map((digit, index) => (
            <Digit 
              height={100 * 2}
              width={56 * 2}
              trueColor={digitColor}
              topLed={digit.top}
              topLeftLed={digit.topLeft}
              topRightLed={digit.topRight}
              bottomLed={digit.bottom}
              bottomLeftLed={digit.bottomLeft}
              bottomRightLed={digit.bottomRight}
              middleLed={digit.middle}
              key={index}
            />
          ))}
        </DigitsList>
        {
          isDisabled && (
          <RestartButton onClick={handleReset}>
            <img src="/refresh.svg" alt="refresh icon" />
            nova partida
          </RestartButton>
          )
        }
        

        <Form onSubmit={handleSubmit}>
          <Input 
            placeholder="Digite o palpite"
            type="text"
            value={guessNumber}
            onChange={handleInputChange} 
            disabled={isDisabled}/>
          <Button disabled={isDisabled} type="submit">Enviar</Button>
        </Form>
      </Content>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const number = await fetchNumber();
    return {
      props: {
        value: number.value
      }
    }
  } catch (error) {
    return {
      props: {
        error: 'error',
        value: 502
      }
    }
  }
    
  
};