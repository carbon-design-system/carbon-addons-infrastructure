import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Select, SelectItem } from 'carbon-components-react';

export class RegionSelectContainer extends Component {
  render() {
    const { children } = this.props;

    return <div className="infra--region-select__container">{children}</div>;
  }
}

export class RegionSelect extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.node,
    children: PropTypes.node,
  };

  constructor(props) {
    super();
    this.itemIcon = React.Children.map(props.children, child => {
      if (child.props['data-icon']) {
        return React.cloneElement(child, {
          className: 'infra--custom-optgroup__icon',
        });
      }
    });
    this.filteredChildren = React.Children.map(props.children, child => {
      if (child.props['data-icon']) {
        //Verify it matches the slot we are looking for.
        return null; // Clone it and set it to the slotted child
      } else {
        return React.cloneElement(child);
      }
    });
  }

  render() {
    const { name, value, groupName, className } = this.props;
    const classes = classNames('infra--region-select', className);
    const icon = this.itemIcon;
    const children = this.filteredChildren;
    return (
      <div>
        <input type="radio" hidden id={value} name={groupName} value={value} />
        <label className={classes} htmlFor={value}>
          <div className="infra--region-select__icon-container">{icon}</div>
          <div className="infra--region-select__select-container">
            <label className="infra--region-select__label">{name}</label>
            <Select inline hideLabel className="infra--region-select__select">
              {children}
            </Select>
          </div>
        </label>
      </div>
    );
  }
}
