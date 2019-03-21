import React from 'react'
import Myza, { Components } from './'

const SimpleEmail = ({ firstName }) => <div>Welcome to Curri, {firstName}</div>

it('renders correctly', () => {
  const rendered = Myza.renderEmail(SimpleEmail, { firstName: 'Brian' })
  const tree = JSON.stringify({ body: rendered })
  expect(tree).toMatchSnapshot();
});


it('renders with custom font-family', () => {
  const rendered = Myza.renderEmail(SimpleEmail, { firstName: 'Brian' }, { fontFamily: 'Comic Sans' })
  const tree = JSON.stringify({ body: rendered })
  expect(tree).toMatchSnapshot();
});

it('renders with Myza component', () => {
  const CenteredEmail = ({ firstName }) => <Components.Center>Welcome to Curri, {firstName}</Components.Center>
  const rendered = Myza.renderEmail(CenteredEmail, { firstName: 'Brian' })
  const tree = JSON.stringify({ body: rendered })
  expect(tree).toMatchSnapshot();
});
