import { shallow } from 'enzyme';
import { AbilityDisplay } from '../AbilityDisplay';
import React from 'react';

describe('AbilityDisplay', () => {
  const mockData = {
    name: 'stench',
    pokemon: [
      { pokemon: { name: 'gloom' } },
      { pokemon: { name: 'grimer' } },
      { pokemon: { name: 'muk' } },
    ],
    effect_entries: [{ effect: "It's smelly and makes pokemans grossed out" }],
  };
  const mockRequestData = jest.fn();

  it('should render null', () => {
    const wrapper = shallow(
      <AbilityDisplay
        data={mockData}
        displaying={'pokemon'}
        requestData={mockRequestData}
      />,
    );
    expect(wrapper.isEmptyRender()).toBe(true);
  });

  it('should render null', () => {
    const wrapper = shallow(
      <AbilityDisplay
        data={null}
        displaying={'ability'}
        requestData={mockRequestData}
      />,
    );
    expect(wrapper.isEmptyRender()).toBe(true);
  });

  describe('data has count key', () => {
    const mockDataAgain = Object.assign({}, mockData);
    mockDataAgain['count'] = 'exists';
    const wrapper = shallow(
      <AbilityDisplay
        data={mockDataAgain}
        displaying={'ability'}
        requestData={mockRequestData}
      />,
    );
    expect(wrapper.isEmptyRender()).toEqual(true);
  });

  describe('should render correctly', () => {
    const wrapper = shallow(
      <AbilityDisplay
        data={mockData}
        displaying={'ability'}
        requestData={mockRequestData}
      />,
    );

    it('should render name', () => {
      const name = wrapper.find('LargeHeader');
      expect(name.text()).toEqual(mockData.name.toUpperCase());
    });

    it('should render effect header', () => {
      const header = wrapper.find('h3');
      expect(header.at(0).text()).toEqual('Effect');
    });

    it('should render effect description', () => {
      const description = wrapper.find('p');
      expect(description.text()).toEqual(mockData.effect_entries[0].effect);
    });

    it('should render pokemon header', () => {
      const header = wrapper.find('h3');
      expect(header.at(1).text()).toEqual(`Pokemon with ${mockData.name}`);
    });

    it('should pass correct props', () => {
      const comp = wrapper.find('CreateButtonsFromInfo', () => {
        expect(comp.props().array).toEqual(mockData.pokemon);
      });
    });
  });
});
