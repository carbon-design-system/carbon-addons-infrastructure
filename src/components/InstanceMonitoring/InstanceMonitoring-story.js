import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  InstanceMonitoringCard,
  InstanceMonitoringMetric,
} from '../InstanceMonitoring';

const metricInfo = [
  {
    key: '1',
    amount: '3',
    unit: 'mbps',
    desc: 'Throughput',
  },
  {
    key: '2',
    amount: '10',
    unit: 'cps',
    desc: 'Connection rate',
  },
  {
    key: '3',
    amount: '2',
    unit: 'B',
    desc: 'Data processed this month',
  },
  {
    key: '4',
    amount: '3',
    unit: '',
    desc: 'Active connections',
  },
];

storiesOf('InstanceMonitoringCard', module).add('Default', () => (
  <InstanceMonitoringCard>
    {metricInfo.map(metric => (
      <InstanceMonitoringMetric
        key={metric.key}
        amount={metric.amount}
        unit={metric.unit}
        desc={metric.desc}
      />
    ))}
  </InstanceMonitoringCard>
));
