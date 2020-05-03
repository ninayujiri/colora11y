import React from 'react'
import styled from 'styled-components'

export const Button = styled.button`
  font-family: 'Roboto Mono', sans-serif;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 16px 18px;
  border-radius: 4px;
  color: ${ props => props.bgColor };
  background-color: ${ props => props.color };
  
  &:hover {
    filter: brightness(90%);
  }
`;
