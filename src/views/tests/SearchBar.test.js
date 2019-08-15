import { mount } from 'enzyme';
import { SearchBar } from '../SearchBarDisplay';
import React from 'react';

describe('SearchBar', () => {
  const mockRequestData = jest.fn();
  const wrapper = mount(<SearchBar requestData={mockRequestData} />);
  const expectedResults = [
    'ability',
    'pokemon',
    'type',
    'move',
    'berry',
    'pokemon-color',
  ];

  it('should have header', () => {
    const header = wrapper.find('h4');
    expect(header.text()).toEqual('SEARCH BY: POKEMON');
  });

  describe('buttons', () => {
    it('should have render correctly', () => {
      const buttons = wrapper.find('button');
      expect(buttons).toHaveLength(6);
      buttons.forEach((button, index) => {
        expect(button.text()).toEqual(expectedResults[index].toUpperCase());
        button.simulate('click');
        const header = wrapper.find('h4');
        expect(header.text()).toEqual(
          `SEARCH BY: ${expectedResults[index].toUpperCase()}`,
        );
      });
    });
  });

  describe('input', () => {
    it('should render correctly', () => {
      const ENTER_KEY = 13;
      const buttons = wrapper.find('button');
      const moveButton = buttons.at(3);
      moveButton.simulate('click');
      const input = wrapper.find('input');
      input.instance().value = 'hyper-beam';
      expect(mockRequestData).not.toHaveBeenCalled();
      input.simulate('keyDown', { keyCode: ENTER_KEY });
      expect(mockRequestData).toHaveBeenCalledWith('hyper-beam', 'move');
      expect(input.instance().value).toEqual('');
    });
  });
});
