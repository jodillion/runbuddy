import { BrowserRouter } from 'react-router-dom';

import UsersContainer from '../../../app/javascript/react/containers/UsersContainer';
import UserTile from '../../../app/javascript/react/components/UserTile';

describe("UsersContainer", () => {
  let wrapper;
  let user = {
    access_token: '1234567890',
    provider: 'Strava',
    id: '1',
    profile: 'https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/18-arya-stark.w700.h700.jpg',
    firstname: 'Arya',
    lastname: 'Stark',
    age: '12',
    sex: 'F',
    city: 'Winterfell',
    state: 'The North'
  };

  beforeEach(() => {
    wrapper = shallow(<UsersContainer />)
  });

  it("Should have the specified initial state", () => {
    expect(wrapper.state()).toEqual({
      users: []
    });
  });

  it("Should change the UsersContainer state to include all available users", () => {
    wrapper.setState({ users: [user] });
    expect(wrapper.find(UserTile)).toBePresent();
  });

  it("Should render UserTiles with props that were passed to it", () => {
    wrapper.setState({ users: [user] });
    expect(wrapper.find(UserTile).props()).toEqual({
      id: '1',
      profile: 'https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/18-arya-stark.w700.h700.jpg',
      firstname: 'Arya',
      lastname: 'Stark',
      age: '12',
      sex: 'F',
      city: 'Winterfell',
      state: 'The North'
    });
  });

});
