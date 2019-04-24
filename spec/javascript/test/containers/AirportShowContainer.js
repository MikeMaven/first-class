import '../../testHelper.js'

import AirportShowContainer from '../../../../app/javascript/react/containers/AirportShowContainer'
import AirportShowTile from '../../../../app/javascript/react/components/AirportShowTile'

describe('AirportShowContainer', () => {
  let wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = shallow(
      <AirportShowContainer />
    )
  })

  it('should should have the specified initial state', () => {
    expect(wrapper.state()).toEqual({ airport: {id: '', name: '', airport_code: '', location: '', description: ''} });
  });

  it('renders an h1 tag titled Airport', () => {
    expect(wrapper.find('h1')).toBePresent()
    expect(wrapper.find('h1').text()).toContain("Airport")
  });

  it('should render Airport Tile Components with specific props', () => {
    wrapper.setState({ airport: {id: 1, name: "Logan", location: "Boston", airport_code: "BOS", description: "Anything"} });
    expect(wrapper.find(AirportShowTile).props()).toEqual({
      name: "Logan",
      location: "Boston",
      airport_code: "BOS",
      description: "Anything"
    });
  });
});
