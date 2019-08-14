import { BrowserRoutes } from 'react-router-dom'

import ShowUserContainer from '../../../app/javascript/react/containers/ShowUserContainer'
import ShowUserTile from '../../../app/javascript/react/components/ShowUserTile'
import StatTile from '../../../app/javascript/react/components/StatTile'
import FriendStatusContainer from '../../../app/javascript/react/containers/FriendStatusContainer'

describe("ShowUserContainer", () => {
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
  }

  beforeEach(() => {
    wrapper = shallow(<ShowUserContainer />)
  })

  it("Should have the specified initial state", () => {
    expect(wrapper.state()).toEqual({
      recent_run_totals: {},
      all_run_totals: {},
      ytd_run_totals: {},
      user: {},
      friendship: null,
      friendships: [],
      currentUser: {},
      messages: []
    })
  })

  it("Should change the user state to include user data for the selected user", () => {
    wrapper.setState({ user: [user] })
    expect(wrapper.find(ShowUserTile)).toBePresent()
  })
})
