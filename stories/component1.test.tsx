import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'
import { Component1 } from '../packages/component1/src'

Enzyme.configure({ adapter: new Adapter() })

describe('scrollbar', () => {
    test('render', () => {
        const component1 = shallow(<Component1 age={100} />)

        expect(component1.find('.C1').exists()).toEqual(true)
        expect(component1.find('.C1').text()).toEqual('old man')
    })
})
