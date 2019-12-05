import { number, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Component2 } from '../packages/component2/src'

storiesOf('组件2', module)
  .addDecorator(withKnobs)
  .add('基础', () => {
    const height = number('height', 300)

    return (
      <div>
        <Component2 height={height} />
      </div>
    )
  })
