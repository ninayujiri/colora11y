import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
`;

export const FormCol = styled.div`
  width: 48%;
`;

export const Input = styled.input`
  font-family: 'Roboto Mono', sans-serif;
  background-color: transparent;
  color: inherit;
  font-size: 72px;
  line-height: 1;
  padding: 0;
  height: 88px;
  width: 100%;
  border: none;
  border-bottom: 2px white solid;
  
  &&::placeholder {
    color: inherit;
  }
  
  @media (max-width: 480px) {
    font-size: 32px;
  }
`;
