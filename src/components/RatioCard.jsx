import React from 'react'
import { Label } from './Form'
import { SubHeading } from './Typography'
import { Card } from './Card'
import { Col, Row } from './Grid'

const RatioCard = ({
                     ratio,
                     grade
                   }) => (
    <Card>
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
    </Card>
);

export default RatioCard
