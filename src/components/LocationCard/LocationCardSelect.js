import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Icon } from 'carbon-components-react';

/**
 * Select box for `<LocationCard>`.
 */
export default class LocationCardSelect extends Component {
  static propTypes = {
    /**
     * The child nodes.
     */
    children: PropTypes.node,

    /**
     * The CSS class names of the element containing `<select>`.
     */
    className: PropTypes.string,

    /**
     * The CSS class names for the top-level node.
     */
    containerClassName: PropTypes.string,

    /**
     * The unique ID.
     */
    id: PropTypes.string.isRequired,

    /**
     * The unique ID of the `<label>`. Same as `id` by default.
     */
    labelId: PropTypes.string,

    /**
     * The content of the `<label>`
     */
    labelText: PropTypes.node,

    /**
     * The event handler for `onChange` event.
     */
    onChange: PropTypes.func,

    /**
     * `true` to disable the `<select>`.
     */
    disabled: PropTypes.bool,

    /**
     * The default value of the `<select>`.
     */
    defaultValue: PropTypes.any,

    /**
     * The description of the caret icon.
     */
    iconDescription: PropTypes.string.isRequired,

    /**
     * `true` to hide the `<label>`
     */
    hideLabel: PropTypes.bool,

    /**
     * `true` to enable the light version of the design.
     */
    light: PropTypes.bool,
  };

  static defaultProps = {
    disabled: false,
    labelText: 'Select',
    inline: false,
    iconDescription: 'open list of options',
    light: false,
  };

  /**
   * The auto-generated ID of the select box.
   * @private
   */
  _selectId;

  render() {
    const {
      className,
      containerClassName,
      id = (this._selectId =
        this._selectId ||
        `location_card__select__id_${Math.random()
          .toString(36)
          .substr(2)}`),
      labelId = id,
      labelText,
      disabled,
      children,
      iconDescription,
      hideLabel,
      light,
      ...other
    } = this.props;

    const containerClasses = classNames(containerClassName, {
      'bx--form-item': true,
      'infra--location-card-overview__select-container': true,
      [containerClassName]: containerClassName,
    });
    const selectClasses = classNames(className, {
      'bx--select': true,
      'infra--location-card-overview__select': true,
      'bx--select--inline': true,
      'bx--select--light': light,
      [className]: className,
    });
    const labelClasses = classNames(
      'infra--location-card-overview__select-label',
      {
        'bx--visually-hidden': hideLabel,
      }
    );
    return (
      <div className={containerClasses}>
        <label htmlFor={labelId} className={labelClasses}>
          {labelText}
        </label>
        <div className={selectClasses}>
          <select
            {...other}
            id={id}
            className="bx--select-input"
            disabled={disabled}>
            {children}
          </select>
          <Icon
            name="caret--down"
            className="bx--select__arrow"
            description={iconDescription}
          />
        </div>
      </div>
    );
  }
}
