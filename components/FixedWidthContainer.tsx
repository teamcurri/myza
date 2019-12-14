import React from 'react'
import ReactDOMServer from 'react-dom/server'

export interface FixedWidthContainerProps {
  width: number | string
  className?: string
  children?: React.ReactNode
}

export const FixedWidthContainer = ({
  width = 600,
  className,
  children
}: FixedWidthContainerProps): React.ReactElement => {
  const renderedChildren = ReactDOMServer.renderToStaticMarkup(
    <td
      className={className}
      style={{ width: `${width}px`, maxWidth: `${width}px`, margin: '0 auto' }}
    >
      {children}
    </td>
  )

  return (
    <table
      style={{ width: `${width}px`, maxWidth: `${width}px`, margin: '0 auto' }}
      dangerouslySetInnerHTML={{
        __html: `
    <tr>
      <!--[if mso]><center><table><tr><td width="${width}"><![endif]-->
      ${renderedChildren}
      <!--[if mso]> </td></tr></table></center><![endif]-->
    </tr>
  `
      }}
    />
  )
}
