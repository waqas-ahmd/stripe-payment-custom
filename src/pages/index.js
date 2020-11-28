import React from "react"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import Checkout from "../components/Checkout"

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_KEY)

export default function Home() {
  return (
    <div>
      Hello world!
      <Elements stripe={stripePromise}>
        <Checkout />
      </Elements>
    </div>
  )
}
