import React from "react";
import { CreditCard, usePayTheory } from "@paytheory/payments";

export default () => {
    const { loading, complete, error } = usePayTheory()

    if (loading) {
        return <div>Loading...</div>
    }
    if (complete) {
        return <div>{complete}</div>
    }
    if (error) {
        return <div>{error}</div>
    }

    return (
        <div className="App">
            <CreditCard />
        </div>
    )
}
