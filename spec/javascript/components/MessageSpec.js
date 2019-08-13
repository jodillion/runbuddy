import React from 'react'
import jasimeEnzyme from 'jasmine-enzyme'
import Message from '../../../app/javascript/react/components/Message'

describe('Message', () => {
  let wrapper;

  beforeEach(() => {
    jasmineEnzyme()

    wrapper = mount (
      <Message
      firstname="Archer"
      message="danger zone"
      />
    )
  })

  it("Should render the first name of the user sending a message", () => {
    expect(wrapper.props().firstname).toEqual("Archer")
  })

  it("Should render the message being sent by the user", () => {
    expect(wrapper.props().message).toEqual("danger zone")
  })
})
