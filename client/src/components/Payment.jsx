import React, { useContext } from "react";
import StripeCheckout from "react-stripe-checkout";
import { Context as UserContext } from "../context/userContext";

const Payment = () => {
  const publishableKey = process.env.REACT_APP_STRIPE_KEY;
  const { handleToken } = useContext(UserContext);

  const onToken = (token) => {
    handleToken(token);
    alert("Payment Succesful!");
  };

  return (
    <div>
      <StripeCheckout
        name="MailEasy"
        description="50 Rs. for 50 credits"
        amount={50 * 100}
        token={onToken}
        currency="INR"
        stripeKey={publishableKey}
      >
        <button className="waves-effect waves-light btn  blue darken-3">
          Add Credits
        </button>
      </StripeCheckout>
    </div>
  );
};

export default Payment;
