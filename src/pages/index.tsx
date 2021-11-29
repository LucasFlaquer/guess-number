import styled from 'styled-components';
import { Container } from '../components/Container';
import { Content } from '../components/Content';
import { Digit } from '../components/Digit';
import { Separator } from '../components/Separator';
import { Title } from '../components/Title';
import { numberColorsSchema } from '../utils/numberSchema';



export default function Home(): JSX.Element {
  const digit = numberColorsSchema(9);
  return (
    <Container>
      <Title> 
        Qual é o Número?
        <Separator />
      </Title> 
      <Content>
        <Digit 
          height={56 * 4}
          width={100 * 4}
          trueColor={'#262A34'}
          topLed={digit.top}
          topLeftLed={digit.topLeft}
          topRightLed={digit.topRight}
          bottomLed={digit.bottom}
          bottomLeftLed={digit.bottomLeft}
          bottomRightLed={digit.bottomRight}
          middleLed={digit.middle}
        />
      </Content>
    </Container>
  );
}
