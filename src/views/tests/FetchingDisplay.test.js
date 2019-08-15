import { shallow } from 'enzyme';
import {
  LargerImage,
  FetchingDisplay,
  SPINNING_POKEBALL,
} from '../FetchingDisplay';
import React from 'react';
import { LargeHeader } from '../StyledComponents';

describe('FetchingDisplay', () => {
  it('should return null', () => {
    const wrapper = shallow(<FetchingDisplay isFetching={false} />);
    expect(wrapper.isEmptyRender()).toEqual(true);
  });

  it('should render correctly', () => {
    const wrapper = shallow(<FetchingDisplay isFetching={true} />);
    const header = wrapper.find(LargeHeader);
    expect(header.text()).toEqual('Searching');
    const image = wrapper.find(LargerImage);
    expect(image.props().src).toEqual(SPINNING_POKEBALL);
  });
});
