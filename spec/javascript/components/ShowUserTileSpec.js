import React from 'react'
import jasmineEnzyme from 'jasmine-enzyme'
import ShowUserTile from '../../../app/javascript/react/components/ShowUserTile'

describe ('ShowUserTile', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <ShowUserTile
        id="1"
        profile="https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/18-arya-stark.w700.h700.jpg"
        firstname="Arya"
        lastname="Stark"
        age="12"
        sex="F"
        city="Winterfell"
        state="The North"
      />
    )
  })

  it("Should render an img tag containing the user's profile photo received via props", () => {
    expect(wrapper.find("ShowUserTile").props().profile).toEqual("https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/18-arya-stark.w700.h700.jpg")
  });

  it("Should render a p tag containing the user's first name received via props", () => {
    expect(wrapper.find("ShowUserTile").props().firstname).toEqual("Arya")
  });

  it("Should render a p tag containing the user's last name received via props", () => {
    expect(wrapper.find("ShowUserTile").props().lastname).toEqual("Stark")
  });

  it("Should render a p tag containing the user's age received via props", () => {
    expect(wrapper.find("ShowUserTile").props().age).toEqual("12")
  });

  it("Should render a p tag containing the user's gender received via props", () => {
    expect(wrapper.find("ShowUserTile").props().sex).toEqual("F")
  });

  it("Should render a p tag containing the user's city received via props", () => {
    expect(wrapper.find("ShowUserTile").props().city).toEqual("Winterfell")
  });

  it("Should render a p tag containing the user's state received via props", () => {
    expect(wrapper.find("ShowUserTile").props().state).toEqual("The North")
  });
})
