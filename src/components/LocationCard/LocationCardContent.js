import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import { Icon } from 'carbon-components-react';

/**
 * The content for `<LocationCard>`.
 */
const LocationCardContent = ({
  className,
  children,
  cardIcon,
  iconDescription,
  ...other
}) => {
  const cardContentClasses = classNames({
    'infra--location-card-overview': true,
    [className]: className,
  });

  return (
    <div {...other} className={cardContentClasses}>
      <div className="infra--location-card-overview__about">
        <div className="bx--about__icon infra--location-card-overview__icon-container">
          <Icon
            className="bx--about__icon--img"
            name={cardIcon}
            description={iconDescription}
          />
        </div>
        <div className="infra--location-card-overview__about__title">
          {children}
        </div>
      </div>
    </div>
  );
};

LocationCardContent.propTypes = {
  /**
   * The child nodes.
   */
  children: PropTypes.node,

  /**
   * The icon.
   */
  cardIcon: PropTypes.string,

  /**
   * The CSS class names.
   */
  className: PropTypes.string,

  /**
   * The description of the icon.
   */
  iconDescription: PropTypes.string,
};

LocationCardContent.defaultProps = {
  iconDescription: 'card icon',
};

export default LocationCardContent;
