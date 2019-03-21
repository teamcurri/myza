<p align="center">
  <img alt="myza" src="https://user-images.githubusercontent.com/659829/54783127-cf57bc80-4bdd-11e9-91d6-cd0bfe07b238.jpg" width="180">
</p>

<h1 align="center">
  myza (/ˈmaɪzə/)
</h1>

<p align="center">
  <em>Author emails with React & friends.</em>
</p>

### Table of Contents

- [Motivation](#motivation)
- [Installation](#installation)
- [Usage](#usage)
- [How It Works](#how-it-works)
- [Components](#components)
- [Roadmap](#roadmap)

## Motivation

Myza aims to fill a void in the email tooling space. There's [MJML](https://mjml.io/) which is neat,
but [lacks the ability](https://github.com/mjmlio/mjml/issues/1457)
[to interpolate variables into your templates](https://github.com/mjmlio/mjml/issues/1457). There's
also [Foundation](https://foundation.zurb.com/), which is built atop less modern tooling like SCSS.

## Installation

```sh
npm i -S myza
```

## Usage

```jsx
import Myza, { Components } from 'myza'
import styled from 'styled-components'

const Title = styled(Components.Center)`
  font-size: 45px;
  font-weight: 900;
`

const WelcomeEmail = ({ firstName }) =>
  <Title>Welcome to Curri, {firstName}</Title>

const renderedEmail = Myza.renderEmail(
  WelcomeEmail,
  { firstname: 'Myza' },
  { fontFamily: `"Comic Sans", Papyrus, Arial, sans-serif' }
)
```

## How It Works

The core Myza engine works as follows:

1. Render the passed in component with [ReactDOMServer.renderToStaticMarkup](https://reactjs.org/docs/react-dom-server.html#rendertostaticmarkup)
2. Collect all `styled-components` styles with [ServerStyleSheet.collectStyles](https://www.styled-components.com/docs/advanced#example)
3. Inject desired font family, styles, and the rendered component into the `body` of a sane default [email html wrapper](https://github.com/teamcurri/myza/blob/master/components/index.html#L52)
4. Inline all styles with [Automattic/juice](https://github.com/Automattic/juice)
5. Run the HTML output through [pretty](https://github.com/jonschlinkert/pretty)

## Components

- [`<Center />`](https://github.com/teamcurri/myza/blob/master/components/Center.tsx): center passed content
- _More to come!_

## Roadmap

- Build out suite of battle-tested, cross-client components
- Run suite of components through Storybook
- Set up email client testing

## Myza Logo

Shamelessly pulled from Shutterstock.

## Credits

Built by the engineering team at [Curri](https://www.curri.com).
