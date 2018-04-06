import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Button,
  Checkbox,
  TextInput,
  Accordion,
  AccordionItem
} from "carbon-components-react";

export class OrderSummary extends Component {
  render() {
    const { children, className, ...other } = this.props;
    const classes = classNames("infra--order-summary", className);

    return (
      <section className={classes} {...other}>
        {children}
      </section>
    );
  }
}

export class OrderSummarySection extends Component {
  render() {
    const { children, className, ...other } = this.props;
    const classes = classNames("infra--order-summary-section", className);

    return (
      <div className={classes} {...other}>
        {children}
      </div>
    );
  }
}

export class OrderSummaryTree extends Component {
  render() {
    const { children, className, ...other } = this.props;
    const classes = classNames("infra--order-summary-tree", className);

    return (
      <div className={classes} {...other}>
        {children}
      </div>
    );
  }
}

export class OrderSummaryItem extends Component {
  constructor(props) {
    super();
    this.itemIcon = React.Children.map(props.children, child => {
      if (child.props["data-icon"]) {
        return React.cloneElement(child, {
          className: "infra--order-summary-item__icon"
        });
      }
    });
    this.filteredChildren = React.Children.map(props.children, child => {
      if (child.props["data-icon"]) {
        //Verify it matches the slot we are looking for.
        return null; // Clone it and set it to the slotted child
      } else {
        return React.cloneElement(child);
      }
    });
  }

  render() {
    const { name, cost, className, ...other } = this.props;
    const itemIcon = this.itemIcon;
    const children = this.filteredChildren;
    const classes = classNames("infra--order-summary-item", className);

    return (
      <div className={classes} {...other}>
        <p className="infra--order-summary-item__overview">
          <span className="infra--order-summary-item__name">
            {itemIcon} {name}
          </span>
          <span className="infra--order-summary-item__cost">{cost}</span>
        </p>
        <div className="infra--order-summary-item__children">{children}</div>
      </div>
    );
  }
}

export class OrderSummaryItemDetail extends Component {
  render() {
    const { text, cost, children, className, ...other } = this.props;
    const classes = classNames("infra--order-summary-item", className);

    return (
      <p className="infra--order-summary-item__detail">
        <span className="infra--order-summary-item__detail-text">{text}</span>
        <span className="infra--order-summary-item__detail-cost">{cost}</span>
      </p>
    );
  }
}

export class OrderSummaryTotal extends Component {
  render() {
    const {
      text,
      cost,
      textNote,
      costNote,
      type,
      children,
      className,
      ...other
    } = this.props;

    return (
      <p className="infra--order-summary-total" data-type={type || "total"}>
        <span className="infra--order-summary-total__text">
          {text}{" "}
          <span className="infra--order-summary-total__note">{textNote}</span>
        </span>
        <span className="infra--order-summary-total__cost">
          {cost}{" "}
          <span className="infra--order-summary-total__note">{costNote}</span>
        </span>
      </p>
    );
  }
}

export class OrderSummaryPromo extends Component {
  render() {
    const { children, className, ...other } = this.props;

    return (
      <Accordion className="infra--order-summary-promo">
        <AccordionItem
          title="Apply promo code"
          className="infra--order-summary-promo__dropdown"
        >
          <TextInput
            id=""
            labelText="Promo Code"
            placeholder="Promo Code"
            hideLabel
          />
          <Button kind="secondary">Apply</Button>
        </AccordionItem>
      </Accordion>
    );
  }
}

export class OrderSummaryAgreement extends Component {
  render() {
    const { children, className, ...other } = this.props;

    return (
      <Checkbox
        defaultChecked
        className="infra--order-summary-agreement"
        id="checkbox-label-1"
        labelText={children}
      />
    );
  }
}
