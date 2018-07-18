import React, { Fragment } from 'react';
import { storiesOf, action } from '@storybook/react';
import SelectableCard, { SelectableCardGroup } from '.';

const valueCardFoo = 'value-card-foo';
const valueCardBar = 'value-card-bar';

storiesOf('SelectableCard', module).add('Default', () => (
  <SelectableCardGroup
    valueSelected={valueCardFoo}
    onChange={action('onChange')}>
    {({ name, value, onChange }) => (
      <Fragment>
        <SelectableCard
          checked={value === valueCardFoo}
          name={name}
          value={valueCardFoo}
          onChange={onChange}
        />
        <SelectableCard
          checked={value === valueCardBar}
          name={name}
          value={valueCardBar}
          onChange={onChange}
        />
      </Fragment>
    )}
  </SelectableCardGroup>
));
