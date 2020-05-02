import styled from 'styled-components';

export const Background = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  color: ${props => props.color};
  background-color: ${props => props.bgColor};
`;
