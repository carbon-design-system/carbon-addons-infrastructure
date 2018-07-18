import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import SelectableCard from '../SelectableCard';

/**
 * Card for choosing location.
 */
export default class LocationCard extends Component {
  static propTypes = {
    /**
     * The CSS class names.
     */
    className: PropTypes.string,

    /**
     * The unique ID of this selectable card (radio button).
     */
    id: PropTypes.string,

    /**
     * The child nodes.
     */
    children: PropTypes.oneOfType(PropTypes.node, PropTypes.func),
  };

  /**
   * The auto-generated ID of the radio button.
   * @private
   */
  _inputId;

  render() {
    const {
      id = (this._inputId =
        this._inputId ||
        `location_card__input__id_${Math.random()
          .toString(36)
          .substr(2)}`),
      className,
      children,
      ...other
    } = this.props;

    const classes = classNames({
      'infra--location-card': true,
      [className]: className,
    });

    return (
      <SelectableCard {...other} id={id} className={classes}>
        {typeof children !== 'function' ? children : children({ id })}
      </SelectableCard>
    );
  }
}
