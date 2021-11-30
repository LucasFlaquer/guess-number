import styled from 'styled-components';

export const ButtonSend = styled.button`
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
  transition: filter 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.8);
  }
`;
