import styled from 'styled-components';

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
export const Digit = styled.div`
  height: 200px;
  width: 100px;
  background: #353131;
  position: relative;

  .top {
    img {
      fill: red;
    }
  }
`;

export default function Home(): JSX.Element {
  return (
    <Container>
      <Title> 
        Qual é o Número?
        <Separator />
      </Title> 
      <Content>
        <Digit>
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </Digit>
      </Content>
    </Container>
  );
}
