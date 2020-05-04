import React from 'react'
import { Label } from './Form.styles'
import { SubHeading } from './Typography'

const Stat = ({
                label,
                stat
              }) => (

    <>
      <Label>{ label }</Label>
      <SubHeading>{ stat }</SubHeading>
    </>

);

export default Stat
