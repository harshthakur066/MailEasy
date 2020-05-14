import React, { useContext } from "react";
import StripeCheckout from "react-stripe-checkout";
import { Context as TokenContext } from "../context/tokenContext";

const Payment = () => {
  const publishableKey = process.env.REACT_APP_STRIPE_KEY;
  const { handleToken } = useContext(TokenContext);

  const onToken = (token) => {
    handleToken(token);
    alert("Payment Succesful!");
  };

  return (
    <div>
      <StripeCheckout
        name="MailEasy"
        description="5 Rs. for 5 credits"
        amount={500}
        token={onToken}
        currency="INR"
        stripeKey={publishableKey}
      >
        <button className=" waves-light btn-small green darken-3">
          Add Credits
        </button>
      </StripeCheckout>
    </div>
  );
};

export default Payment;
