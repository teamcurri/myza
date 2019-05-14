import React from 'react'
// tslint:disable-next-line
import ReactDOMServer from 'react-dom/server'

export interface IMaxWidthProps {
  maxWidth: number
  className?: string
  children?: React.ReactNode
}

export const MaxWidth = ({ maxWidth = 0, className, children }: IMaxWidthProps) => {
  const renderedChildren = ReactDOMServer.renderToStaticMarkup(
    <div className={className} style={{ maxWidth: `${maxWidth}px`, margin: '0 auto' }}>
      {children}
    </div>
  )

  return <div dangerouslySetInnerHTML={{
    __html: `
    <!--[if mso]><center><table><tr><td width="${maxWidth}"><![endif]-->
    ${renderedChildren}
    <!--[if mso]> </td></tr></table></center><![endif]-->
  ` }}
  />
}
