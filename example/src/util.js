import * as ROUTES from '././routes'
const generateDocumentationMenu = () => {
    return [
        {
            className: 'active',
            tag: 'install',
            label: 'Install',
            isCategory: true,
            subContent: [
                {
                    to: ROUTES.INSTALL_NPM,
                    className: 'active',
                    tag: ROUTES.INSTALL_NPM,
                    label: 'Install NPM'
                }
            ]
        },
        {
            className: 'active',
            tag: 'usage',
            label: 'Usage',
            isCategory: true,
            subContent: [
                {
                    to: ROUTES.USAGE_IMPORT,
                    className: 'active',
                    tag: ROUTES.USAGE_IMPORT,
                    label: 'Import'
                },
                {
                    to: ROUTES.USAGE_CONFIGURE,
                    className: 'active',
                    tag: ROUTES.USAGE_CONFIGURE,
                    label: 'Configure'
                },
                {
                    to: ROUTES.USAGE_PROCESS_PAYMENTS,
                    className: 'active',
                    tag: ROUTES.USAGE_PROCESS_PAYMENTS,
                    label: 'Process payments'
                }
            ]
        }
    ]
}

const installCode =
    '#install via npm \n npm install --save @paytheory/payments @paytheory/tags react'

const importCode =
    'import React, { useState, useEffect } from "react"; \n' +
    'import { CreditCardProvider, CreditCardInput, usePayTheory } from "@paytheory/payments";'

const configureCode =
    'const api = "pt-sandbox-c421a13e91d2594cc627cdd982edb5ed";\n' +
    'const client = "IDvwtJwLdkja7CMk5oR6QNDk";\n' +
    'const styles = {\n' +
    ' default: {\n' +
    '  color: "black",\n' +
    '  fontSize: "14px"\n' +
    ' },\n' +
    ' success: {\n' +
    '  color: "#5cb85c",\n' +
    '  fontSize: "14px"\n' +
    ' },\n' +
    ' error: {\n' +
    '  color: "#d9534f",\n' +
    '  fontSize: "14px"\n' +
    ' }\n' +
    '};\n \n' +
    'const WrappedApp = props => {\n' +
    ' return (\n' +
    '  <CreditCardProvider\n' +
    '   apiKey={api}\n' +
    '   client={client}\n' +
    '   amount={props.amount}\n' +
    '   styles={styles}\n' +
    '  >\n' +
    '   <App />\n' +
    '  </CreditCardProvider>\n' +
    ' );\n' +
    '};'

const processPaymentsCode =
    'const App = props => {\n' +
    ' const { loading, mount, initTransaction } = usePayTheory();\n' +
    ' const [mounted, setMounted] = useState(false);\n' +
    ' const [nameOnCard, setNameOnCard] = useState("");\n\n' +
    ' useEffect(() => {\n' +
    '   if (!loading && !mounted) {\n' +
    '     mount();\n' +
    '     setMounted(true);\n\n' +
    ' }, [loading, mount, mounted]);\n\n' +
    ' return (\n' +
    '   <form\n' +
    '     onSubmit={e => {\n' +
    '       e.preventDefault();\n' +
    '         initTransaction({ name: nameOnCard });\n' +
    '     }}\n' +
    '   >\n' +
    '     <input\n' +
    '       type="text"\n' +
    '       placeholder="name on card"\n' +
    '       onChange={e => {\n' +
    '         setNameOnCard(e.currentTarget.value);\n' +
    '       }}\n' +
    '       value={nameOnCard}\n' +
    '     />\n' +
    '     <div><CreditCardInput /></div>\n' +
    '     <button />\n' +
    '   </form>\n' +
    ' );\n' +
    '};'

const generatePaymentsDoc = () => {
    return [
        {
            section: 'Install',
            subsections: [
                {
                    title: 'Install NPM',
                    body: [
                        {
                            type: 'string',
                            content:
                                'Use our official libraries for access to the pay theory API from your application:'
                        },
                        {
                            type: 'code',
                            destenation: 'Terminal',
                            codeType: 'bash',
                            content: installCode
                        }
                    ]
                }
            ]
        },
        {
            section: 'Usage',
            subsections: [
                {
                    title: 'Import',
                    body: [
                        {
                            type: 'string',
                            content:
                                'Import our React Hooks and components to be used in your App:'
                        },
                        {
                            type: 'unordered list',
                            content: [
                                'CreditCardProvider is a component where you provide configuration, it provides the necessary context for payment processing',
                                'CreditCardInput is a component that extablishes the markup where the credit card input will appear',
                                'usePayTheory is a function that returns the context need for working with payments, it provides'
                            ]
                        },
                        {
                            type: 'code',
                            destenation: 'index.js',
                            codeType: 'jsx',
                            content: importCode
                        }
                    ]
                }
            ]
        }
    ]
}

export {
    generateDocumentationMenu,
    generatePaymentsDoc,
    installCode,
    importCode,
    configureCode,
    processPaymentsCode
}
