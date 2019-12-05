import * as React from 'react'

export interface IComponent1Props {
  age: number
}

export const Component1: React.FunctionComponent<IComponent1Props> = (
  props
) => {
  return <div className={'C1'}>{props.age > 30 ? 'old man' : 'teen'}</div>
}
