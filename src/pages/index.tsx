import styled from 'styled-components';
import { Digit } from '../components/Digit';
import { numberColorsSchema } from '../utils/numberSchema';

export const Container = styled.div`
  max-width: 1200px; 
  margin: 0 auto;
  height: 100vh;
  padding-top: 45px;
`;
export const Title = styled.h1`
  background: -webkit-linear-gradient(#ef6c00, #db6300);
  background-clip: text; 
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  font-size: 36px;
  text-align: center;
`;
export const Separator = styled.span`
  height: 1px;
  background: #cfcfcf;
  width: 255px;
  display: block; 
  margin: 12px auto 0;
`;
export const Content = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 130px;
`;


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
