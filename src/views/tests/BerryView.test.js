import { BerryView } from '../BerryView';
import { shallow } from 'enzyme';
import React from 'react';

const mockData = {
  name: 'cheri',
  growth_time: 5,
  firmness: { name: 'firm' },
  max_harvest: 10,
  size: 'large',
  smoothness: 4,
  soil_dryness: 'very',
  flavors: [
    { flavor: { name: 'sweet' } },
    { flavor: { name: 'spicy' } },
    { flavor: { name: 'sour' } },
  ],
};

describe('BerryView', () => {
  describe('no data', () => {
    it('should return null', () => {
      const wrapper = shallow(<BerryView />);
      expect(wrapper.isEmptyRender()).toBe(true);
    });
  });

  describe('display is not berry', () => {
    it('should return null', () => {
      const wrapper = shallow(
        <BerryView data={mockData} displaying={'moves'} />,
      );
      expect(wrapper.isEmptyRender()).toBe(true);
    });
  });

  describe('with data, display berry', () => {
    const wrapper = shallow(<BerryView data={mockData} displaying={'berry'} />);
    it('should render correctly', () => {
      expect(wrapper.isEmptyRender()).toBe(false);
    });

    it('should display header', () => {
      const header = wrapper.find('LargeHeader');
      expect(header.text()).toEqual('CHERI');
    });

    it('should display info', () => {
      const info = wrapper.find('p');
      const expectedResults = [
        'Grow Time: 5',
        'Firmness: firm',
        'Max Harvest: 10',
        'Size: large',
        'Smoothness: 4',
        'Soil Dryness: very',
        'Flavors: sweet  spicy  sour',
      ];
      info.forEach((point, index) => {
        expect(point.text()).toEqual(expectedResults[index]);
      });
    });
  });
});
