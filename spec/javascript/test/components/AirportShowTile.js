import '../../testHelper.js'

import AirportShowTile from '../../../../app/javascript/react/components/AirportShowTile'

describe('AirportShowTile', () => {
  let key,
      name,
      airport_code,
      location,
      description,
      wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(
      <AirportShowTile
        key={"1"}
        name={"Logan"}
        airport_code={"BOS"}
        location={"Boston"}
        description={"Anything"}
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

  it('renders a ul tag with the airport location', () => {
    expect(wrapper.find('ul').text()).toContain("Boston")
  })

  it('renders a ul tag with the airport description', () => {
    expect(wrapper.find('ul').text()).toContain("Anything")
  })
});
