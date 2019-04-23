import '../../testHelper.js'

import Airport from '../../../../app/javascript/react/components/Airport'

describe('Airport', () => {
  let key,
      name,
      airport_code,
      location,
      wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(
      <Airport
        key={"1"}
        name={"Logan"}
        airport_code={"BOS"}
        location={"Boston"}
      />
    )
  })

  it('renders a p tag with the airport name', () => {
    expect(wrapper.find('p')).toBePresent()
    expect(wrapper.find('p').text()).toContain("Logan")
  })

  it('renders a p tag with the airport code', () => {
    expect(wrapper.find('p')).toBePresent()
    expect(wrapper.find('p').text()).toContain("BOS")
  })

  it('does not render a p tag with the airport location', () => {
    expect(wrapper.find('p')).toBePresent()
    expect(wrapper.find('p').text()).not.toContain("Boston")
  })
});
