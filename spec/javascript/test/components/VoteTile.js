import '../../testHelper.js'
import fetchMock from 'fetch-mock'

import VoteTile from '../../../../app/javascript/react/components/VoteTile'

describe('VoteTile', () => {
  let key,
      vote_body,
      score,
      user_id,
      review_id,
      wrapper


  beforeEach(() => {
    jasmineEnzyme();

    wrapper = mount(
      <VoteTile
        score={5}
        user_id={1}
        review_id={1}
      />
    )
  })

  afterEach(fetchMock.restore)

  it('renders a div with the current score', () => {
    expect(wrapper.find('div')).toBePresent()
    expect(wrapper.find('div').text()).toContain("5")
  })

  it('renders a div tag with an up-vote and down-vote icon', () => {
    expect(wrapper.find('i.fa-rotate-270')).toBePresent()
    expect(wrapper.find('i.fa-rotate-90')).toBePresent()
  })

  it('successfully adds to the list when a valid task is supplied', (done) => {
    vote_body = {
      vote: {
        vote: 1,
        user_id: 1,
        review_id: 1
      },
      score: 6
    }

    fetchMock.post('/api/v1/votes', {
      status: 201,
      body: vote_body
    });

    setTimeout(() => {
      wrapper.find('i.fa-rotate-270').simulate('click')
      setTimeout(() => {
        expect(wrapper.find('span').text()).toContain("6")
        done()
      })
    }, 0)
})
});
