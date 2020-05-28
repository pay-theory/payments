# @paytheory/payments

> React components and hooks for pay theory payments

[![NPM](https://img.shields.io/npm/v/@paytheory/payments.svg)](https://www.npmjs.com/package/@paytheory/payments) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @paytheory/payments
```

## Usage

### Import

```jsx
import React, { useState, useEffect } from "react";
import { CreditCardProvider, CreditCardInput, usePayTheory } from "@paytheory/payments";
```

### Configure

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
