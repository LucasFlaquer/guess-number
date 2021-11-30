import styled from 'styled-components';

export const DigitsList = styled.div`
  display: flex;
  justify-content: center;
  span {
    display: block;
    & + span {
      margin-left: 15px;
    }
  }
`;
