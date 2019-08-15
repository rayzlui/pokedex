import { ColorView } from '../ColorView';
import { shallow } from 'enzyme';
import React from 'react';
import { Button } from '../StyledComponents';

const mockData = {
  name: 'blue',
  pokemon_species: [
    { name: 'dratini' },
    { name: 'dragonair' },
    { name: 'snorlax' },
    { name: 'woobofuet' },
  ],
};

const mockRequestData = jest.fn(input => {
  return input;
});

describe('ColorView', () => {
  describe('no data passed', () => {
    it('should return null', () => {
      const wrapper = shallow(<ColorView />);
      expect(wrapper.isEmptyRender()).toBe(true);
    });
  });

  describe('displaying not pokemon-color', () => {
    it('should return null', () => {
      const wrapper = shallow(
        <ColorView
          displaying={'moves'}
          data={mockData}
          requestData={mockRequestData}
        />,
      );
      expect(wrapper.isEmptyRender()).toBe(true);
    });
  });

  describe('data passed', () => {
    const wrapper = shallow(
      <ColorView
        displaying={'pokemon-color'}
        data={mockData}
        requestData={mockRequestData}
      />,
    );
    it('should render correctly', () => {
      expect(wrapper.isEmptyRender()).toBe(false);
    });

    it('should render header', () => {
      const header = wrapper.find('LargeHeader');
      expect(header.text()).toEqual('BLUE POKEMON');
    });

    it('should render info', () => {
      const info = wrapper.find('p');
      const expectedText = ['dratini', 'dragonair', 'snorlax', 'woobofuet'];
      info.forEach((section, index) => {
        expect(section.text()).toEqual(expectedText[index]);
      });
    });

    it('should render buttons', () => {
      const buttons = wrapper.find(Button);
      expect(buttons).toHaveLength(4);
      const expectedInputs = [
        ['dratini', 'pokemon'],
        ['dragonair', 'pokemon'],
        ['snorlax', 'pokemon'],
        ['woobofuet', 'pokemon'],
      ];
      buttons.forEach((button, index) => {
        button.simulate('click');
        expect(mockRequestData).toHaveBeenCalledWith(
          expectedInputs[index][0],
          expectedInputs[index][1],
        );
        expect(button.text()).toEqual('View');
      });
    });
  });
});
