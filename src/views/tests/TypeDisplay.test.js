import { TypeDisplay } from '../TypeDisplay';
import { shallow } from 'enzyme';
import React from 'react';

describe('TypeDisplay', () => {
  const mockData = {
    id: '12',
    name: 'fire',
    pokemon: [
      { pokemon: { name: 'charmander' } },
      { pokemon: { name: 'charmelon' } },
      { pokemon: { name: 'charizard' } },
    ],
    damage_relations: {
      double_damage_to: [{ name: 'grass' }, { name: 'bug' }],
      double_damage_from: [{ name: 'water' }, { name: 'ground' }],
      half_damage_to: [{ name: 'water' }],
      half_damage_from: [{ name: 'grass' }, { name: 'ice' }],
      no_damage_to: [],
      no_damage_from: [],
    },
    moves: [
      { name: 'fire-punch' },
      { name: 'flamethrower' },
      { name: 'fireblast' },
      { name: 'fire-spin' },
    ],
  };
  const mockRequestData = jest.fn();

  it('should render null', () => {
    const wrapper = shallow(
      <TypeDisplay data={null} type={'type'} requestData={mockRequestData} />,
    );
    expect(wrapper.isEmptyRender()).toBe(true);
  });

  it('should render null', () => {
    const wrapper = shallow(
      <TypeDisplay
        data={mockData}
        type={'move'}
        requestData={mockRequestData}
      />,
    );
    expect(wrapper.isEmptyRender()).toBe(true);
  });

  describe('data has count key', () => {
    const mockDataAgain = Object.assign({}, mockData);
    mockDataAgain['count'] = 'exists';
    const wrapper = shallow(
      <TypeDisplay
        data={mockDataAgain}
        displaying={'type'}
        requestData={mockRequestData}
      />,
    );
    expect(wrapper.isEmptyRender()).toEqual(true);
  });

  describe('should render correctly', () => {
    const {
      double_damage_from,
      double_damage_to,
      half_damage_from,
      half_damage_to,
      no_damage_from,
      no_damage_to,
    } = mockData.damage_relations;

    const expectedHeaders = [
      'Double Damage To:',
      'Half Damage From:',
      'No Damage From:',
      'Double Damage From:',
      'Half Damage To:',
      'No Damage To:',
    ];

    const expectedProps = [
      double_damage_to,
      half_damage_from,
      no_damage_from,
      double_damage_from,
      half_damage_to,
      no_damage_to,
      mockData.pokemon,
      mockData.moves,
    ];

    const expectedLargeHeaders = ['Pokemon', 'Moves'];

    const wrapper = shallow(
      <TypeDisplay
        data={mockData}
        displaying={'type'}
        requestData={mockRequestData}
      />,
    );
    it('should render name', () => {
      const name = wrapper.find('LargeHeader');
      expect(name.text()).toEqual(mockData.name.toUpperCase());
    });

    it('should render info headers', () => {
      const headers = wrapper.find('h4');
      expect(headers).toHaveLength(6);
      headers.forEach((header, index) => {
        expect(header.text()).toEqual(expectedHeaders[index]);
      });
    });

    it('should render large headers', () => {
      const headers = wrapper.find('h3');
      expect(headers).toHaveLength(2);
      headers.forEach((header, index) => {
        expect(header.text()).toEqual(expectedLargeHeaders[index]);
      });
    });

    it('should pass props correctly', () => {
      const components = wrapper.find('CreateButtonsFromInfo');
      expect(components).toHaveLength(8);
      components.forEach((component, index) => {
        expect(component.props().array).toEqual(expectedProps[index]);
      });
    });
  });
});
