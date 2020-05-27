import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { CreditCardProvider } from "@paytheory/payments";

const styles = ''
const amount = '25.81'

ReactDOM.render(
    (<CreditCardProvider
        apiKey={process.env.REACT_APP_API_KEY}
        client={process.env.REACT_APP_CLIENT}
        styles={styles}
        amount={amount}
      >
        <App />
      </CreditCardProvider>),
    document.getElementById("root")
)
