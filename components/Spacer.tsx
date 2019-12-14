import React from 'react'

export interface SpacerProps {
  value: number
}

export const Spacer = ({ value }: SpacerProps): React.ReactElement => (
  <table cellPadding={0} cellSpacing={0} style={{ border: 0 }}>
    <tr>
      <td style={{ paddingTop: `${value}px` }} />
    </tr>
  </table>
)
