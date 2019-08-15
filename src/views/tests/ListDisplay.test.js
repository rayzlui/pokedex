import { shallow } from 'enzyme';
import { ListDisplay } from '../ListDisplay';
import React from 'react';

describe('ListDisplay', () => {
  const mockRequestData = jest.fn();
  const mockFetchUrl = jest.fn();

  describe('no data passed', () => {
    it('should render null', () => {
      const wrapper = shallow(<ListDisplay />);
      expect(wrapper.isEmptyRender()).toBe(true);
    });
  });

  describe('data has no count key', () => {
    const mockData = { name: 'charizard', type: 'fire', moves: 'fire-punch' };
    it('should render null', () => {
      const wrapper = shallow(
        <ListDisplay
          data={mockData}
          requestData={mockRequestData}
          fetchUrl={mockFetchUrl}
          displaying={'pokemon'}
        />,
      );
      expect(wrapper.isEmptyRender()).toBe(true);
    });
  });

  describe('data has count key', () => {
    const mockData = {
      count: 4,
      results: [
        { name: 'charizard' },
        { name: 'charmander' },
        { name: 'charmelon' },
        { name: 'pikachu' },
      ],
      next: 'https://pokeapi.co/v2/pokemon/?type=forward%count=20',
      previous: 'https://pokeapi.co/v2/pokemon/?type=back%count=20',
    };

    describe('should render correctly', () => {
      const wrapper = shallow(
        <ListDisplay
          data={mockData}
          fetchUrl={mockFetchUrl}
          requestData={mockRequestData}
          displaying={'pokemon'}
        />,
      );

      it('should render pokemon names', () => {
        const expectedResults = [
          'charizard',
          'charmander',
          'charmelon',
          'pikachu',
        ];
        const names = wrapper.find('p');
        names.forEach((name, index) => {
          expect(name.text()).toEqual(expectedResults[index]);
        });
      });

      it('should render pokemon button', () => {
        const expectedResults = [
          'charizard',
          'charmander',
          'charmelon',
          'pikachu',
        ];
        const buttons = wrapper.find('.view-pokemon-button');
        buttons.forEach((button, index) => {
          expect(button.text()).toEqual('View');
          expect(mockRequestData).not.toHaveBeenCalledWith(
            expectedResults[index],
            'pokemon',
          );
          button.simulate('click');
          expect(mockRequestData).toHaveBeenCalledWith(
            expectedResults[index],
            'pokemon',
          );
        });
      });

      it('should render next button', () => {
        const nextButton = wrapper.find('.next-button');
        expect(nextButton.text()).toEqual('Next');
        expect(mockFetchUrl).not.toHaveBeenCalledWith(mockData.next);
        nextButton.simulate('click');
        expect(mockFetchUrl).toHaveBeenCalledWith(mockData.next);
      });

      it('should render previous button', () => {
        const previousButton = wrapper.find('.previous-button');
        expect(previousButton.text()).toEqual('Previous');
        expect(mockFetchUrl).not.toHaveBeenCalledWith(mockData.previous);
        previousButton.simulate('click');
        expect(mockFetchUrl).toHaveBeenCalledWith(mockData.previous);
      });
    });
  });

  describe('data does not have next or previous key', () => {
    const mockData = {
      count: 4,
      results: [
        { name: 'charizard' },
        { name: 'charmander' },
        { name: 'charmelon' },
        { name: 'pikachu' },
      ],
    };
    const wrapper = shallow(
      <ListDisplay
        data={mockData}
        fetchUrl={mockFetchUrl}
        requestData={mockRequestData}
        displaying={'pokemon'}
      />,
    );

    it('should not render next button', () => {
      const nextButton = wrapper.find('.next-button');
      expect(nextButton.isEmptyRender()).toBe(true);
    });

    it('should render previous button', () => {
      const previousButton = wrapper.find('.previous-button');
      expect(previousButton.isEmptyRender()).toBe(true);
    });
  });
});
