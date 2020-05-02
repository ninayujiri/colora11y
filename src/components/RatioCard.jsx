import React from 'react'
import styled from 'styled-components';
import { Label } from './Form';
import { SubHeading } from './Typography';
import { Card } from './Card';
import { Col, Row } from './Grid';


const StyledCard = styled(Card)`
   width: 500px;
`;

const RatioCard = ({
                     ratio,
                     grade
                   }) => {
  return (
      <StyledCard>
        <Row>
          <Col>
            <Label>Contrast ratio</Label>
            <SubHeading>{ ratio }: 1</SubHeading>

          </Col>
          <Col>
            <Label>WCAG grade</Label>
            <SubHeading>{ grade }</SubHeading>

          </Col>
        </Row>

      </StyledCard>
  );
};

export default RatioCard
