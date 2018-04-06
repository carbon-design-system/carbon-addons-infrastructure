import React from 'react';
import { mount } from 'enzyme';
import { Button, Link } from 'carbon-components-react';
import {
  OrderSummary,
  OrderSummarySection,
  OrderSummaryTree,
  OrderSummaryItem,
  OrderSummaryItemDetail,
  OrderSummaryTotal,
  OrderSummaryPromo,
  OrderSummaryAgreement,
} from './';

describe('OrderSummary', () => {
  it('should render', () => {
    const wrapper = mount(
      <OrderSummary>
        <OrderSummarySection>
          <h3>Order Summary</h3>
        </OrderSummarySection>
        <OrderSummarySection>
          <OrderSummaryTree>
            <OrderSummaryItem name="Virtual Server" cost="$760.00/mo">
              <OrderSummaryItem name="Network Interface" cost="$0.00/mo" />
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
    );
    expect(wrapper).toMatchSnapshot();
  });
});
