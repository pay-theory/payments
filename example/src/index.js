import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


const amount = 2581

ReactDOM.render(
    (<App amount={amount} />),
    document.getElementById("root")
)
