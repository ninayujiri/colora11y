import styled from 'styled-components'

export const Container = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    padding: 30px;
  }
`;
