import React, { useState, useEffect } from "react";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import AppointmentService from "../../services/appointment.service";

const Payement = () => {
  //Stripe payement

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmitPayement = async (ev) => {
    ev.preventDefault();

    // Step 3: Use clientSecret from PaymentIntent and the CardElement
    // to confirm payment with stripe.confirmCardPayment()

    if (!stripe || !elements) {
      alert("Le Payement n'a pas encore chargé.");
      return;
    }

    const { error: backendError, clientSecret } =
      await AppointmentService.payment().then((response) => {
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
          // billing_details: {
          //   name: "Jenny Rosen",
          // },
        },
      });

    if (stripeError) {
      // Show error to your customer (e.g., insufficient funds)
      alert(stripeError.message);
      return;
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
        <button className="btn">Payer</button>
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
