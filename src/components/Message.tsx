import styled from 'styled-components';

interface MessageProps {
  messageColor: string;
}

export const Message = styled.p<MessageProps>`
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  height: 15px;
  margin-bottom: 40px;
  font-size: 1.3rem;
  font-family: 'Montserrat', sans-serif;
  color: ${(props) => props.messageColor || '#FF6600'};
`;
