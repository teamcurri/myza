import React from 'react'
import styled from 'styled-components'

// Styled div with complex styling
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: 2px dashed #0077ff;
  border-radius: 10px;
  margin: 10px;
`

// Styled heading with dynamic props
interface HeadingProps {
  color: string
}
const StyledHeading = styled.h1<HeadingProps>`
  font-size: 2rem;
  color: ${(props) => props.color};
  text-shadow: 1px 1px 0px #fff;
`

// Styled paragraph
const StyledParagraph = styled.p`
  color: #777;
  font-style: italic;
`

const ComplexEmail = ({ name }: { name: string }) => {
  return (
    <StyledDiv>
      {/* Inline-styled heading */}
      <h2 style={{ color: 'darkred', textDecoration: 'underline' }}>
        Hello, {name}!
      </h2>

      {/* Styled heading with prop */}
      <StyledHeading color="#0077ff">Styled Heading with Prop</StyledHeading>

      {/* Multiple paragraphs with styled and inline styles */}
      <StyledParagraph>
        This is a styled paragraph. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.
      </StyledParagraph>
      <p
        style={{
          backgroundColor: '#f0f0f0',
          padding: '10px',
          borderRadius: '5px'
        }}
      >
        This paragraph has inline styles. Sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </p>

      <a href="google.com?foo=bar&bar=baz">Visit Google</a>

      {/* Nested styled divs */}
      <StyledDiv>
        <StyledParagraph>Nested Styled Div</StyledParagraph>
      </StyledDiv>
    </StyledDiv>
  )
}

export { ComplexEmail }
