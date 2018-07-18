/* eslint-disable no-console */

import React, { Fragment } from 'react';
import { storiesOf, action } from '@storybook/react';
import { SelectItem } from 'carbon-components-react';
import { SelectableCardGroup } from '../SelectableCard';
import LocationCard, { LocationCardContent, LocationCardSelect } from '.';

const valueCardLocationApi = 'value-card-location-api';
const valueCardLocationServices = 'value-card-location-service';
const valueCardLocationApps = 'value-card-location-application';

storiesOf('LocationCard', module).add('Default', () => (
  <SelectableCardGroup
    valueSelected={valueCardLocationServices}
    onChange={action('onChange')}>
    {({ name, value, onChange }) => (
      <Fragment>
        <LocationCard
          checked={value === valueCardLocationServices}
          name={name}
          value={valueCardLocationServices}
          onChange={onChange}>
          {({ id }) => (
            <LocationCardContent cardIcon="icon--api">
              <LocationCardSelect labelText="API" labelId={id}>
                <SelectItem value="location-api-01" text="API 01" />
                <SelectItem value="location-api-02" text="API 02" />
              </LocationCardSelect>
            </LocationCardContent>
          )}
        </LocationCard>
        <LocationCard
          checked={value === valueCardLocationApi}
          name={name}
          value={valueCardLocationApi}
          onChange={onChange}>
          {({ id }) => (
            <LocationCardContent cardIcon="icon--app-services">
              <LocationCardSelect labelText="Services" labelId={id}>
                <SelectItem value="location-service-01" text="Service 01" />
                <SelectItem value="location-service-02" text="Service 02" />
              </LocationCardSelect>
            </LocationCardContent>
          )}
        </LocationCard>
        <LocationCard
          checked={value === valueCardLocationApps}
          name={name}
          value={valueCardLocationApps}
          onChange={onChange}>
          {({ id }) => (
            <LocationCardContent cardIcon="icon--applications">
              <LocationCardSelect labelText="Applications" labelId={id}>
                <SelectItem value="location-application-01" text="App 01" />
                <SelectItem value="location-application-02" text="App 02" />
              </LocationCardSelect>
            </LocationCardContent>
          )}
        </LocationCard>
      </Fragment>
    )}
  </SelectableCardGroup>
));
