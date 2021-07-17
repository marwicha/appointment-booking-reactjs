import React, { useState } from "react";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import AppointmentService from "../../services/appointment.service";

const Payement = (props) => {
  const { amount, email, name, phone, parentCallback } = props;

  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

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
        confirm: true,
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
          billing_details: {
            email: email,
            name: name,
            phone: phone,
          },
        },
      });

    if (stripeError) {
      alert(stripeError.message);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      parentCallback(true);
      setLoading(true);
    }

    alert(`Payement réussi`);
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

        <button disabled={loading === true} className="btn">
          Payer la prestation
        </button>
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
