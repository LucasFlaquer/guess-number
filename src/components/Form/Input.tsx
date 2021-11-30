import styled from 'styled-components';

export const Input = styled.input`
  padding: 14px 8px;
  border: 2px solid #cfcfcf;
  border-radius: 4px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 12px;
  height: 42px;
  min-width: 210px;
  margin-right: 15px;
  outline: none;

  &:focus,
  &:active {
    border-color: #ef6c00;
  }
`;
