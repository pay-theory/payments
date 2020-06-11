import React, { useState, useEffect } from "react";
import { CreditCardProvider, CreditCardInput, usePayTheory } from "@paytheory/payments";
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

const App = () => {
    const { loading, mount, initTransaction } = usePayTheory();
    const [mounted, setMounted] = useState(false);

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
          initTransaction();
      }}
    >
      <div><CreditCardInput /></div>
      <button />
    </form>
    );
};

export default props => {
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
