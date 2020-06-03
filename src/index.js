import React, { useState, useEffect, useContext } from "react"
import tags from '@paytheory/tags'

export const PayTheoryContext = React.createContext();
export const usePayTheory = () => useContext(PayTheoryContext);
export const CreditCardInput = () => <div id="paytheory-credit-card" />;
export const CreditCardProvider = props => {
    const [loading, setLoading] = useState(true);
    const [complete, setComplete] = useState(false);
    const [valid, setValid] = useState(false);
    const [error, setError] = useState(undefined);
    const [payTheory, setPayTheory] = useState(undefined);

    useEffect(() => {
        const initPayTheory = async() => {
            const payTheoryFromHook = await tags.createCreditCard(
                props.apiKey,
                props.client,
                props.amount,
                props.styles
            );
            setPayTheory(payTheoryFromHook);
            setLoading(false);
        };
        if (props.apiKey && props.client && props.amount && props.styles) {
            initPayTheory();
        }
    }, [props.apiKey, props.client, props.amount, props.styles]);

    useEffect(() => {
        if (payTheory) {
            payTheory.readyObserver(ready => setLoading(!ready));
            payTheory.transactedObserver(acted => setComplete(acted));
            payTheory.validObserver(validation => setValid(validation));
            payTheory.errorObserver(errored => setError(errored));
        }
    }, [payTheory]);

    return (
        <PayTheoryContext.Provider
          value={{
            loading,
            complete,
            valid,
            error,
            mount: payTheory
              ? payTheory.mount
              : () => console.log("pay theory is not ready to mount payments"),
            initTransaction: buyerOptions =>
              tags.initTransaction(buyerOptions ? buyerOptions : {})
          }}
        >
          {props.children}
        </PayTheoryContext.Provider>
    );
};
