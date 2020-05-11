import styled from 'styled-components'

export const Form = styled.form`
  && {
    color: ${ props => props.color };
  }
`;

export const InputGroup = styled.div`
  border-bottom: 2px ${ props => props.borderColor } solid;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  font-family: 'Roboto Mono', sans-serif;
  background-color: transparent;
  color: #FCF8F1;
  mix-blend-mode: difference;
  font-size: 50px;
  line-height: 1;
  padding: 0;
  height: 80px;
  border: none;
  width: inherit;
  
  &&::placeholder {
    color: inherit;
  }
  
  @media (max-width: 1200px) {
    font-size: 40px;
  }
`;

export const ColorInput = styled.input`
  height: 30px;
  width: 29px;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  
  &::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  
  &::-webkit-color-swatch {
    border: none;
    border-radius: 50%;  
  }
`;

export const Label = styled.label`
  font-family: 'Karla', sans-serif;
  font-size: 16px;
  font-weight: 700;
  padding-bottom: 10px;
`;
