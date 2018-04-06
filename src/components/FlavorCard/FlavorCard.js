import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "carbon-components-react";

export class FlavorCardContainer extends Component {
  static propTypes = {
    children: PropTypes.node,
    selected: PropTypes.string
  };

  render() {
    const { children, ...other } = this.props;

    return <fieldset className="flavorCard__container">{children}</fieldset>;
  }
}

export class FlavorCard extends Component {
  static propTypes = {
    flavor: PropTypes.string,
    price: PropTypes.string,
    value: PropTypes.string,
    groupName: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string
  };

  static defaultProps = {
    flavor: "",
    price: ""
  };

  render() {
    const {
      flavor,
      price,
      value,
      groupName,
      children,
      className,
      ...other
    } = this.props;

    return (
      <div>
        <input type="radio" hidden id={value} name={groupName} value={value} />
        <label htmlFor={value} className="bx--card flavorCard">
          <p className="flavorCard__title">{flavor}</p>
          <ul className="flavorCard__details">{children}</ul>
          <p className="flavorCard__price">{price}</p>
        </label>
      </div>
    );
  }
}

export class FlavorCardBar extends Component {
  static propTypes = {
    count: PropTypes.string,
    unit: PropTypes.string,
    percent: PropTypes.string
  };

  static defaultProps = {
    count: "Order Summary",
    unit: "GB Ram",
    percent: 0
  };

  render() {
    const { count, unit, percent, ...other } = this.props;
    const computedStyles = {
      background: `linear-gradient(90deg, #c0e6ff calc(${percent} * 100%), #e6f5ff calc(${percent} * 100%), #e6f5ff)`
    };

    return (
      <li className="flavorCard__bar" style={computedStyles}>
        <strong>{count}</strong> {unit}
      </li>
    );
  }
}
