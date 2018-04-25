/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { SelectItem } from 'carbon-components-react';
import { RegionSelect, RegionSelectGroup } from '../RegionSelect';

storiesOf('Region Select', module).addWithInfo(
  'Group',
  `
      This component is used to display the items a user will be purchasing. This version does not include OrderSummaryCategory.
    `,
  () => (
    <RegionSelect
      onChange=""
      className="some-class"
      id="region-select-1"
      defaultValue="SJC01">
      <RegionSelectGroup className="some-class" label="NA West" icon="">
        <SelectItem value="SJC01" text="SJC01" />
        <SelectItem value="SJC02" text="SJC02" />
      </RegionSelectGroup>
    </RegionSelect>
  )
);
