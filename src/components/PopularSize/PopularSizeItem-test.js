import React from 'react';
import { PopularSizeItem } from '.';

import { shallow } from 'enzyme';

describe('Popular Size Item', () => {
  describe('Renders as expected', () => {
    const wrapper = shallow(
      <PopularSizeItem unit="Item Name" value={15} maxValue={50} />
    );

    it('has the expected <div> elements', () => {
      expect(wrapper.find('div').length).toBe(3);
    });

    it('has the expected style', () => {
      expect(wrapper.find('div').get(1).props.style.width).toEqual('30%');
    });

    it('displays the expected text', () => {
      expect(wrapper.find('div').get(2).props.children[1]).toEqual(
        ' Item Name'
      );
    });
  });

  describe('Special cases', () => {
    const minWidth = shallow(<PopularSizeItem name="Item Name" value={0.5} />);
    const maxWidth = shallow(<PopularSizeItem name="Item Name" value={150} />);

    it('has minimum width of 2%', () => {
      expect(minWidth.find('div').get(1).props.style.width).toEqual('2%');
    });

    it('negative values get min width 2%', () => {
      expect(minWidth.find('div').get(1).props.style.width).toEqual('2%');
    });

    it('has max width of 100%', () => {
      expect(maxWidth.find('div').get(1).props.style.width).toEqual('100%');
    });
  });
});
