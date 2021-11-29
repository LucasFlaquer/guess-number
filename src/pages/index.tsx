import styled from 'styled-components';
import { Digit } from '../components/Digit';

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
          color1="#ffc107"
          color2="#ffc107"
          color3="#ffc107"
          color4="#ffc107"
          color5="#ffc107"
          color6="#ffc107"
          color7="#ffc107"
        />
      </Content>
    </Container>
  );
}
