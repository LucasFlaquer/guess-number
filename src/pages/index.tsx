import { GetStaticProps } from 'next';
import { useState, useEffect } from 'react';
import { ButtonRestart } from '../components/buttons/ButtonRestart';
import { ButtonSend } from '../components/buttons/ButtonSend';
import { Container } from '../components/Container';
import { Content } from '../components/Content';
import { Digit } from '../components/Digit';
import { DigitsList } from '../components/Digits/DigitsList';
import { Form } from '../components/Form';
import { Input } from '../components/Form/Input';
import { Message } from '../components/Message';
import { Separator } from '../components/Separator';
import { Title } from '../components/Title';
import { fetchNumber } from '../services/fetchNumber';
import { numberColorsSchema } from '../utils/numberSchema';
import { ColorSchema } from '../utils/numberSchemaData';

interface HomeProps {
  value: number;
  error: string | undefined;
}

interface IDigit extends ColorSchema {
  key: string;
}

export default function Home({ value, error }: HomeProps): JSX.Element {
  const [guessNumber, setGuessNumber] = useState('');
  const [digits, setDigits] = useState<IDigit[]>([]);
  const [correctNumber, setCorrectNumber] = useState(0);
  const [message, setMessage] = useState('');
  const [digitColor, setDigitColor] = useState('#262A34');
  const [messageColor, setMessageColor] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  useEffect(() => {
    const zeroDigit = { ...numberColorsSchema(0), key: '0-0' };
    setDigits([zeroDigit]);
    setCorrectNumber(value);
    if (error) {
      setMessage('ERRO');
      setMessageColor('#CC3300');
      setDigitColor('#CC3300');
      const fiveDigit = { ...numberColorsSchema(5), key: `5-0` };
      const twoDigit = { ...numberColorsSchema(2), key: `2-0` };
      setDigits([fiveDigit, zeroDigit, twoDigit]);
      setIsDisabled(true);
    }
  }, [value, error]);

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    if (guessNumber === '') return;
    if (Number(guessNumber) === correctNumber) {
      setMessage('Você acertou!!!!');
      setMessageColor('#00CC33');
      setDigitColor('#00CC33');
      setIsDisabled(true);
    } else if (Number(guessNumber) > correctNumber) setMessage('É maior');
    else setMessage('É menor');
    const newDigitsNumber = guessNumber.split('').map((number, index) => {
      return {
        ...numberColorsSchema(Number(number)),
        key: `${number}-${index}`,
      };
    });
    setDigits([...newDigitsNumber]);
    setGuessNumber('');
  }
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    if (event.target.value === '') {
      setGuessNumber('');
      return;
    }
    if (event.target.value.match(/^\d+$/)) {
      setGuessNumber(event.target.value);
    }
  }
  async function handleReset(): Promise<void> {
    setDigits([{ ...numberColorsSchema(0), key: '0-0' }]);
    try {
      setIsDisabled(false);
      setDigitColor('#262A34');
      setGuessNumber('');
      setMessageColor('');
      setMessage('');
      const number = await fetchNumber();
      setCorrectNumber(number.value);
    } catch (err: any) {
      setDigitColor('#CC3300');
      setMessage('Erro');
      setMessageColor('#CC3300');
      setIsDisabled(true);
      setDigits(
        err.response.status
          .toString()
          .split('')
          .map((number: string) => numberColorsSchema(Number(number)))
      );
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
          {digits.map((digit) => (
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
              key={digit.key}
            />
          ))}
        </DigitsList>
        {isDisabled && (
          <ButtonRestart onClick={handleReset}>
            <img src="/refresh.svg" alt="refresh icon" />
            nova partida
          </ButtonRestart>
        )}

        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="Digite o palpite"
            type="text"
            value={guessNumber}
            onChange={handleInputChange}
            disabled={isDisabled}
          />
          <ButtonSend disabled={isDisabled} type="submit">
            Enviar
          </ButtonSend>
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
        value: number.value,
      },
    };
  } catch (error) {
    return {
      props: {
        error: 'error',
        value: 502,
      },
    };
  }
};
