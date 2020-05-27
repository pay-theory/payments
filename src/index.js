import React, { useState, useEffect, useContext } from "react"
import tags from '@paytheory/tags'

export const PayTheoryContext = React.createContext()
export const usePayTheory = () => useContext(PayTheoryContext)
export const Input = () => (<div id="paytheory-tag" />)
export const CreditCardProvider = ({
    children,
    ...inputOptions
}) => {
    const [loading, setLoading] = useState(true)
    const [complete, setComplete] = useState(false)
    const [valid, setValid] = useState(false)
    const [error, setError] = useState(undefined)
    const [payTheory, setPayTheory] = useState(undefined)

    useEffect(() => {
        const initPayTheory = async() => {
            const payTheoryFromHook = await tags.create(...inputOptions)
            setPayTheory(payTheoryFromHook)
            setLoading(false)
        };
        initPayTheory()
    }, [])

    useEffect(() => {
        if (payTheory) {
            payTheory.mount()
            payTheory.readyObserver(ready => setLoading(!ready))
            payTheory.transactedObserver(acted => setComplete(acted))
            payTheory.validObserver(validation => setValid(validation))
            payTheory.errorObserver(errored => setError(errored))
        }
    }, [payTheory])

    return (
        <PayTheoryContext.Provider
          value={{
            loading,
            complete,
            valid,
            error,
            initTransaction: buyerOptions => ()=>{}
          }}
        >
            {children}
        </PayTheoryContext.Provider>
    );
}
