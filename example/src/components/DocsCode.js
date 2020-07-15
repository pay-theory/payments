import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism'

import Toast, { showToast } from './Toast'

export default (props) => {
    const codeString = props.codeString

    const updateClipboard = () => {
        if (navigator.permissions) {
            navigator.permissions
                .query({ name: 'clipboard-write' })
                .then((result) => {
                    if (
                        result.state === 'granted' ||
                        result.state === 'prompt'
                    ) {
                        console.log('allowed')
                        navigator.clipboard.writeText(codeString).then(
                            function () {
                                showToast('copied')
                                console.log('Copied to clipboard successfully!')
                            },
                            function () {
                                console.error(
                                    'Unable to write to clipboard. :-('
                                )
                            }
                        )
                    } else {
                        console.log('not allowed')
                    }
                })
        } else if (navigator.clipboard) {
            navigator.clipboard.writeText(codeString)

            showToast('copied')
        } else {
            copyToClipboard()
        }
    }

    const copyToClipboard = (e) => {
        document
            .getSelection()
            .selectAllChildren(document.getElementById(props.copyId))
        document.execCommand('copy')
        showToast('copied')
    }

    return (
        <div className='code-snippet'>
            <div className='code-header'>
                <h5>{props.destenation}</h5>
                <button onClick={updateClipboard}>
                    <i className={`fas fa-copy`} /> Copy to Clipboard
                </button>
            </div>
            <div className='code-body' id={props.copyId}>
                <SyntaxHighlighter language={props.language} style={okaidia}>
                    {codeString}
                </SyntaxHighlighter>
            </div>
            <Toast icon='check-circle' message='Copied' id='copied' />
            <style jsx='true'>{`
                .code-snippet {
                    padding: 20px 0px;
                    width: 100%;
                }

                .code-header {
                    height: 50px;
                    width: 100%;
                    background: #cad3dd;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .code-header h5 {
                    font-size: 18px;
                    margin-left: 20px;
                }

                .code-header button {
                    font-family: Europa, Segoe UI, Trebuchet MS, Arial,
                        Helvetica, sans-serif;
                    font-size: 18px;
                    font-weight: 700;
                    border: none;
                    background: none;
                    margin-right: 20px;
                    color: #0199ed;
                    cursor: pointer;
                }

                .code-body {
                    background: #e8ecef;
                    padding: 10px;
                }

                .code-window {
                    background: #253243;
                    padding: 10px;
                    display: flex;
                    flex-direction: column;
                }

                .code-window code {
                    color: #ffffff;
                }

                .hidden {
                    display: none;
                }
            `}</style>
        </div>
    )
}
