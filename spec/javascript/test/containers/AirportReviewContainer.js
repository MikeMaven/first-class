import '../../testHelper.js'
import fetchMock from 'fetch-mock'

import AirportReviewContainer from '../../../../app/javascript/react/containers/AirportReviewContainer'
import NewAirportReviewFormContainer from '../../../../app/javascript/react/containers/NewAirportReviewFormContainer'
import AirportReviewTile from '../../../../app/javascript/react/components/AirportReviewTile'

describe('AirportReviewContainer', () => {
  let reviews,
      wrapper;


  beforeEach(() => {
    jasmineEnzyme();
    reviews = {
      reviews: [
        {
          score: 9001,
          review_id: 1,
          user_id: 1,
          id: 1,
          title: "This is a title",
          body: "This body has to be at least twenty chars",
          overall_rating: 5,
          queue_time: 4,
          cleanliness: 3,
          wifi: 2,
          staff: 1,
          lounge_space: 3,
          airport_id: 1,
          created_at: "2019-04-24T14:16:16.896Z",
          updated_at: "2019-04-24T14:16:16.896Z",
          user_id: 1 }
      ],
      current_user: {
        id: 1,
        email: "joshuathomaspereira@gmail.com",
        created_at: "2019-04-26 14:15:27",
        updated_at: "2019-04-26 14:15:27",
        role: "member"
      }
    }
    fetchMock.get('/api/v1/airports/1/reviews.json', {
      status: 200,
      body: reviews
    });

    wrapper = mount(
      <AirportReviewContainer
        airport_id = {1}
      />
    )
  })

  afterEach(fetchMock.restore)

  it('should should have the specified initial state', () => {
    expect(wrapper.state()).toEqual({ reviews: [], current_user: { role: "guest" } });
  });

  it('renders an h3 tag titled Reviews', () => {
    expect(wrapper.find('h3')).toBePresent()
    expect(wrapper.find('h3').text()).toContain("Reviews")
  });

  it('should render Review Tile Components with specific props', (done) => {
    setTimeout(() => {
      expect(wrapper.find(AirportReviewTile).props()).toEqual({
        score: 9001,
        review_id: 1,
        user_id: 1,
        id: 1,
        title: "This is a title",
        body: "This body has to be at least twenty chars",
        overall_rating: 5,
        queue_time: 4,
        cleanliness: 3,
        wifi: 2,
        staff: 1,
        lounge_space: 3,
        editable: true
      })
      done()
    }, 0)
  });

  it('should render the new review form when logged in as a member', (done) => {
    setTimeout(() => {
      expect(wrapper.find(NewAirportReviewFormContainer)).toBePresent()
      done()
    }, 0)
  });

  it('should not render the new review form when not logged in as a member', (done) => {
    reviews.current_user.role = "guest"
    fetchMock.get('/api/v1/airports/1/reviews.json', {
      status: 200,
      body: reviews
    });
    wrapper = mount(
      <AirportReviewContainer
        airport_id = {1}
      />
    )

    setTimeout(() => {
      expect(wrapper.find(NewAirportReviewFormContainer)).not.toBePresent()
      done()
    }, 0)
  });

  it('should set editable to true when user role is admin', (done) => {
    reviews.current_user.role = "admin"
    fetchMock.get('/api/v1/airports/1/reviews.json', {
      status: 200,
      body: reviews
    });
    wrapper = mount(
      <AirportReviewContainer
        airport_id = {1}
      />
    )

    setTimeout(() => {
      expect(wrapper.find(AirportReviewTile).props()).toEqual({
        score: 9001,
        review_id: 1,
        user_id: 1,
        id: 1,
        title: "This is a title",
        body: "This body has to be at least twenty chars",
        overall_rating: 5,
        queue_time: 4,
        cleanliness: 3,
        wifi: 2,
        staff: 1,
        lounge_space: 3,
        editable: true
      })
      done()
    }, 0)
  });

  it('should set editable to true when current user owns review', (done) => {
    fetchMock.get('/api/v1/airports/1/reviews.json', {
      status: 200,
      body: reviews
    });
    wrapper = mount(
      <AirportReviewContainer
        airport_id = {1}
      />
    )

    setTimeout(() => {
      expect(wrapper.find(AirportReviewTile).props()).toEqual({
        score: 9001,
        review_id: 1,
        user_id: 1,
        id: 1,
        title: "This is a title",
        body: "This body has to be at least twenty chars",
        overall_rating: 5,
        queue_time: 4,
        cleanliness: 3,
        wifi: 2,
        staff: 1,
        lounge_space: 3,
        editable: true
      })
      done()
    }, 0)
  });

  it('should set editable to false when current user does not own review', (done) => {
    reviews.reviews[0].user_id = 2
    fetchMock.get('/api/v1/airports/1/reviews.json', {
      status: 200,
      body: reviews
    });
    wrapper = mount(
      <AirportReviewContainer
        airport_id = {1}
      />
    )

    setTimeout(() => {
      expect(wrapper.find(AirportReviewTile).props()).toEqual({
        score: 9001,
        review_id: 1,
        user_id: 2,
        id: 1,
        title: "This is a title",
        body: "This body has to be at least twenty chars",
        overall_rating: 5,
        queue_time: 4,
        cleanliness: 3,
        wifi: 2,
        staff: 1,
        lounge_space: 3,
        editable: false
      })
      done()
    }, 0)
  });

});
