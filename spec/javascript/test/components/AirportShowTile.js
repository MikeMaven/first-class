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
        lat={"54.234234234"}
        long={"-45.234234"}
      />
    )
  })

  it('renders a span tag with the airport name', () => {
    expect(wrapper.find('span.airport-show-name')).toBePresent()
    expect(wrapper.find('span.airport-show-name').text()).toContain("Logan")
  })

  it('renders a span tag with the airport code', () => {
    expect(wrapper.find('span.airport-show-code')).toBePresent()
    expect(wrapper.find('span.airport-show-code').text()).toContain("BOS")
  })

  it('renders an h4 tag with the airport location', () => {
    expect(wrapper.find('h4').text()).toContain("Boston")
  })

  it('renders a p tag with the airport description', () => {
    expect(wrapper.find('p.airport-show-description').text()).toContain("Anything")
  })
});
