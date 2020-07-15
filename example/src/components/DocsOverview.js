import React from 'react'
import { Link } from 'react-router-dom'

import * as ROUTES from '../routes'
import Example from '../Example/Example'

export default (props) => {
    const githubLink = 'https://github.com/pay-theory/payments'
    const codeSandboxLink =
        'https://codesandbox.io/s/paytheorypayments-demo-qr8rz'

    return (
        <div className='docs-overview'>
            <div className='time'>
                <p>
                    <i className={`fal fa-clock`} /> 15 Minutes
                </p>
            </div>
            <p className='description'>
                This form will show you how to integrate Pay Theory into your
                application so you can start accepting payments.
            </p>
            <div className='button-div'>
                <h4>What you're building</h4>
                <div className='sample-app'>
                    <h4>Explore a sample app</h4>
                    <div className='app-links'>
                        <a
                            href='/'
                            onClick={(e) => {
                                e.preventDefault()
                                window.open(githubLink, '_blank')
                            }}
                        >
                            <img src='resources/github.svg' alt='' />
                            <p>Github</p>
                        </a>
                        <a
                            href='/'
                            onClick={(e) => {
                                e.preventDefault()
                                window.open(codeSandboxLink, '_blank')
                            }}
                        >
                            <img src='resources/codesandbox.svg' alt='' />
                            <p>CodeSandbox</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className='example'>
                <Example />
            </div>
            <p className='list-header'>Overview</p>
            <ol className='overview-list'>
                <li>
                    <Link
                        to={{
                            pathname: ROUTES.IMPORT,
                            state: { hash: ROUTES.IMPORT }
                        }}
                    >
                        Import
                    </Link>
                </li>
                <li>
                    <Link
                        to={{
                            pathname: ROUTES.USAGE,
                            state: { hash: ROUTES.USAGE }
                        }}
                    >
                        Usage
                    </Link>
                </li>
            </ol>
            <style jsx='true'>
                {`
        
          .docs-overview {
            width: 100%;
            background: #ffffff 0% 0% no-repeat padding-box;
            border: 2px solid #101822;
            margin: 24px 0px 50px 0px;
            padding: 0px 30px;
          }

          .time {
            background: #e8ecef 0% 0% no-repeat padding-box;
            border-radius: 15px;
            width: 123px;
            height: 26px;
            margin-top: 20px;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .time p,
          .time i {
            font-weight: 400;
            color: #707070;
          }

          .description {
            font-weight: 400;
            color: #8B898A;
            font-size; 18px;
            padding-bottom: 20px;
          }
          .button-div {
            display:flex;
            flex-wrap: wrap-reverse;
            justify-content: space-between;
            align-items: center;
            color: #707070;
            font-size: 18px;
          }

          .button-div h4 {
            padding: 15px 0px;
            margin-right: 15px;
          }
          .sample-app {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
          }

          .app-links {
            display: flex;
            flex-wrap: wrap;
          }

          .sample-app a {
            margin-right: 10px;
            height: 38px;
            padding: 0px 25px;
            background: #0199ED;
            border-radius: 4px;
            border: none;
            color: white;
            text-decoration: none;
            font-family: Europa, Segoe UI, Trebuchet MS, Arial,
            Helvetica, sans-serif;
            font-weight: 700;
            font-size: 18px;
            cursor: pointer;
            display: flex;
            align-items: center;
          }

          .docs-overview a img {
            padding-right: 7px;
          }

          .example {
            width 100%;
            min-height: 196px;
            margin: 10px 0px;
            background: #E8ECEF;
            margin: 15px 0px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .overview-list li {
            list-style-position: inside;
            padding: 10px 0px;
            color: #707070;
            font-size: 18px;
          }
          .overview-list li a {
            color: #0199ED;
            font-size: 18px;
            text-decoration: underline;
          }

          .list-header {
            padding: 10px 0px;
            color: #707070;
            font-size: 18px;
            font-weight: 700;
          }

          .docs-overview ol {
            margin-bottom: 20px;
          }

        @media only screen and (max-width: 1031px) {
          .app-links {
            padding-bottom: 15px;
          }
          .app-links a {
            margin-bottom: 5px;
          }

          .button-div .sample-app h4 {
            padding: 15px 0px 5px 0px;
          }
        }

        `}
            </style>
        </div>
    )
}
