import * as React from 'react'

export interface IComponent2Props {
  height: number
}

export const Component2: React.FunctionComponent<IComponent2Props> = (
  props
) => {
  return <div>{props.height > 180 ? 'top' : 'bottom'}</div>
}
