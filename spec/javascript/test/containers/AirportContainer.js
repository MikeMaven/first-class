import '../../testHelper.js'

import AirportContainer from '../../../../app/javascript/react/containers/AirportContainer'
import Airport from '../../../../app/javascript/react/components/Airport'

describe('AirportContainer', () => {
  let wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(
      <AirportContainer />
    )
  })

  it('should should have the specified initial state', () => {
    expect(wrapper.state()).toEqual({ airports: [] });
  });

  it('renders an h1 tag titled Airports', () => {
    expect(wrapper.find('h1')).toBePresent()
    expect(wrapper.find('h1').text()).toContain("Airports")
  });

  it('should render Airport Components with specific props', () => {
    wrapper.setState({ airports: [{id: 1, name: "Logan", location: "Boston", airport_code: "BOS"}] });
    expect(wrapper.find(Airport).props()).toEqual({
      name: "Logan",
      airport_code: "BOS"
    });
  });
});
