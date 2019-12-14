import React from 'react'
import styled from 'styled-components'
import Myza, { Components } from './'

const SimpleWrapper = styled.div`
  background: pink;
`

interface FirstName {
  firstName: string
}

const SimpleEmail = ({ firstName }: FirstName): React.ReactElement => {
  return <SimpleWrapper>Welcome to Curri, {firstName}</SimpleWrapper>
}

it('renders correctly', () => {
  const rendered = Myza.renderEmail(SimpleEmail, { firstName: 'Brian' })
  const tree = JSON.stringify({ body: rendered })
  expect(tree).toMatchSnapshot()
})

it('renders with custom font-family', () => {
  const rendered = Myza.renderEmail(
    SimpleEmail,
    { firstName: 'Brian' },
    { fontFamily: 'Comic Sans' }
  )
  const tree = JSON.stringify({ body: rendered })
  expect(tree).toMatchSnapshot()
})

it('renders with Myza component', () => {
  const CenteredEmail = ({ firstName }: FirstName): React.ReactElement => (
    <Components.Center>Welcome to Curri, {firstName}</Components.Center>
  )
  const rendered = Myza.renderEmail(CenteredEmail, { firstName: 'Brian' })
  const tree = JSON.stringify({ body: rendered })
  expect(tree).toMatchSnapshot()
})
