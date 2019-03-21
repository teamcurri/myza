import React, { SFC } from 'react'

export const Center: SFC<{ className?: string }> = ({ children, className }) =>
  // @ts-ignore
  <table width="100%" border="0" cellSpacing="0" cellPadding="0" className={className}>
    <tr>
      <td align="center">
        {children}
      </td>
    </tr>
  </table>
