import { shallow } from 'enzyme';
import { ErrorView } from '../ErrorView';
import React from 'react';

describe('ErrorView', () => {
  it('should render null', () => {
    const wrapper = shallow(<ErrorView />);
    expect(wrapper.isEmptyRender()).toBe(true);
  });

  it('should render correctly', () => {
    const mockError = {
      status: 404,
      statusText: 'Unable to find',
    };
    const wrapper = shallow(<ErrorView error={mockError} />);
    const header = wrapper.find('LargeHeader');
    expect(header.text()).toEqual('Error: 404');
    const paragraph = wrapper.find('p');
    expect(paragraph.text()).toEqual(mockError.statusText);
  });
});
