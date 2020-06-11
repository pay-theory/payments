import React, { useState, useEffect } from "react";
import { usePayTheory } from "@paytheory/payments";

import PaymentButton from "./PaymentButton";
import WrappedCreditCard from "./WrappedCreditCard";
import InputBox from "./InputBox";

export default function ExampleApp(props) {
  const { mount, initTransaction, valid, loading } = usePayTheory();
  const [mounted, setMounted] = useState(false);
  const [nameOnCard, setNameOnCard] = useState("");

  useEffect(() => {
    if (!loading && !mounted) {
      mount();
      setMounted(true);
    }
  }, [loading, mount, mounted]);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        initTransaction({ name: nameOnCard });
      }}
    >
      <InputBox
        name="name-on-card"
        helperText="The full name printed on the card"
        label="Name on card"
        className="flex-grow"
        value={nameOnCard}
        onChange={e => {
          setNameOnCard(e.currentTarget.value);
        }}
      />
      <div>
        <WrappedCreditCard label="Credit Card Details" />
      </div>
      <PaymentButton text="Complete Payment" isComplete disabled={!valid} />
      <style jsx="true">{`
        form {
          display: flex;
          flex-direction: column;
          max-width: 40em;
          height: 18em;
          justify-content: space-evenly;
          padding: 0px 25px;
        }
      `}</style>
    </form>
  );
}
