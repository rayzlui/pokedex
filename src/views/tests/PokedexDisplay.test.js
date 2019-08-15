import { shallow } from 'enzyme';
import React from 'react';
import {
  MultipleOptions,
  PokedexDisplay,
  PokedexPokemonList,
  Select,
  PokedexHeader,
} from '../PokedexDisplay';
import { Button } from '../StyledComponents';

const mockData = {
  pokemon_entries: [
    { pokemon_species: { name: 'charizard' } },
    { pokemon_species: { name: 'bulbasaur' } },
    { pokemon_species: { name: 'pikachu' } },
  ],
};
const expectedRegions = [
  'kanto',
  'original-johto',
  'hoenn',
  'original-sinnoh',
  'original-unova',
  'kalos-central',
  'kalos-coastal',
  'kalos-mountain',
];

describe('PokedexPokemonList', () => {
  describe('when data is null', () => {
    it('should return null', () => {
      const wrapper = shallow(
        <PokedexPokemonList data={null} displaying={'pokedex'} />,
      );
      expect(wrapper.isEmptyRender()).toBe(true);
    });
  });

  describe('when displaying is not pokedex', () => {
    it('should return null', () => {
      const wrapper = shallow(
        <PokedexPokemonList data={mockData} displaying={'pokemon'} />,
      );
      expect(wrapper.isEmptyRender()).toBe(true);
    });
  });

  describe('when data exists', () => {
    const expectedResult = ['charizard', 'bulbasaur', 'pikachu'];
    const mockrequestData = jest.fn();
    const wrapper = shallow(
      <PokedexPokemonList
        data={mockData}
        requestData={mockrequestData}
        displaying={'pokedex'}
        pokedex={'kanto'}
      />,
    );

    it('should render header', () => {
      const header = wrapper.find(PokedexHeader);
      expect(header.text()).toEqual('KANTO');
    });

    describe('Buttons', () => {
      const buttons = wrapper.find(Button);

      it('should render ', () => {
        expect(buttons).toHaveLength(3);
      });

      it('should handle  event', () => {
        buttons.forEach((button, index) => {
          button.simulate('click');
          expect(button.text()).toEqual(expectedResult[index]);
          expect(mockrequestData).toHaveBeenCalledWith(expectedResult[index]);
        });
      });
    });
  });
});

describe('MultipleOptions', () => {
  const wrapper = shallow(<MultipleOptions options={expectedRegions} />);
  const options = wrapper.find('option');

  it('should return an array', () => {
    expect(options).toHaveLength(8);
  });

  it('should render correctly', () => {
    options.forEach((option, index) => {
      expect(option.text()).toEqual(expectedRegions[index].toUpperCase());
      expect(option.props().value).toEqual(expectedRegions[index]);
    });
  });
});

describe('PokedexDisplay', () => {
  const mockChangePokedex = jest.fn();
  const mockPokedex = 'kanto';
  const mockrequestData = jest.fn();

  describe('app was not just loaded', () => {
    const mockSeedPokedex = jest.fn();
    const wrapper = shallow(
      <PokedexDisplay
        pokedex={mockPokedex}
        displaying={'pokedex'}
        data={mockData}
        isFetching={false}
        changePokedex={mockChangePokedex}
        requestData={mockrequestData}
        seedPokedex={mockSeedPokedex}
      />,
    );
    it('should render correctly', () => {
      const options = wrapper.find('MultipleOptions');
      expect(options).toHaveLength(1);
      expect(options.props().options).toEqual(expectedRegions);
    });

    it('should process the event', () => {
      const dropDown = wrapper.find(Select);
      dropDown.simulate('change', { target: { value: 'johto' } });
      expect(mockChangePokedex).toBeCalledWith('johto');
    });

    it('should not called seedpokedex', () => {
      expect(mockSeedPokedex).not.toHaveBeenCalled();
    });
  });

  describe('app was just loaded', () => {
    const mockSeedPokedex = jest.fn();
    const wrapper = shallow(
      <PokedexDisplay
        pokedex={mockPokedex}
        data={null}
        isFetching={false}
        changePokedex={mockChangePokedex}
        requestData={mockrequestData}
        seedPokedex={mockSeedPokedex}
      />,
    );
    it('should call seedPokedex', () => {
      expect(mockSeedPokedex).toHaveBeenCalled();
      expect(wrapper.isEmptyRender()).toBe(true);
    });
  });
});
