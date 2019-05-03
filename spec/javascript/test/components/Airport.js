import '../../testHelper.js'

import { Link } from 'react-router'
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

  it('renders a react router link to a show page', () => {
    expect(wrapper.find(Link)).toBePresent()
    expect(wrapper.find(Link).text()).toContain("(BOS) Logan")
  })

});
