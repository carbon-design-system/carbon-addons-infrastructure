import React from 'react';
import { mount } from 'enzyme';
import { FlavorCard, FlavorCardBar, FlavorCardContainer } from './';

describe('FlavorCard', () => {
  it('should render', () => {
    const wrapper = mount(
      <FlavorCardContainer groupName="foo">
        <FlavorCard
          value="1"
          groupName="foo"
          flavor="Single: Intel Xeon E3-1270 v3"
          price="$25.21 monthly">
          <FlavorCardBar count="4" unit="Cores" percent="4/32" />
        </FlavorCard>
      </FlavorCardContainer>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
