import '../../testHelper.js'
import { Link } from 'react-router'
import fetchMock from 'fetch-mock'

import AirportContainer from '../../../../app/javascript/react/containers/AirportContainer'
import Airport from '../../../../app/javascript/react/components/Airport'

describe('AirportContainer', () => {
  let wrapper,
  airports;

  beforeEach(() => {
    jasmineEnzyme();
    airports = {
      airports: [
        {
          id: 1,
          airport_code: "BOS",
          name: "Logan",
          location: "Boston, MA",
          description: "Cool",
          created_at: "2019-04-24T14:16:16.896Z",
          updated_at: "2019-04-24T14:16:16.896Z"
        }
      ],
      current_user: {
        id: 1,
        email: "admin@firstclass.com",
        created_at: "2019-04-25 17:17:34",
        updated_at: "2019-04-25 17:19:49",
        role: "admin"
      }
    }
    fetchMock.get('/api/v1/airports.json', {
      status: 200,
      body: airports
    });
    wrapper = mount(
      <AirportContainer />
    )
  })

  afterEach(fetchMock.restore)

  it('should should have the specified initial state', () => {
    expect(wrapper.state()).toEqual({ airports: [], current_user: { role: "guest" } });
  });

  it('renders an h1 tag titled Airports', () => {
    expect(wrapper.find('h1')).toBePresent()
    expect(wrapper.find('h1').text()).toContain("Airports")
  });

  it('should render Airport Components with specific props', (done) => {
    setTimeout(() => {
    expect(wrapper.find(Airport).props()).toEqual({
      id: 1,
      name: "Logan",
      airport_code: "BOS"
    });
    done()
    }, 0)
  });

  it('renders an h4 tag with the new airport link text in it', (done) => {
    setTimeout(() => {
      expect(wrapper.find('h4')).toBePresent()
      expect(wrapper.find('h4').text()).toContain("Add a new airport!")
      done()
    }, 0)
  });
});
