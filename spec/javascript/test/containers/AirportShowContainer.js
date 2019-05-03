import '../../testHelper.js'
import fetchMock from 'fetch-mock'

import AirportShowContainer from '../../../../app/javascript/react/containers/AirportShowContainer'
import AirportReviewContainer from '../../../../app/javascript/react/containers/AirportReviewContainer'
import AirportShowTile from '../../../../app/javascript/react/components/AirportShowTile'

describe('AirportShowContainer', () => {
  let airport,
      reviews,
      wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    airport = {
      airport: {
        id: 1,
        name: "Logan",
        location: "Boston",
        airport_code: "BOS",
        description: "Anything",
        lat: "42.23423423",
        long: "-43.234234",
        average_rating: 0,
        average_queue_time_rating: 0,
        average_cleanliness_rating: 0,
        average_wifi_rating: 0,
        average_staff_rating: 0,
        average_lounge_space_rating: 0
      }
    }
    fetchMock.get('/api/v1/airports/1.json', {
      status: 200,
      body: airport
    });
    reviews = {
      reviews: [
        {"id":1,"title":"This is a title","body":"This body has to be at least twenty chars","overall_rating":5,"queue_time":4,"cleanliness":3,"wifi":2,"staff":1,"lounge_space":3,"airport_id":1,"created_at":"2019-04-24T14:16:16.896Z","updated_at":"2019-04-24T14:16:16.896Z"},
        {"id":2,"title":"This is a title","body":"This body has to be at least twenty chars","overall_rating":5,"queue_time":4,"cleanliness":3,"wifi":2,"staff":1,"lounge_space":4,"airport_id":1,"created_at":"2019-04-24T15:26:21.467Z","updated_at":"2019-04-24T15:26:21.467Z"}
      ],
      current_user: {
        role: "guest"
      }
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
    expect(wrapper.state()).toEqual({ airport: {
      id: '',
      name: '',
      airport_code: '',
      location: '',
      description: '',
      lat: 0,
      long: 0,
      average_rating: 0,
      average_queue_time_rating: 0,
      average_cleanliness_rating: 0,
      average_wifi_rating: 0,
      average_staff_rating: 0,
      average_lounge_space_rating: 0
    }});
  });

  it('should render Airport Tile Components with specific props', (done) => {
    setTimeout(() => {
      expect(wrapper.find(AirportShowTile).props()).toEqual({
        name: "Logan",
        airport_code: "BOS",
        location: "Boston",
        description: "Anything",
        overall_rating: 0,
        queue_time_rating: 0,
        cleanliness_rating: 0,
        wifi_rating: 0,
        staff_rating: 0,
        lounge_space_rating: 0,
        lat: "42.23423423",
        long: "-43.234234"
      })
      done()
    }, 0)
  });

  it('should render Airport Review Container with specific props', (done) => {
    setTimeout(() => {
      expect(wrapper.find(AirportReviewContainer).props()).toEqual({airport_id: 1})
      done()
    }, 0)
  })
});
