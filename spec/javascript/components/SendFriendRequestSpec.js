import React from 'react'
import jasmineEnzyme from 'jasmine-enzyme'
import SendFriendRequest from '../../../app/javascript/react/components/SendFriendRequest'

describe('SendFriendRequest', () => {
  let wrapper;
  let handleClick;

  beforeEach(() => {
    jasmineEnzyme()

    handleClick = jasmine.createSpy('handleClick spy')
    wrapper = mount (
      <SendFriendRequest
      handlerFunction={handleClick}
      />
    )
  })

  it("Should invoke handlerFunction when clicked", () => {
    wrapper.simulate('click')
    expect(handleClick).toHaveBeenCalled;
  })
})
