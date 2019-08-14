import React from 'react'

import StatTile from '../../../app/javascript/react/components/StatTile'

describe('StatTile', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <StatTile
        id="1"
        recent_distance="100"
        recent_achievement_count="5"
        recent_count="7"
        recent_time="12"
        recent_elevation="15,000"
        all_distance="50,000"
        all_count="400"
        all_time="200"
        all_elevation="100,000"
        ytd_distance="3,000"
        ytd_count="300"
        ytd_time="50"
        ytd_elevation="60,000"
      />
    )
  })

  it("should render a users recent distance received via props", () => {
    expect(wrapper.find("StatTile").props().recent_distance).toEqual("100")
  })

  it("should render a users recent acheivement count received via props", () => {
    expect(wrapper.find("StatTile").props().recent_achievement_count).toEqual("5")
  })

  it("should render a users recent count of average runs received via props", () => {
    expect(wrapper.find("StatTile").props().recent_count).toEqual("7")
  })

  it("should render a users recent time of average runs received via props", () => {
    expect(wrapper.find("StatTile").props().recent_time).toEqual("12")
  })

  it("should render a users recent elevetion of average runs received via props", () => {
    expect(wrapper.find("StatTile").props().recent_elevation).toEqual("15,000")
  })

  it("should render a users total recorded distance received via props", () => {
    expect(wrapper.find("StatTile").props().all_distance).toEqual("50,000")
  })

  it("should render a users total recorded run count received via props", () => {
    expect(wrapper.find("StatTile").props().all_count).toEqual("400")
  })

  it("should render a users total recorded run time received via props", () => {
    expect(wrapper.find("StatTile").props().all_time).toEqual("200")
  })

  it("should render a users total recorded run elevation received via props", () => {
    expect(wrapper.find("StatTile").props().all_elevation).toEqual("100,000")
  })

  it("should render a users year to date run distance received via props", () => {
    expect(wrapper.find("StatTile").props().ytd_distance).toEqual("3,000")
  })

  it("should render a users year to date recorded run count received via props", () => {
    expect(wrapper.find("StatTile").props().ytd_count).toEqual("300")
  })

  it("should render a users year to date recorded run time received via props", () => {
    expect(wrapper.find("StatTile").props().ytd_time).toEqual("50")
  })

  it("should render a users year to date run elevation received via props", () => {
    expect(wrapper.find("StatTile").props().ytd_elevation).toEqual("60,000")
  })
})
