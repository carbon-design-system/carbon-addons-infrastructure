import React from 'react';
import { mount } from 'enzyme';
import { SelectItem } from 'carbon-components-react';
import { CustomSelect, CustomSelectContainer } from './';

describe('CustomSelect', () => {
  it('should render', () => {
    const wrapper = mount(
      <CustomSelectContainer>
        <CustomSelect name="NA North" value="3" groupName="customselect">
          <SelectItem value="TOR02" text="TOR02" />
          <SelectItem value="TOR04" text="TOR04" />
        </CustomSelect>
      </CustomSelectContainer>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
