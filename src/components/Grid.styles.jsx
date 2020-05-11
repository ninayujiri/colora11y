import styled from 'styled-components'

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Col = styled.div`
  width: ${ props => props.width ? props.width : '48%' };
  
  @media (max-width: 768px) {
    order: ${ props => props.order };
    width: 100%;
    margin-bottom: 40px;
  }
`;

export const Section = styled.section`
  margin-top: 70px;
  
  @media (max-width: 1200px) {
      margin-top: 60px;
  }
  
  @media (max-width: 768px) {
    order: ${ props => props.order };
    margin-top: 40px;
  }
`;
