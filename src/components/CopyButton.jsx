import styled from 'styled-components'

export const CopyButton = styled.button`
  font-family: 'Roboto Mono', sans-serif;
  text-decoration: underline;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: ${ props => props.color };
  background-color: transparent;
  mix-blend-mode: difference;
  padding: 20px 0;
`;
