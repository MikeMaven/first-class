import '../../testHelper.js'
import fetchMock from 'fetch-mock'

import AirportShowContainer from '../../../../app/javascript/react/containers/AirportShowContainer'
import AirportShowTile from '../../../../app/javascript/react/components/AirportShowTile'

describe('AirportShowContainer', () => {
  let airport,
      wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    airport = {
      airport: {id: 1, name: "Logan", location: "Boston", airport_code: "BOS", description: "Anything"}
    }
    fetchMock.get('/api/v1/airports/1.json', {
      status: 200,
      body: airport
    });
    wrapper = mount(
      <AirportShowContainer params={ { id: airport.airport.id } } />
    )
  })

  afterEach(fetchMock.restore)

  it('should should have the specified initial state', () => {
    expect(wrapper.state()).toEqual({ airport: {id: '', name: '', airport_code: '', location: '', description: ''} });
  });

  it('renders an h1 tag titled Airport', () => {
    expect(wrapper.find('h1')).toBePresent()
    expect(wrapper.find('h1').text()).toContain("Airport")
  });

  it('should render Airport Tile Components with specific props', (done) => {
    setTimeout(() => {
      expect(wrapper.find(AirportShowTile).props()).toEqual({name: "Logan", location: "Boston", airport_code: "BOS", description: "Anything"})
      done()
    }, 0)
  });
});
