import { MoveDisplay } from '../MovesDisplay';
import { shallow } from 'enzyme';
import React from 'react';
import { Button } from '../StyledComponents';

describe('MoveDisplay', () => {
  const mockData = {
    accuracy: 100,
    effect_entries: [{ effect: 'Has a probablity of lowering foes defense' }],
    id: '29',
    name: 'Psyschic',
    power: 95,
    pp: 15,
    type: { name: 'psychic' },
  };

  const mockRequestData = jest.fn();

  describe('displaying is not move', () => {
    it('should render null', () => {
      const wrapper = shallow(
        <MoveDisplay
          data={mockData}
          displaying={'pokemon'}
          requestData={mockRequestData}
        />,
      );
      expect(wrapper.isEmptyRender()).toEqual(true);
    });
  });

  describe('data is null', () => {
    it('data is null', () => {
      const wrapper = shallow(
        <MoveDisplay
          data={null}
          displaying={'move'}
          requestData={mockRequestData}
        />,
      );
      expect(wrapper.isEmptyRender()).toEqual(true);
    });
  });

  describe('data has count key', () => {
    const mockDataAgain = Object.assign({}, mockData);
    mockDataAgain['count'] = 'exists';
    const wrapper = shallow(
      <MoveDisplay
        data={mockDataAgain}
        displaying={'move'}
        requestData={mockRequestData}
      />,
    );
    expect(wrapper.isEmptyRender()).toEqual(true);
  });

  describe('render correctly', () => {
    const wrapper = shallow(
      <MoveDisplay
        data={mockData}
        displaying={'move'}
        requestData={mockRequestData}
      />,
    );
    it('should render name', () => {
      const name = wrapper.find('LargeHeader');
      expect(name.text()).toEqual(mockData.name.toUpperCase());
    });

    it('should render type button', () => {
      const { name } = mockData.type;
      const button = wrapper.find(Button);
      expect(button.text()).toEqual(name);
      button.simulate('click');
      expect(mockRequestData).toHaveBeenCalledWith(name, 'type');
      const header = wrapper.find('h6');
      expect(header.text()).toEqual('Type: ');
    });
  });

  describe('infos', () => {
    describe('info is declared', () => {
      it('should render correctly', () => {
        const wrapper = shallow(
          <MoveDisplay
            data={mockData}
            displaying={'move'}
            requestData={mockRequestData}
          />,
        );

        const expectedResults = [
          mockData.effect_entries[0].effect,
          `Accuracy: ${mockData.accuracy}`,
          `PP: ${mockData.pp}`,
          `Power: ${mockData.power}`,
        ];
        const infos = wrapper.find('p');
        infos.forEach((info, index) => {
          expect(info.text()).toEqual(expectedResults[index]);
        });
      });
    });
    describe('info is not declared', () => {
      it('should render correctly', () => {
        const mockData = {
          name: 'growl',
          id: 12,
          type: 'normal',
          effect_entries: [],
          accuracy: null,
          pp: 15,
          power: null,
        };
        const expectedResults = [
          'Move has no description',
          'Accuracy: Does not apply',
          'PP: 15',
          'Power: Does not apply',
        ];
        const wrapper = shallow(
          <MoveDisplay
            data={mockData}
            displaying={'move'}
            requestData={mockRequestData}
          />,
        );
        const infos = wrapper.find('p');
        infos.forEach((info, index) => {
          expect(info.text()).toEqual(expectedResults[index]);
        });
      });
    });
  });
});
