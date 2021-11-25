import type { NextPage } from 'next'

import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
  padding-top: 45px;
`;

export const Title = styled.h1`
  background: -webkit-linear-gradient(#EF6C00, #DB6300);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  font-size: 36px;
  text-align: center;
`
export const Separator = styled.span`
  height: 1px;
  background: #CFCFCF;
  width: 255px;
  display: block;
  margin: 12px auto 0;
`



const Home: NextPage = () => {
  return (
    <Container>
      <Title>
        Qual é o Número?
        <Separator />
      </Title>

    </Container>
  )
}

export default Home
