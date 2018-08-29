import React from 'react';

/*

   * Amount - numerical total of monitoring metric
   * Unit - specifys how the numerical total in amount is measured
   * Desc - identifies what is being monitored

*/

const InstanceMonitoringMetric = ({ amount, unit, desc }) => (
  <li>
    <span className="infra--instance-amount">{amount}</span>
    <span className="infra--instance-unit">{unit}</span>
    <br />
    <span className="infra--instance-desc">{desc}</span>
  </li>
);

export default InstanceMonitoringMetric;
