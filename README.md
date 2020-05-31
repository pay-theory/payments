# @paytheory/payments

> React components and hooks for pay theory payments

[![NPM](https://img.shields.io/npm/v/@paytheory/payments.svg)](https://www.npmjs.com/package/@paytheory/payments) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

* payments has the following peer dependencies
  * @paytheory/tags
  * react

```bash
npm install --save @paytheory/payments @paytheory/tags react react-dom
```

## Usage

### Import

* CreditCardProvider is a component where you provide configuration, it provides the necessary context for payment processing
* CreditCardInput is a component that extablishes the markup where the credit card input will appear
* usePayTheory is a function that returns the context need for working with payments, it provides
  * loading - a boolean state value that changes to false once pay theory is ready
  * valid - can be undefined, true or false based on what has been entered
  * error - contains an error message if not false
  * mount - a function which will mount the payment input (must be called after CreditCardInput has been rendered)
  * initTransaction - a function which accepts an optional buyerOptions object and triggers card tokenization and authorization

```jsx
import React, { useState, useEffect } from "react";
import { CreditCardProvider, CreditCardInput, usePayTheory } from "@paytheory/payments";
```

### Configure

* payments requires configuration of:
  * a pay theory API key
  * a paytheory clientId
  * an amount in cents
  * optionally styles you want applied

```jsx
const api = "pt-sandbox-c421a13e91d2594cc627cdd982edb5ed";
const client = "IDvwtJwLdkja7CMk5oR6QNDk";
const styles = {
  default: {
    color: "black",
    fontSize: "14px"
  },
  success: {
    color: "#5cb85c",
    fontSize: "14px"
  },
  error: {
    color: "#d9534f",
    fontSize: "14px"
  }
};

const WrappedApp = props => {
  return (
    <CreditCardProvider
      apiKey={api}
      client={client}
      amount={props.amount}
      styles={styles}
    >
      <App />
    </CreditCardProvider>
  );
};
```

### Process payments

* to initialize the form mount() is called once
* when the form is ready for submission call initTransaction and pass in optional buyerOptions
* buyerOptions include
  * name - the name on the card
  * billing address composed of
    * line1
    * line2
    * city
    * region
    * postal_code
    * country

```jsx
const App = props => {
  const { loading, mount, initTransaction } = usePayTheory();
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
      <input
        type="text"
        placeholder="name on card"
        onChange={e => {
          setNameOnCard(e.currentTarget.value);
        }}
        value={nameOnCard}
      />
      <div><CreditCardInput /></div>
      <button />
    </form>
  );
};
```

## License

MIT © [aron23](https://github.com/aron23)
