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

export default function Home({value, error}:HomeProps): JSX.Element {
  const [number, setNumber] = useState(0);
  const [digits, setDigits] = useState<ColorSchema[]>([]);
  const [correctNumber, setCorrectNumber] = useState(0);
  const digit = numberColorsSchema(9);
  const [message, setMessage] = useState('');
  useEffect(()=> {
    setDigits([numberColorsSchema(2), numberColorsSchema(3)])
  }, [])
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    
  }

  return (
    <Container>
      <Title> 
        Qual é o Número?
        <Separator />
      </Title>
      <Content>
        <DigitsList>
          {digits.map((digit, index) => (
            <Digit 
              height={100 * 2}
              width={56 * 2}
              trueColor={'#262A34'}
              topLed={digit.top}
              topLeftLed={digit.topLeft}
              topRightLed={digit.topRight}
              bottomLed={digit.bottom}
              bottomLeftLed={digit.bottomLeft}
              bottomRightLed={digit.bottomRight}
              middleLed={digit.middle}
            />
          ))}
        </DigitsList>
        <p>{message}</p>
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