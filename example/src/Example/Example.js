import React from 'react'
import { CreditCardProvider } from '@paytheory/payments'

import ExampleApp from './ExampleApp'

const styles = {
    default: {
        color: 'black',
        fontSize: '16px'
    },
    success: {
        color: '#5cb85c',
        fontSize: '16px'
    },
    error: {
        color: '#d9534f',
        fontSize: '16px'
    }
}
const api = 'pt-sandbox-c421a13e91d2594cc627cdd982edb5ed'

const client = 'IDvwtJwLdkja7CMk5oR6QNDk'

const amount = 2000

export default function Example() {
    return (
        <CreditCardProvider
            apiKey={api}
            client={client}
            amount={amount}
            styles={styles}
        >
            <ExampleApp />
        </CreditCardProvider>
    )
}
