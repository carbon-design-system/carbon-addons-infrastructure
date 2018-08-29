import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'carbon-components-react';
import { iconChevronUp } from 'carbon-icons';

/*

   * children - specifys the metrics that will be displayed in the card
   * className - custom class for metric card
   * hideSummaryText - help text to hide or show metrics

*/

const InstanceMonitoringCard = ({
  children,
  className: customClassName,
  hideSummaryText,
}) => {
  const className = cx('infra--instance-card', customClassName);

  return (
    <section className={className}>
      <ul className="infra--instance-metrics">{children}</ul>
      <div className="infra--instance-hide">
        <hr />
        <span className="infra--instance-hide-link">
          {hideSummaryText}
          <Icon className="chevron-icon" icon={iconChevronUp} />
        </span>
        <hr />
      </div>
    </section>
  );
};

InstanceMonitoringCard.propTypes = {
  className: PropTypes.string,
  hideSummaryText: PropTypes.node.isRequired,
};

InstanceMonitoringCard.defaultProps = {
  hideSummaryText: 'Hide Summary',
};

export default InstanceMonitoringCard;
