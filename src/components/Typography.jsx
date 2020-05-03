import styled from 'styled-components'

export const Heading = styled.h1`
  font-family: 'Karla', sans-serif;
  font-weight: 700;
  font-size: 72px;
  line-height: 1;
  word-break: break-word;
  margin: 0;
  
  @media (max-width: 1200px) {
    font-size: 60px;
  }
`;

export const SubHeading = styled.h3`
  font-family: 'Roboto Mono', sans-serif;
  font-size: 40px;
  line-height: 1;
  margin: 10px 0;
  
  @media (max-width: 1200px) {
    font-size: 30px;
  }
`;

export const Body = styled.p`
  font-family: 'Karla', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1;
  margin: 10px 0;
`;
