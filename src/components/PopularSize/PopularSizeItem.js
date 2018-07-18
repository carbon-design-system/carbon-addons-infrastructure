import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Simple bar chart.
 */
const PopularSizeItem = ({
  className,
  unit,
  value,
  maxValue,
  minPercentage,
  maxPercentage,
}) => {
  const classes = classNames('infra--popular-size-item--container', className);
  return (
    <div className={classes}>
      {/* NOTE: Using the react "style" prop here because width is a variable value. Typically should use className for style. */}
      <div
        className="infra--popular-size-item--bar"
        style={{
          width: `${Math.min(
            Math.max((value / maxValue) * 100, minPercentage),
            maxPercentage
          )}%`,
        }}>
        &nbsp;
      </div>
      <div className="infra--popular-size-item--text">
        {value}
        {unit && ` ${unit}`}
      </div>
    </div>
  );
};

PopularSizeItem.propTypes = {
  /**
   * The CSS class names.
   */
  className: PropTypes.string,

  /**
   * The value.
   */
  value: PropTypes.number,

  /**
   * The unit of the value.
   */
  unit: PropTypes.string,

  /**
   * The maximum value.
   */
  maxValue: PropTypes.number,

  /**
   * The minimum width of the bar chart, by percentage.
   * This is for making sure the bar chart is visible enough.
   */
  minPercentage: PropTypes.number,

  /**
   * The maximum width of the bar chart, by percentage.
   * This is for making sure the bar chart does not overflow.
   */
  maxPercentage: PropTypes.number,
};

PopularSizeItem.defaultProps = {
  maxValue: 100,
  minPercentage: 2,
  maxPercentage: 100,
};

export default PopularSizeItem;
