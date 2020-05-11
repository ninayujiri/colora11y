import styled from 'styled-components'

export const Heading = styled.h1`
  font-family: 'Karla', sans-serif;
  font-weight: 700;
  font-size: 50px;
  line-height: 1;
  word-break: break-word;
  margin: 10px 0 0;
  
  @media (max-width: 1200px) {
    font-size: 40px;
  }
`;

export const SubHeading = styled.h3`
  font-family: 'Roboto Mono', sans-serif;
  font-size: 32px;
  line-height: 1;
  margin: 10px 0;
  
  @media (max-width: 1200px) {
    font-size: 22px;
  }
`;

export const Body = styled.p`
  font-family: 'Karla', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  margin: 10px 0;
`;
