/* eslint-disable no-console */

import React from "react";
import { storiesOf } from "@storybook/react";
import {
  Button,
  Link,
  TextInput,
  Accordion,
  AccordionItem
} from "carbon-components-react";
import {
  OrderSummary,
  OrderSummarySection,
  OrderSummaryTree,
  OrderSummaryItem,
  OrderSummaryItemDetail,
  OrderSummaryTotal,
  OrderSummaryPromo,
  OrderSummaryAgreement
} from "../OrderSummary";

storiesOf("OrderSummary", module)
  .addWithInfo(
    "Basic",
    `
      This component is used to display the items a user will be purchasing. The category version of OrderSummary can break the items being purchased into categories.
    `,
    () => (
      <OrderSummary>
        <OrderSummarySection>
          <h3>Order Summary</h3>
        </OrderSummarySection>
        <OrderSummarySection>
          <OrderSummaryTree>
            <OrderSummaryItem name="Virtual Server" cost="$760.00/mo">
              <OrderSummaryItem name="Network Interface" cost="$0.00/mo" />
              <OrderSummaryItem name="Storage Volume" cost="$0.00/mo" />
            </OrderSummaryItem>
          </OrderSummaryTree>
        </OrderSummarySection>
        <OrderSummarySection>
          <OrderSummaryTotal
            text="Total due monthly"
            textNote="*based on average usage"
            cost="760.00"
            costNote="estimated"
          />
        </OrderSummarySection>
        <OrderSummarySection>
          <OrderSummaryAgreement>
            <p>
              I have read and agree to the Third-Party Service Agreements listed
              below:
            </p>
            <p>
              <Link href="#">3rd Party Software Terms CentOS</Link>
            </p>
          </OrderSummaryAgreement>
        </OrderSummarySection>
        <OrderSummarySection>
          <Button>Provision</Button>
        </OrderSummarySection>
      </OrderSummary>
    )
  )
  .addWithInfo(
    "Promo Code",
    `
        This component is used to display the items a user will be purchasing. The category version of OrderSummary can break the items being purchased into categories.
      `,
    () => (
      <OrderSummary>
        <OrderSummarySection>
          <h3>Order Summary</h3>
        </OrderSummarySection>
        <OrderSummarySection>
          <OrderSummaryTree>
            <OrderSummaryItem name="Intel Xeon E5-2620 v4" cost="$760.00/mo">
              <OrderSummaryItemDetail text="16 cores, 2.10GHz" cost="" />
              <OrderSummaryItemDetail text="64 GB Ram" cost="" />
              <OrderSummaryItemDetail text="CentOS 7.x" cost="" />
              <OrderSummaryItem name="Network Interface" cost="$0.00/mo" />
              <OrderSummaryItem name="Storage Volume" cost="$0.00/mo">
                <OrderSummaryItemDetail text="2 SATA 1 TB" cost="" />
              </OrderSummaryItem>
            </OrderSummaryItem>
          </OrderSummaryTree>
        </OrderSummarySection>
        <OrderSummarySection>
          <OrderSummaryTotal text="Subtotal" cost="$600.00" type="subtotal" />
          <OrderSummaryTotal text="PROMO1" cost="-$100.00" type="subtotal" />
          <OrderSummaryTotal
            text="Total due per month"
            textNote="*based on average usage"
            cost="$500.00"
            costNote="estimated"
          />
        </OrderSummarySection>
        <OrderSummarySection>
          <OrderSummaryPromo />
        </OrderSummarySection>
        <OrderSummarySection>
          <OrderSummaryAgreement>
            <p>
              I have read and agree to the Third-Party Service Agreements listed
              below:
            </p>
            <p>
              <Link href="#">3rd Party Software Terms CentOS</Link>
            </p>
          </OrderSummaryAgreement>
        </OrderSummarySection>
        <OrderSummarySection>
          <Button>Provision</Button>
        </OrderSummarySection>
      </OrderSummary>
      // <OrderSummarySection>
      // <div className="infra--CostSummary-itemGroupContainer">
      //   <svg className="infra--CostSummary-icon" fill-rule="evenodd" height="23" name="devices" role="img" viewBox="0 0 24 23" width="24" aria-label="devices"><title>devices</title><path d="M20.5 17c1.4 0 2.5 1.1 2.5 2.5S21.9 22 20.5 22h-17C2.1 22 1 20.9 1 19.5S2.1 17 3.5 17h17zm0-1h-17C1.6 16 0 17.6 0 19.5S1.6 23 3.5 23h17c1.9 0 3.5-1.6 3.5-3.5S22.4 16 20.5 16z"></path><path d="M19.5 20h-15c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h15c.3 0 .5.2.5.5s-.2.5-.5.5zm1-11c1.4 0 2.5 1.1 2.5 2.5S21.9 14 20.5 14h-17C2.1 14 1 12.9 1 11.5S2.1 9 3.5 9h17zm0-1h-17C1.6 8 0 9.6 0 11.5S1.6 15 3.5 15h17c1.9 0 3.5-1.6 3.5-3.5S22.4 8 20.5 8z"></path><path d="M19.5 12h-15c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h15c.3 0 .5.2.5.5s-.2.5-.5.5zm1-11C21.9 1 23 2.1 23 3.5S21.9 6 20.5 6h-17C2.1 6 1 4.9 1 3.5S2.1 1 3.5 1h17zm0-1h-17C1.6 0 0 1.6 0 3.5S1.6 7 3.5 7h17C22.4 7 24 5.4 24 3.5S22.4 0 20.5 0z"></path><path d="M19.5 4h-15c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h15c.3 0 .5.2.5.5s-.2.5-.5.5z"></path></svg>
      //   <p className="infra--CostSummary-title">Intel Xeon E5-2620 v4</p>
      //   <span className="infra--CostSummary-cost">$769.00/mo</span>
      // </div>
      // <li className="infra--CostSummary-itemContainer">
      //   <svg className="infra--CostSummary-icon" fill-rule="evenodd" height="24" name="network" role="img" viewBox="0 0 23 24" width="23" aria-label="network"><title>network</title><path d="M20.5 18v-6h-9V5.9C12.9 5.7 14 4.5 14 3c0-1.7-1.3-3-3-3S8 1.3 8 3c0 1.5 1.1 2.7 2.5 2.9V12h-8v6.1C1.1 18.4 0 19.6 0 21c0 1.7 1.3 3 3 3s3-1.3 3-3c0-1.5-1.1-2.7-2.5-2.9V13h16v5.1c-1.4.2-2.5 1.5-2.5 2.9 0 1.7 1.3 3 3 3s3-1.3 3-3c0-1.5-1-2.8-2.5-3zM9 3c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zM5 21c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm15 2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></svg>
      //   <span className="infra--CostSummary-title">Network Interface</span>
      //   <span className="infra--CostSummary-cost">$0.00/mo</span>
      // </li>
      // <li className="infra--CostSummary-itemContainer">
      //   <svg className="infra--CostSummary-icon" fill-rule="evenodd" height="24" name="storage" role="img" viewBox="0 0 24 24" width="24" aria-label="storage"><title>storage</title><path d="M11.9 1.3c5.4 0 9.3 1 10.6 1.7-1.3.7-4.9 1.6-10.6 1.6-5.6 0-9.1-1-10.3-1.6 1.1-.7 4.7-1.7 10.3-1.7zm0-1.3C5.1 0 0 1.4 0 3s5.1 3 11.9 3C18.7 6 24 4.6 24 3s-5.4-3-12.1-3zm.1 18c-4.5 0-12-.7-12-3.2V12h1.2v2.9c0 .5 3.3 2 10.8 2 7.1 0 10.8-1.4 10.8-2V12H24v2.9c0 2.4-7.5 3.1-12 3.1zm0 6c-4.5 0-12-.7-12-3.2V18h1.2v2.8c0 .5 3.3 2 10.8 2 7.1 0 10.8-1.4 10.8-2V18H24v2.8c0 2.5-7.5 3.2-12 3.2zm0-12c-4.4 0-12-.7-12-3.2V6h1.2v2.8c0 .5 3.3 2 10.8 2 7.5 0 10.8-1.4 10.8-2V6H24v2.8c0 2.5-7.5 3.2-12 3.2z"></path></svg>
      //   <span className="infra--CostSummary-title">Boot Disk</span>
      //   <span className="infra--CostSummary-cost">$0.00/mo</span>
      // </li>
      //   <Checkbox
      //     defaultChecked
      //     id="checkbox-label-1"
      //     labelText="I have read and agreed to the Third-Party Service Agreements below:"
      //   />
      // </OrderSummarySection>
    )
  );
