import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import SelectableCard from '../SelectableCard';

/**
 * The `<SelectableCard>` for bar chart.
 */
const PopularSizeCard = ({ className, children, ...other }) => {
  const classes = classNames({
    'infra--popular-size-card': true,
    [className]: className,
  });

  return (
    <SelectableCard {...other} className={classes}>
      {children}
    </SelectableCard>
  );
};

PopularSizeCard.propTypes = {
  /**
   * The CSS class name.
   */
  className: PropTypes.string,

  /**
   * The child nodes.
   */
  children: PropTypes.node,
};

export default PopularSizeCard;
