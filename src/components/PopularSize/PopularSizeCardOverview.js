import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

/**
 * The main content in `<Card>`.
 */
const PopularSizeCardOverview = ({ className, children, ...other }) => {
  const classes = classNames({
    'bx--card__card-overview': true,
    'infra--popular-size-card__card-overview': true,
    [className]: className,
  });

  return (
    <div {...other} className={classes}>
      {children}
    </div>
  );
};

PopularSizeCardOverview.propTypes = {
  /**
   * The CSS class name.
   */
  className: PropTypes.string,

  /**
   * The child nodes.
   */
  children: PropTypes.node,
};

export default PopularSizeCardOverview;
