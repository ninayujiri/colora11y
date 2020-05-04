import styled from 'styled-components'

export const Background = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  color: ${props => props.color};
  background-color: ${props => props.bgColor};
`;
