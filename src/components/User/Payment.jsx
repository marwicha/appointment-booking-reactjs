import React from "react";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import AppointmentService from "../../services/appointment.service";

const Payement = (props) => {
  const { amount, parentCallback } = props;

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmitPayement = async (ev) => {
    ev.preventDefault();
    parentCallback(false);

    if (!stripe || !elements) {
      alert("Le Payement n'a pas encore chargé.");
      return;
    }

    const { error: backendError, clientSecret } =
      await AppointmentService.payment({
        paymentMethodType: "card",
        currency: "eur",
        amount: amount,
        //receipt_email: email,
        // billing_details: {
        //   name: name,
        //   phone: phone,
        // },
      }).then((response) => {
        return response;
      });

    if (backendError) {
      alert(backendError.message);
      return;
    }

    const { error: stripeError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

    if (stripeError) {
      alert(stripeError.message);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      parentCallback(true);
    }

    alert(`Payment ${paymentIntent.status}: ${paymentIntent.id}`);
  };

  const renderForm = () => {
    const options = {
      style: {
        base: {
          color: "#32325d",
          fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
          fontSmoothing: "antialiased",
          fontSize: "16px",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#fa755a",
          iconColor: "#fa755a",
        },
      },
    };

    return (
      <form onSubmit={handleSubmitPayement}>
        <div className="sr-combo-inputs">
          <div className="sr-combo-inputs-row"></div>

          <div className="sr-combo-inputs-row">
            <CardElement
              className="sr-input sr-card-element"
              options={options}
            />
          </div>
        </div>

        <button className="btn">Payer la prestation</button>
      </form>
    );
  };

  return (
    <div className="checkout-form">
      <div className="sr-payment-form">
        <div className="sr-form-row" />
        {renderForm()}
      </div>
    </div>
  );
};

export default Payement;
