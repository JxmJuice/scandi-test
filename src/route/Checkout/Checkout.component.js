import ContentWrapper from "@scandipwa/scandipwa/src/component/ContentWrapper";
import {
  BILLING_STEP,
  DETAILS_STEP,
  SHIPPING_STEP,
} from "@scandipwa/scandipwa/src/route/Checkout/Checkout.config";
import ProgressBar from "Component/ProgressBar/ProgressBar.component";
import { Checkout as SourceCheckout } from "SourceRoute/Checkout/Checkout.component";
import "./Checkout.extension.style.scss";

class CheckoutComponent extends SourceCheckout {
  renderStep() {
    const { checkoutStep } = this.props;
    const { render } = this.stepMap[checkoutStep];
    if (render) {
      return render();
    }
    return null;
  }

  renderProgressBar() {
    const { checkoutStep } = this.props;
    let steps = [SHIPPING_STEP, BILLING_STEP, DETAILS_STEP];
    const titles = steps.map((step) => {
      return this.stepMap[step].title;
    });
    console.log(titles)
    return (
      <ProgressBar steps={steps} currentStep={checkoutStep} titles={titles} />
    );
  }

  render() {
    return (
      <main block="Checkout">
        {this.renderProgressBar()}
        <ContentWrapper
          wrapperMix={{ block: "Checkout", elem: "Wrapper" }}
          label={__("Checkout page")}
        >
          {this.renderSummary(true)}
          <div block="Checkout" elem="Step">
            {this.renderTitle()}
            {this.renderGuestForm()}
            {this.renderStep()}
            {this.renderLoader()}
          </div>
          <div>
            {this.renderSummary()}
            {this.renderPromo()}
            {this.renderCoupon()}
          </div>
        </ContentWrapper>
      </main>
    );
  }
}

export default CheckoutComponent;
