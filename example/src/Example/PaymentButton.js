import React from 'react'
const PaymentButton = (props) => {
    let pre = ''
    let post = ''
    if (props.isComplete) {
        pre = <i className='fal fa-arrow-alt' />
    } else {
        post = <i className='far fa-arrow-right' />
    }

    return (
        <div className='col-6'>
            <button
                className='complete full-width'
                onClick={props.onClick ? props.onClick : () => {}}
                disabled={props.disabled}
            >
                {pre}
                <span>{props.text}</span>
                {post}
            </button>

            <style jsx='true'>{`
                .col-6 {
                    width: 96%;
                    float: left;
                    margin-top: 0%;
                    margin-bottom: 15px;
                    margin-left: 2%;
                    margin-right: 2%;
                    min-height: 0.125rem;
                }
                .col-6 button {
                    font-size: 16px;
                    line-height: 20px;
                    font-weight: 700;
                    text-transform: none;
                    letter-spacing: 0;
                    height: 48px;
                    border: 0;
                    outline: 0;
                    border-radius: 4px;
                    background-color: #0bd8aa;
                    padding: 14px 16px;
                    color: white;
                    position: relative;
                    overflow: hidden;
                    width: 100%;
                }

                .col-6 button span {
                    margin: 0 4px;
                }

                .col-6 button i {
                    margin: 0 4px;
                }

                .col-6 button:hover {
                    cursor: pointer;
                }

                button::before {
                    position: absolute;
                    background-color: #fff;
                    border-radius: 50%;
                    opacity: 0;
                    pointer-events: none;
                    content: '';
                    -webkit-transition: opacity 95ms linear,
                        background-color 95ms linear;
                    transition: opacity 95ms linear,
                        background-color 95ms linear;
                    z-index: 1;
                }

                button:hover::before {
                    opacity: 0.06;
                }

                button .circle {
                    border-radius: 50%;
                    background-color: rgba(255, 255, 255, 0.7);
                    position: absolute;
                    transform: scale(0);
                    animation: ripple linear 0.6s;
                }

                @keyframes ripple {
                    to {
                        opacity: 0;
                        transform: scale(2.5);
                    }
                }

                /* Custom Button Styles */

                .complete {
                    font-size: 14px;
                    line-height: 18px;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    min-height: 48px;
                    height: auto;
                    padding: 14px 16px;
                    background-color: #0bd8aa;
                    cursor: pointer;
                    width: 100%;
                }
                .complete:disabled {
                    font-size: 14px;
                    line-height: 18px;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    min-height: 48px;
                    height: auto;
                    padding: 14px 16px;
                    background-color: #999;
                    cursor: default;
                    width: 100%;
                }
            `}</style>
        </div>
    )
}

export default PaymentButton
