import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Col = styled.div`
  width: 48%;
  
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 40px;
  }
`;
