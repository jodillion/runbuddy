import { BrowserRouter } from 'react-router-dom';

import UserTile from '../../../app/javascript/react/components/UserTile';

describe('UserTile', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <UserTile
          id="1"
          profile="https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/18-arya-stark.w700.h700.jpg"
          firstname="Arya"
          lastname="Stark"
          age="12"
          sex="F"
          city="Winterfell"
          state="The North"
        />
      </BrowserRouter>
    );
  });

  it("Should render an img tag containing the user's profile photo received via props", () => {
    expect(wrapper.find("UserTile").props().profile).toEqual("https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/18-arya-stark.w700.h700.jpg")
  });

  it("Should render a p tag containing the user's first name received via props", () => {
    expect(wrapper.find("UserTile").props().firstname).toEqual("Arya")
  });

  it("Should render a p tag containing the user's last name received via props", () => {
    expect(wrapper.find("UserTile").props().lastname).toEqual("Stark")
  });

  it("Should render a p tag containing the user's age received via props", () => {
    expect(wrapper.find("UserTile").props().age).toEqual("12")
  });

  it("Should render a p tag containing the user's gender received via props", () => {
    expect(wrapper.find("UserTile").props().sex).toEqual("F")
  });

  it("Should render a p tag containing the user's city received via props", () => {
    expect(wrapper.find("UserTile").props().city).toEqual("Winterfell")
  });

  it("Should render a p tag containing the user's state received via props", () => {
    expect(wrapper.find("UserTile").props().state).toEqual("The North")
  });

  it("Should render a link to the show page for that location", () => {
    expect(wrapper.find("Link").props()["to"]).toBe("/users/1")
  });

});
