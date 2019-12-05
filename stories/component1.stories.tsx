import { number, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Component1 } from '../packages/component1/src'

storiesOf('组件1', module)
  .addDecorator(withKnobs)
  .add('基础', () => {
    const age = number('age', 300)

    return (
      <div>
        <Component1 age={age} />
      </div>
    )
  })
