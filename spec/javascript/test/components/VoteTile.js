import '../../testHelper.js'

import VoteTile from '../../../../app/javascript/react/components/VoteTile'


describe('VoteTile', () => {
  let key,
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

  it('renders a div with the current score', () => {
    expect(wrapper.find('div')).toBePresent()
    expect(wrapper.find('div').text()).toContain("5")
  })

  it('renders a div tag with an up-vote and down-vote icon', () => {
    expect(wrapper.find('i.fa-rotate-270')).toBePresent()
    expect(wrapper.find('i.fa-rotate-90')).toBePresent()
  })
});
