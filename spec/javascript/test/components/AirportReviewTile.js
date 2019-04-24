import '../../testHelper.js'

import AirportReviewTile from '../../../../app/javascript/react/components/AirportReviewTile'

describe('AirportReviewTile', () => {
  let key,
      title,
      body,
      overall_rating,
      queue_time,
      cleanliness,
      wifi,
      staff,
      lounge_space,
      wrapper

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(
      <AirportReviewTile
        key = {1}
        title = {"My First Review"}
        body = {"This is a review. Boy, do I love flying from here."}
        overall_rating = {5}
        queue_time = {4}
        cleanliness = {4}
        wifi = {4}
        staff = {1}
        lounge_space = {5}
      />
    )
  })

  it('renders an H3 tag with the review title', () => {
    expect(wrapper.find('h3')).toBePresent()
    expect(wrapper.find('h3').text()).toContain("My First Review")
  })

  it('renders a p tag with the review body', () => {
    expect(wrapper.find('p')).toBePresent()
    expect(wrapper.find('p').text()).toContain("This is a review. Boy, do I love flying from here.")
  })

  it('renders all li tags with all the ratings', () => {
    expect(wrapper.find('ul').text()).toContain("Overall Rating: 5")
    expect(wrapper.find('ul').text()).toContain("Queue Time Rating: 4")
    expect(wrapper.find('ul').text()).toContain("Cleanliness Rating: 4")
    expect(wrapper.find('ul').text()).toContain("Wifi Rating: 4")
    expect(wrapper.find('ul').text()).toContain("Staff Rating: 1")
    expect(wrapper.find('ul').text()).toContain("Lounge Space Rating: 5")
  })

});
