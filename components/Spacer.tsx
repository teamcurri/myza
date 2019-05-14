import React from 'react'

export const Spacer = ({ value }) =>
  <table cellPadding={0} cellSpacing={0} style={{ border: 0 }}>
    <tr>
      <td style={{ paddingTop: `${value}px` }} />
    </tr >
  </table>
