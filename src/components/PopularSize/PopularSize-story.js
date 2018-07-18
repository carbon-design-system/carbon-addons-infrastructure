import React, { Fragment } from 'react';
import { storiesOf, action } from '@storybook/react';
import { CardFooter } from 'carbon-addons-cloud-react';
import { SelectableCardGroup } from '../SelectableCard';
import { PopularSizeCard, PopularSizeCardOverview, PopularSizeItem } from '.';

const valueCardPlum = 'value-card-plum';
const valueCardBamboo = 'value-card-bamboo';
const valueCardPine = 'value-card-pine';

storiesOf('Popular Size', module).add('Default', () => (
  <SelectableCardGroup
    valueSelected={valueCardBamboo}
    onChange={action('onChange')}>
    {({ name, value, onChange }) => (
      <Fragment>
        <PopularSizeCard
          checked={value === valueCardPlum}
          name={name}
          value={valueCardPlum}
          onChange={onChange}>
          <CardFooter>Plan Plum</CardFooter>
          <PopularSizeCardOverview>
            <PopularSizeItem unit="vCPUs" value={0.25} maxValue={64} />
            <PopularSizeItem unit="GB RAM" value={0.5} maxValue={512} />
            <PopularSizeItem unit="vDisks" value={2} maxValue={64} />
            <PopularSizeItem unit="vNICs" value={2} maxValue={64} />
            <PopularSizeItem unit="GBPS bandwidth" value={0.1} maxValue={100} />
          </PopularSizeCardOverview>
          <CardFooter>$0.007 hourly</CardFooter>
        </PopularSizeCard>
        <PopularSizeCard
          checked={value === valueCardBamboo}
          name={name}
          value={valueCardBamboo}
          onChange={onChange}>
          <CardFooter>Plan Bamboo</CardFooter>
          <PopularSizeCardOverview>
            <PopularSizeItem unit="vCPUs" value={16} maxValue={64} />
            <PopularSizeItem unit="GB RAM" value={64} maxValue={512} />
            <PopularSizeItem unit="vDisks" value={16} maxValue={64} />
            <PopularSizeItem unit="vNICs" value={8} maxValue={64} />
            <PopularSizeItem unit="GBPS bandwidth" value={4} maxValue={100} />
          </PopularSizeCardOverview>
          <CardFooter>$0.863 hourly</CardFooter>
        </PopularSizeCard>
        <PopularSizeCard
          checked={value === valueCardPine}
          name={name}
          value={valueCardPine}
          onChange={onChange}>
          <CardFooter>Plan Pine</CardFooter>
          <PopularSizeCardOverview>
            <PopularSizeItem unit="vCPUs" value={32} maxValue={64} />
            <PopularSizeItem unit="GB RAM" value={64} maxValue={512} />
            <PopularSizeItem unit="vDisks" value={8} maxValue={64} />
            <PopularSizeItem unit="vNICs" value={8} maxValue={64} />
            <PopularSizeItem unit="GBPS bandwidth" value={10} maxValue={100} />
          </PopularSizeCardOverview>
          <CardFooter>$1.320 hourly</CardFooter>
        </PopularSizeCard>
      </Fragment>
    )}
  </SelectableCardGroup>
));
