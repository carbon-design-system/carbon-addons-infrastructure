import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Icon } from 'carbon-components-react';
import classNames from 'classnames';

/**
 * A selectable card.
 */
export default class SelectableCard extends Component {
  static propTypes = {
    /**
     * `true` to select this card.
     */
    checked: PropTypes.bool,

    /**
     * The CSS class names.
     */
    className: PropTypes.string,

    /**
     * The unique ID of this selectable card (radio button).
     */
    id: PropTypes.string,

    /**
     * The name of the radio group.
     */
    name: PropTypes.string,

    /**
     * The value of the radio button.
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

    /**
     * The description of the checkmark icon.
     */
    checkmarkIconDescription: PropTypes.string,

    /**
     * The `change` event handler.
     */
    onChange: PropTypes.func,
  };

  static defaultProps = {
    checkmarkIconDescription: 'Selectable card checkmark',
    onChange: () => {},
  };

  /**
   * The auto-generated ID of the radio button.
   * @private
   */
  _inputId;

  /**
   * Handles `onChange` event.
   * @param {Event} evt The event.
   */
  handleChange = evt => {
    this.props.onChange(this.props.value, this.props.name, evt);
  };

  render() {
    const {
      id = (this._inputId =
        this._inputId ||
        `selectable_card__input__id_${Math.random()
          .toString(36)
          .substr(2)}`),
      children,
      className,
      checkmarkIconDescription,
      ...other
    } = this.props;

    const classes = classNames(
      className,
      'bx--card',
      'infra--selectable-card',
      {
        'bx--tile--is-selected': this.props.checked,
      }
    );

    return (
      <label htmlFor={id} className={classes} tabIndex="0">
        <input
          {...other}
          type="radio"
          className="bx--tile-input"
          id={id}
          onChange={this.handleChange}
        />
        <div className="bx--tile__checkmark">
          <Icon
            name="checkmark--glyph"
            description={checkmarkIconDescription}
          />
        </div>
        {children}
      </label>
    );
  }
}
