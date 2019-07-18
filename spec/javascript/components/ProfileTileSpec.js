import { BrowserRouter } from 'react-router-dom'

import ProfileTile from '../../../app/javascript/react/components/ProfileTile'

describe('ProfileTile', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <ProfileTile
          id="1"
          first_name="Jo"
        />
      </BrowserRouter>
    );
  });

  it("Should render an h5 tag containing the first name received via props", () => {
    expect(wrapper.find("h5").text()).toBe("Jo")
  });

})
