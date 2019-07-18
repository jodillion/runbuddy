import { BrowserRouter } from 'react-router-dom'
import ProfilesContainer from '../../../app/javascript/react/containers/ProfilesContainer'
import ProfileTile from '../../../app/javascript/react/components/ProfileTile'

describe("ProfilesContainer", () => {
  let wrapper;
  let profile = {
    id: "1",
    first_name: "Jo",
    age: "27",
    zipcode: "45244",
    gender: "F"
  };

  beforeEach(() => {
    wrapper = shallow(<ProfilesContainer />)
  });

  it("Should have the specified intitial state", () => {
    expect(wrapper.state()).toEqual({
      profiles: []
    });
  });

  it("Should render Profile Tile components", () => {
    wrapper.setState({ profiles: [profile] });
    expect(wrapper.find(ProfileTile)).toBePresent();
  });

  it("Should change the ProfilesContainer state to include all available locations", () => {
    wrapper.setState({ profiles: [profile] });
    expect(wrapper.find(ProfileTile).props()).toEqual({
      id: "1",
      first_name: "Jo"
    });
  });

});
