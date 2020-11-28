import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import React from "react"

export default function Checkout() {
  const stripe = useStripe()
  const elements = useElements()

  const checkoutSubmit = async () => {
    const response = await fetch("/.netlify/functions/checkout", {
      method: "POST",
    })
    const data = await response.json()

    const result = await stripe.confirmCardPayment(data.client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: "Mr. XYZ",
          email: "xyz@abc.com",
        },
      },
    })
    console.log("result:", result)
  }

  return (
    <div>
      <h2>Checkout Form</h2>
      <div
        style={{
          width: "360px",
          background: "white",
          padding: "5px",
          borderRadius: "4px",
          boxShadow: "0px 0px 3px black",
          marginBottom: "5px",
        }}
      >
        <CardElement />
      </div>
      <button onClick={checkoutSubmit}>Checkout</button>
    </div>
  )
}
