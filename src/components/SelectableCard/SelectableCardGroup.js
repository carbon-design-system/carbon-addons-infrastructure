import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class SelectableCardGroup extends Component {
  static propTypes = {
    /**
     * The function to return the child nodes.
     */
    children: PropTypes.func,

    /**
     * The CSS class name.
     */
    className: PropTypes.string,

    /**
     * The group name.
     */
    name: PropTypes.string,

    /**
     * The event handler for changing selection.
     */
    onChange: PropTypes.func,

    /**
     * The value of the selected card (radio button).
     */
    valueSelected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  static defaultProps = {
    onChange: /* istanbul ignore next */ () => {},
    className: 'infra--selectable-card-group',
  };

  static getDerivedStateFromProps({ valueSelected }, state) {
    const { prevSelected } = state || {};
    return state && prevSelected === valueSelected
      ? null
      : {
          selected: valueSelected,
          prevSelected: valueSelected,
        };
  }

  /**
   * The auto-generated radio group name.
   * @type {string}
   */
  _name;

  state = {
    selected: null,
  };

  /**
   * Handles `onChange` event.
   * @param {string} newSelection The value of the newly selected card (radio button).
   * @param {value} name The name of the newly selected card (radio button).
   * @param {Event} evt The event.
   */
  handleChange = (newSelection, name, evt) => {
    if (newSelection !== this.state.selected) {
      this.setState({ selected: newSelection });
      this.props.onChange(
        newSelection,
        name || this.props.name || this._name,
        evt
      );
    }
  };

  render() {
    const {
      children,
      name = (this._name =
        this._name ||
        `selectable_card_group__name_${Math.random()
          .toString(36)
          .substr(2)}`),
      valueSelected, // eslint-disable-line no-unused-vars
      onChange, // eslint-disable-line no-unused-vars
      ...other
    } = this.props;
    return (
      <fieldset {...other}>
        {children({
          name,
          value: this.state.selected,
          onChange: this.handleChange,
        })}
      </fieldset>
    );
  }
}
