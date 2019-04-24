import '../../testHelper.js'
import fetchMock from 'fetch-mock'

import AirportShowContainer from '../../../../app/javascript/react/containers/AirportShowContainer'
import AirportShowTile from '../../../../app/javascript/react/components/AirportShowTile'

describe('AirportShowContainer', () => {
  let airport,
      reviews,
      wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    airport = {
      airport: {id: 1, name: "Logan", location: "Boston", airport_code: "BOS", description: "Anything"}
    }
    fetchMock.get('/api/v1/airports/1.json', {
      status: 200,
      body: airport
    });
    reviews = {
      reviews: [
        {"id":1,"title":"This is a title","body":"This body has to be at least twenty chars","overall_rating":5,"queue_time":4,"cleanliness":3,"wifi":2,"staff":1,"lounge_space":3,"airport_id":1,"created_at":"2019-04-24T14:16:16.896Z","updated_at":"2019-04-24T14:16:16.896Z"},
        {"id":2,"title":"This is a title","body":"This body has to be at least twenty chars","overall_rating":5,"queue_time":4,"cleanliness":3,"wifi":2,"staff":1,"lounge_space":4,"airport_id":1,"created_at":"2019-04-24T15:26:21.467Z","updated_at":"2019-04-24T15:26:21.467Z"}
      ]
    }
    fetchMock.get('/api/v1/airports/1/reviews.json', {
      status: 200,
      body: reviews
    });
    wrapper = mount(
      <AirportShowContainer params={ { id: airport.airport.id } } />
    )
  })

  afterEach(fetchMock.restore)

  it('should should have the specified initial state', () => {
    expect(wrapper.state()).toEqual({ airport: {id: '', name: '', airport_code: '', location: '', description: ''} });
  });

  it('renders an h1 tag titled Airport', () => {
    expect(wrapper.find('h1')).toBePresent()
    expect(wrapper.find('h1').text()).toContain("Airport")
  });

  it('should render Airport Tile Components with specific props', (done) => {
    setTimeout(() => {
      expect(wrapper.find(AirportShowTile).props()).toEqual({name: "Logan", location: "Boston", airport_code: "BOS", description: "Anything"})
      done()
    }, 0)
  });
});
