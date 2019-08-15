import { shallow } from 'enzyme';
import {
  PokemonDisplay,
  CreateButtonsFromInfo,
  ImageDisplay,
} from '../PokemonDisplay';
import React from 'react';
import { Button, Image, LargeHeader } from '../StyledComponents';

const mockData = {
  name: 'charizard',
  id: '6',
  types: [{ type: { name: 'fire' } }, { type: { name: 'flying' } }],
  moves: [
    { move: { name: 'flamethrower' } },
    { move: { name: 'fireblast' } },
    { move: { name: 'firespin' } },
  ],
  abilities: [{ ability: 'fly' }],
  sprites: { front_shiny: 'sprite' },
};

const mockRequestData = jest.fn();

describe('CreateButtonsFromInfo', () => {
  it('should handle accessing objects data correctly', () => {
    const { moves } = mockData;
    const wrapper = shallow(
      <CreateButtonsFromInfo
        array={moves}
        type={'move'}
        requestData={mockRequestData}
      />,
    );
    const buttons = wrapper.find(Button);
    expect(buttons).toHaveLength(3);
    buttons.forEach((button, index) => {
      const input = moves[index].move.name;
      const params = [input, 'move'];
      expect(button.text()).toEqual(input);
      button.simulate('click');
      expect(mockRequestData).toHaveBeenCalledWith(...params);
    });
  });
  it('should handle accessing objects data correctly', () => {
    const { types } = mockData;
    const wrapper = shallow(
      <CreateButtonsFromInfo
        array={types}
        type={'type'}
        requestData={mockRequestData}
      />,
    );
    const buttons = wrapper.find(Button);
    expect(buttons).toHaveLength(2);
    buttons.forEach((button, index) => {
      const input = types[index].type.name;
      const params = [input, 'type'];
      expect(button.text()).toEqual(input);
      button.simulate('click');
      expect(mockRequestData).toHaveBeenCalledWith(...params);
    });
  });
});

describe('PokemonDisplay', () => {
  it('should render null', () => {
    const wrapper = shallow(
      <PokemonDisplay
        data={mockData}
        displaying={'pokedex'}
        requestData={mockRequestData}
      />,
    );
    expect(wrapper.isEmptyRender()).toBe(true);
  });

  describe('data has count key', () => {
    const mockDataAgain = Object.assign({}, mockData);
    mockDataAgain['count'] = 'exists';
    const wrapper = shallow(
      <PokemonDisplay
        data={mockDataAgain}
        displaying={'pokemon'}
        requestData={mockRequestData}
      />,
    );
    expect(wrapper.isEmptyRender()).toEqual(true);
  });

  describe('should render correctly', () => {
    const wrapper = shallow(
      <PokemonDisplay
        data={mockData}
        displaying={'pokemon'}
        requestData={mockRequestData}
      />,
    );
    it('should render name', () => {
      const name = wrapper.find(LargeHeader);
      expect(name).toHaveLength(1);
      expect(name.text()).toEqual(mockData.name.toUpperCase());
    });

    it('should render image', () => {
      const image = wrapper.find('ImageDisplay');
      expect(image).toHaveLength(1);
      expect(image.props().sprites).toEqual(mockData.sprites);
      expect(image.props().name).toEqual(mockData.name);
    });

    it('should render info', () => {
      const expectedResult = [
        [mockData.types, 'type'],
        [mockData.abilities, 'ability'],
        [mockData.moves, 'move'],
      ];
      const infos = wrapper.find('CreateButtonsFromInfo');
      expect(infos).toHaveLength(3);
      infos.forEach((info, index) => {
        const props = info.props();
        expect(props.array).toEqual(expectedResult[index][0]);
        expect(props.type).toEqual(expectedResult[index][1]);
        expect(props.requestData).toEqual(mockRequestData);
      });
    });
  });
});

describe('ImageDisplay', () => {
  const mockSprites = {
    sprite1: 'sprite1',
    sprite2: 'sprite2',
    sprite3: 'sprite3',
  };
  const mockName = 'scizor';

  describe('image click flow', () => {
    it('should render third sprite', () => {
      const wrapper = shallow(
        <ImageDisplay sprites={mockSprites} name={mockName} />,
      );
      const image = wrapper.find(Image);
      const { src, alt } = image.props();
      expect(src).toEqual(mockSprites.sprite3);
      expect(alt).toEqual(mockName);
    });

    it('should render first sprite', () => {
      const wrapper = shallow(
        <ImageDisplay sprites={mockSprites} name={mockName} />,
      );
      const imageFirst = wrapper.find(Image);
      imageFirst.simulate('click');
      const imageSecond = wrapper.find(Image);
      const { src } = imageSecond.props();
      expect(src).toEqual(mockSprites.sprite1);
    });

    it('should render second sprite', () => {
      const wrapper = shallow(
        <ImageDisplay sprites={mockSprites} name={mockName} />,
      );
      const imageFirst = wrapper.find(Image);
      imageFirst.simulate('click');
      const imageSecond = wrapper.find(Image);
      imageSecond.simulate('click');
      const imageThird = wrapper.find(Image);
      const { src } = imageThird.props();
      expect(src).toEqual(mockSprites.sprite2);
    });
  });
});
