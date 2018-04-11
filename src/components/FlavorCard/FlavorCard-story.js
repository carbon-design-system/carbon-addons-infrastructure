/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, Dropdown, DropdownItem } from 'carbon-components-react';
import { FlavorCard, FlavorCardBar, FlavorCardContainer } from '../FlavorCard';

storiesOf('FlavorCard', module).addWithInfo(
  'Group',
  `
      This component is used to display the items a user will be purchasing.
    `,
  () => (
    <FlavorCardContainer groupName="foo">
      <FlavorCard
        value="1"
        groupName="foo"
        flavor="Single: Intel Xeon E3-1270 v3"
        price="$25.21 monthly">
        <FlavorCardBar count="4" unit="Cores" percent="4/32" />
        <FlavorCardBar count="3.5" unit="Ghz" percent="3.5/3.8" />
        <FlavorCardBar count="32" unit="GB Ram" percent="32/256" />
        <FlavorCardBar count="Up to 2" unit="Drives" percent="2/6" />
      </FlavorCard>
      <FlavorCard
        value="2"
        groupName="foo"
        flavor="Single: Intel Xeon E3-1270 v3"
        price="$25.21 monthly">
        <FlavorCardBar count="4" unit="Cores" percent="4/32" />
        <FlavorCardBar count="3.5" unit="Ghz" percent="3.5/3.8" />
        <FlavorCardBar count="32" unit="GB Ram" percent="32/256" />
        <FlavorCardBar count="Up to 2" unit="Drives" percent="2/6" />
      </FlavorCard>
      <FlavorCard
        value="3"
        groupName="foo"
        flavor="Single: Intel Xeon E3-1270 v3"
        price="$25.21 monthly">
        <FlavorCardBar count="4" unit="Cores" percent="4/32" />
        <FlavorCardBar count="3.5" unit="Ghz" percent="3.5/3.8" />
        <FlavorCardBar count="32" unit="GB Ram" percent="32/256" />
        <FlavorCardBar count="Up to 2" unit="Drives" percent="2/6" />
      </FlavorCard>
    </FlavorCardContainer>
  )
);
