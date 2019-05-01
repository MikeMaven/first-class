import '../../testHelper.js'

import AirportReviewTile from '../../../../app/javascript/react/components/AirportReviewTile'

describe('AirportReviewTile', () => {
  let key,
      score,
      review_id,
      user_id,
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
        score = {9001}
        review_id = {1}
        user_id = {1}
        id = {1}
        key = {1}
        title = {"My First Review"}
        body = {"This is a review. Boy, do I love flying from here."}
        overall_rating = {5}
        queue_time = {4}
        cleanliness = {4}
        wifi = {4}
        staff = {1}
        lounge_space = {5}
        editable = {true}
      />
    )
  })

  it('renders an H4 tag with the review title', () => {
    expect(wrapper.find('h4')).toBePresent()
    expect(wrapper.find('h4').text()).toContain("My First Review")
  })

  it('renders a p tag with the review body', () => {
    expect(wrapper.find('p')).toBePresent()
    expect(wrapper.find('p.review-body').text()).toContain("This is a review. Boy, do I love flying from here.")
  })

  it('renders all li tags with all the ratings', () => {
    expect(wrapper.find('ul').text()).toContain("Overall Rating: 5")
    expect(wrapper.find('ul').text()).toContain("Queue Time Rating: 4")
    expect(wrapper.find('ul').text()).toContain("Cleanliness Rating: 4")
    expect(wrapper.find('ul').text()).toContain("Wifi Rating: 4")
    expect(wrapper.find('ul').text()).toContain("Staff Rating: 1")
    expect(wrapper.find('ul').text()).toContain("Lounge Space Rating: 5")
  })

  it('renders a link when editable', () => {
    expect(wrapper.text().includes('Edit')).toBe(true);
  })

  it('renders a link to the author show page', () => {
    expect(wrapper.text().includes('View Author Profile')).toBe(true);
  })

  it('does not render a link when editable is false', () => {
    wrapper = mount(
      <AirportReviewTile
        id = {1}
        key = {1}
        title = {"My First Review"}
        body = {"This is a review. Boy, do I love flying from here."}
        overall_rating = {5}
        queue_time = {4}
        cleanliness = {4}
        wifi = {4}
        staff = {1}
        lounge_space = {5}
        editable = {false}
      />
    )
    expect(wrapper.text().includes('Edit')).toBe(false);
  })

});
