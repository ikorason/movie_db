/* eslint-env jest */
import {shallow} from 'enzyme'
import React from 'react'

import BtnExplore from 'components/Buttons/BtnExplore'

describe('testing with enzyme', () => {
  it('should not render children when passed in', () => {
    const wrapper = shallow(
      <BtnExplore>
        <div className="unique" />
      </BtnExplore>,
    )
    expect(wrapper.contains(<div className="unique" />)).toEqual(false)
  })
})
