import fs from 'fs'
import juice from 'juice'
import pretty from 'pretty'
import React from 'react'
import { ServerStyleSheet } from 'styled-components'
import { Center } from '../components/Center'

// tslint:disable-next-line
import ReactDOMServer from 'react-dom/server'

const emailHtml = fs.readFileSync('./components/index.html', { encoding: 'utf8' })

interface IEmailOptions {
  fontFamily: string
}

const defaultEmailOptions: IEmailOptions = {
  fontFamily: `Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`
}

const renderEmail = (EmailComponent: React.ElementType, variables: {}, emailOptions: IEmailOptions = defaultEmailOptions) => {
  const options = { ...defaultEmailOptions, ...emailOptions }
  const sheet = new ServerStyleSheet()

  const renderedComponent = ReactDOMServer.renderToStaticMarkup(
    sheet.collectStyles(<EmailComponent {...variables} />)
  )

  const styleTags = sheet.getStyleTags()

  const htmlWithFontFamily = emailHtml.replace('/* MYZA_FONT_FAMILY_INJECT */', options.fontFamily)
  const htmlWithStyles = htmlWithFontFamily.replace('<!-- MYZA_STYLES_INJECT -->', styleTags)
  const htmlWithComponent = htmlWithStyles.replace('<!-- MYZA_BODY_INJECT -->', renderedComponent)

  const email = pretty(juice(htmlWithComponent))
  return email
}

export default {
  renderEmail
}

export const Components = {
  Center
}
