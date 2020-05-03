import styled from 'styled-components';

export const Form = styled.form`
  && {
    color: ${ props => props.color };
  }
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
  border-bottom: 2px ${ props => props.borderColor } solid;
  
  &&::placeholder {
    color: inherit;
  }
  
  @media (max-width: 768px) {
    font-size: 50px;
  }
`;

export const Label = styled.label`
  font-family: 'Karla', sans-serif;
  padding-bottom: 10px;
`;
