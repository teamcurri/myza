import React from 'react'
import styled from 'styled-components'
import Myza, { Components } from './'

const Title = styled(Components.Center)`
  font-size: 45px;
  font-weight: 900;
`

const CenteredEmail = ({ firstName }) => <Title>Welcome to Curri, {firstName}</Title>
const rendered = Myza.renderEmail(CenteredEmail, { firstName: 'Brian' })
console.log(rendered)
