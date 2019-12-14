import fs from 'fs'
import juice from 'juice'
import path from 'path'
import pretty from 'pretty'
import React from 'react'
import { ServerStyleSheet } from 'styled-components'
import { Center } from '../components/Center'
import { FixedWidthContainer } from '../components/FixedWidthContainer'
import { Spacer } from '../components/Spacer'

import ReactDOMServer from 'react-dom/server'

const filePath = path.resolve(__dirname, '../components/index.html')
const emailHtml = fs.readFileSync(filePath, { encoding: 'utf8' })

interface EmailOptions {
  fontFamily: string
}

const defaultEmailOptions: EmailOptions = {
  fontFamily: `Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`
}

const renderEmail = (
  EmailComponent: React.ElementType,
  variables: {},
  emailOptions: EmailOptions = defaultEmailOptions
): string => {
  const options = { ...defaultEmailOptions, ...emailOptions }
  const sheet = new ServerStyleSheet()

  const renderedComponent = ReactDOMServer.renderToStaticMarkup(
    sheet.collectStyles(<EmailComponent {...variables} />)
  )

  const styleTags = sheet.getStyleTags()

  const htmlWithFontFamily = emailHtml.replace(
    '/* MYZA_FONT_FAMILY_INJECT */',
    options.fontFamily
  )
  const htmlWithStyles = htmlWithFontFamily.replace(
    '<!-- MYZA_STYLES_INJECT -->',
    styleTags
  )
  const htmlWithComponent = htmlWithStyles.replace(
    '<!-- MYZA_BODY_INJECT -->',
    renderedComponent
  )

  const email = pretty(juice(htmlWithComponent))
  return email
}

export default {
  renderEmail
}

export const Components = {
  Center,
  FixedWidthContainer,
  Spacer
}
