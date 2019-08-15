import { shallow } from 'enzyme';
import { ExpandingDiv, MenuSection, ActiveButton, ToggleMenu } from '../Menu';
import React from 'react';

describe('ToggleMenu', () => {
  const wrapper = shallow(<ToggleMenu />);
  const buttons = wrapper.find(ActiveButton);

  it('should render only buttons', () => {
    const div = wrapper.find(ExpandingDiv);
    div.simulate('mouseLeave');
    const menuSection = wrapper.find(MenuSection);
    expect(menuSection.props().children).toEqual(null);
  });

  describe('mouse enter event', () => {
    const div = wrapper.find(ExpandingDiv);
    it('shoud render pokedex container', () => {
      div.simulate('mouseEnter');
      buttons.at(0).simulate('click');
      const buttonRefresh = wrapper.find(ActiveButton);
      const pokedex = wrapper.find('PokedexDisplay');
      const search = wrapper.find('SearchBar');
      expect(pokedex).toHaveLength(1);
      expect(search).toHaveLength(0);
      expect(buttonRefresh.at(0).props().active).toEqual(false);
      expect(buttonRefresh.at(1).props().active).toEqual(true);
    });

    it('shoud render searchbar container', () => {
      div.simulate('mouseEnter');
      buttons.at(1).simulate('click');
      const buttonRefresh = wrapper.find(ActiveButton);
      const pokedex = wrapper.find('PokedexDisplay');
      const search = wrapper.find('SearchBar');
      expect(pokedex).toHaveLength(0);
      expect(search).toHaveLength(1);
      expect(buttonRefresh.at(1).props().active).toEqual(false);
      expect(buttonRefresh.at(0).props().active).toEqual(true);
    });
  });
});
