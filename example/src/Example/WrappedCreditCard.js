import React from 'react'
import { CreditCardInput } from '@paytheory/payments'
import { usePayTheory } from '@paytheory/payments'

export default (props) => {
    const { valid } = usePayTheory()

    const validation = valid ? 'valid' : 'invalid'
    return (
        <label className={props.className}>
            <span className={`wrap-tagged ${validation}`}>
                <CreditCardInput />
            </span>
            <span className={`wrap-labeled ${validation}`}>{props.label}</span>

            <style jsx='true'>{`
                label {
                    --pay-theory-safari-helper1: rgb(
                        var(--pay-theory-primary-rgb, 22, 15, 61)
                    );
                    --pay-theory-safari-invalid-helper1: rgb(237, 69, 76);
                    --pay-theory-safari-valid-helper1: rgb(39, 203, 124);
                    position: relative;
                    display: flex;
                    margin-top: 0.5em;
                    padding-top: 6px;
                    font-family: var(
                        --pay-theory-font,
                        'Roboto',
                        'Segoe UI',
                        BlinkMacSystemFont,
                        system-ui,
                        -apple-system
                    );
                    min-height: 62px;
                    font-size: 16px;
                    line-height: 1.5;
                    overflow: hidden;
                }

                /* .wrap-tagged, Textarea */
                label > .wrap-tagged,
                label > textarea {
                    box-sizing: border-box;
                    margin: 0;
                    border: solid 1px; /* Safari */
                    border-color: rgba(
                        var(--pay-theory-onsurface-rgb, 0, 0, 0),
                        0.6
                    );
                    border-top-color: transparent;
                    border-radius: 4px;
                    padding: 3px 13px;
                    width: 100%;
                    height: inherit;
                    color: rgba(var(--pay-theory-onsurface-rgb, 0, 0, 0), 0.87);
                    background-color: white;
                    box-shadow: none; /* Firefox */
                    font-family: inherit;
                    font-size: inherit;
                    line-height: inherit;
                    caret-color: rgb(var(--pay-theory-primary-rgb, 22, 15, 61));
                    transition: border 0.2s, box-shadow 0.2s;
                }

                /* Span */
                label > .wrap-tagged + .wrap-labeled,
                label > textarea + .wrap-labeled {
                    position: absolute;
                    top: 0;
                    left: 0;
                    display: flex;
                    border-color: rgba(
                        var(--pay-theory-onsurface-rgb, 0, 0, 0),
                        0.6
                    );
                    width: 100%;
                    max-height: 100%;
                    color: rgba(var(--pay-theory-onsurface-rgb, 0, 0, 0), 0.6);
                    font-size: 75%;
                    line-height: 15px;
                    cursor: text;
                    transition: color 0.2s, font-size 0.2s, line-height 0.2s;
                }

                /* Corners */
                label > .wrap-tagged + .wrap-labeled::before,
                label > .wrap-tagged + .wrap-labeled::after,
                label > textarea + .wrap-labeled::before,
                label > textarea + .wrap-labeled::after {
                    content: '';
                    display: block;
                    box-sizing: border-box;
                    margin-top: 6px;
                    border-top: solid 1px;
                    border-top-color: rgba(
                        var(--pay-theory-onsurface-rgb, 0, 0, 0),
                        0.6
                    );
                    min-width: 10px;
                    height: 8px;
                    pointer-events: none;
                    box-shadow: inset 0 1px transparent;
                    transition: border-color 0.2s, box-shadow 0.2s;
                }

                label > .wrap-tagged + .wrap-labeled::before,
                label > textarea + .wrap-labeled::before {
                    margin-right: 4px;
                    border-left: solid 1px transparent;
                    border-radius: 4px 0;
                }

                label > .wrap-tagged + .wrap-labeled::after,
                label > textarea + .wrap-labeled::after {
                    flex-grow: 1;
                    margin-left: 4px;
                    border-right: solid 1px transparent;
                    border-radius: 0 4px;
                }

                /* Hover */
                label:hover > .wrap-tagged,
                label:hover > textarea {
                    border-color: rgba(
                        var(--pay-theory-onsurface-rgb, 0, 0, 0),
                        0.87
                    );
                    border-top-color: transparent;
                }

                label:hover > .wrap-tagged + .wrap-labeled::before,
                label:hover > textarea + .wrap-labeled::before,
                label:hover > .wrap-tagged + .wrap-labeled::after,
                label:hover > textarea + .wrap-labeled::after {
                    border-top-color: rgba(
                        var(--pay-theory-onsurface-rgb, 0, 0, 0),
                        0.87
                    );
                }

                label:hover > .wrap-tagged:not(:focus):placeholder-shown,
                label:hover > textarea:not(:focus):placeholder-shown {
                    border-color: rgba(
                        var(--pay-theory-onsurface-rgb, 0, 0, 0),
                        0.87
                    );
                }

                /* Placeholder-shown */
                label > .wrap-tagged:not(:focus):placeholder-shown,
                label > textarea:not(:focus):placeholder-shown {
                    border-top-color: rgba(
                        var(--pay-theory-onsurface-rgb, 0, 0, 0),
                        0.6
                    );
                }

                label
                    > .wrap-tagged:not(:focus):placeholder-shown
                    + .wrap-labeled,
                label > textarea:not(:focus):placeholder-shown + .wrap-labeled {
                    font-size: inherit;
                    line-height: 68px;
                }

                label
                    > .wrap-tagged:not(:focus):placeholder-shown
                    + .wrap-labeled::before,
                label
                    > textarea:not(:focus):placeholder-shown
                    + .wrap-labeled::before,
                label
                    > .wrap-tagged:not(:focus):placeholder-shown
                    + .wrap-labeled::after,
                label
                    > textarea:not(:focus):placeholder-shown
                    + .wrap-labeled::after {
                    border-top-color: transparent;
                }

                /* Valid */
                label > .wrap-tagged.valid,
                label > textarea:valid:not(:placeholder-shown) {
                    border-color: rgb(
                        var(--pay-theory-primary-rgb, 39, 203, 124)
                    );
                    border-top-color: transparent;
                    box-shadow: inset 1px 0
                            var(--pay-theory-safari-valid-helper1),
                        inset -1px 0 var(--pay-theory-safari-valid-helper1),
                        inset 0 -1px var(--pay-theory-safari-valid-helper1);
                    outline: none;
                }

                label > .wrap-tagged.valid + .wrap-labeled,
                label > textarea:valid:not(:placeholder-shown) + .wrap-labeled {
                    color: rgb(var(--pay-theory-primary-rgb, 39, 203, 124));
                }

                label > .wrap-tagged.valid + .wrap-labeled::before,
                label > .wrap-tagged.valid + .wrap-labeled::after,
                label > textarea.valid + .wrap-labeled::before,
                label > textarea.valid + .wrap-labeled::after {
                    border-top-color: var(
                        --pay-theory-safari-valid-helper1
                    ) !important;
                    box-shadow: inset 0 1px
                        var(--pay-theory-safari-valid-helper1);
                }

                /* Invalid */
                label > .wrap-tagged:invalid:not(:focus),
                label > textarea:invalid:not(:focus) {
                    border-color: rgb(
                        var(--pay-theory-primary-rgb, 237, 69, 76)
                    );
                    border-top-color: transparent;
                    box-shadow: inset 1px 0
                            var(--pay-theory-safari-invalid-helper1),
                        inset -1px 0 var(--pay-theory-safari-invalid-helper1),
                        inset 0 -1px var(--pay-theory-safari-invalid-helper1);
                    outline: none;
                }

                label > .wrap-tagged:invalid:not(:focus) + .wrap-labeled,
                label > textarea:invalid:not(:focus) + .wrap-labeled {
                    color: rgb(var(--pay-theory-primary-rgb, 237, 69, 76));
                }

                label
                    > .wrap-tagged:invalid:not(:focus)
                    + .wrap-labeled::before,
                label > .wrap-tagged:invalid:not(:focus) + .wrap-labeled::after,
                label > textarea:invalid:not(:focus) + .wrap-labeled::before,
                label > textarea:invalid:not(:focus) + .wrap-labeled::after {
                    border-top-color: var(
                        --pay-theory-safari-invalid-helper1
                    ) !important;
                    box-shadow: inset 0 1px
                        var(--pay-theory-safari-invalid-helper1);
                }

                /* Focus */
                label > .wrap-tagged:focus,
                label > textarea:focus {
                    border-color: rgb(
                        var(--pay-theory-primary-rgb, 22, 15, 61)
                    );
                    border-top-color: transparent;
                    box-shadow: inset 1px 0 var(--pay-theory-safari-helper1),
                        inset -1px 0 var(--pay-theory-safari-helper1),
                        inset 0 -1px var(--pay-theory-safari-helper1);
                    outline: none;
                }

                label > .wrap-tagged:focus + .wrap-labeled,
                label > textarea:focus + .wrap-labeled {
                    color: rgb(var(--pay-theory-primary-rgb, 22, 15, 61));
                }

                label > .wrap-tagged:focus + .wrap-labeled::before,
                label > .wrap-tagged:focus + .wrap-labeled::after,
                label > textarea:focus + .wrap-labeled::before,
                label > textarea:focus + .wrap-labeled::after {
                    border-top-color: var(
                        --pay-theory-safari-helper1
                    ) !important;
                    box-shadow: inset 0 1px var(--pay-theory-safari-helper1);
                }

                /* Disabled */
                label > .wrap-tagged:disabled,
                label > .wrap-tagged:disabled + .wrap-labeled,
                label > textarea:disabled,
                label > textarea:disabled + .wrap-labeled {
                    border-color: rgba(
                        var(--pay-theory-onsurface-rgb, 0, 0, 0),
                        0.38
                    ) !important;
                    border-top-color: transparent !important;
                    color: rgba(var(--pay-theory-onsurface-rgb, 0, 0, 0), 0.38);
                    pointer-events: none;
                }

                label > .wrap-tagged:disabled + .wrap-labeled::before,
                label > .wrap-tagged:disabled + .wrap-labeled::after,
                label > textarea:disabled + .wrap-labeled::before,
                label > textarea:disabled + .wrap-labeled::after {
                    border-top-color: rgba(
                        var(--pay-theory-onsurface-rgb, 0, 0, 0),
                        0.38
                    ) !important;
                }

                label > .wrap-tagged:disabled:placeholder-shown,
                label > .wrap-tagged:disabled:placeholder-shown + .wrap-labeled,
                label > textarea:disabled:placeholder-shown,
                label > textarea:disabled:placeholder-shown + .wrap-labeled {
                    border-top-color: rgba(
                        var(--pay-theory-onsurface-rgb, 0, 0, 0),
                        0.38
                    ) !important;
                }

                label
                    > .wrap-tagged:disabled:placeholder-shown
                    + .wrap-labeled::before,
                label
                    > .wrap-tagged:disabled:placeholder-shown
                    + .wrap-labeled::after,
                label
                    > textarea:disabled:placeholder-shown
                    + .wrap-labeled::before,
                label
                    > textarea:disabled:placeholder-shown
                    + .wrap-labeled::after {
                    border-top-color: transparent !important;
                }

                /* Faster transition in Safari for less noticable fractional font-size issue */
                @media not all and (min-resolution: 0.001dpcm) {
                    @supports (-webkit-appearance: none) {
                        label > .wrap-tagged,
                        label > .wrap-tagged + .wrap-labeled,
                        label > textarea,
                        label > textarea + .wrap-labeled,
                        label > .wrap-tagged + .wrap-labeled::before,
                        label > .wrap-tagged + .wrap-labeled::after,
                        label > textarea + .wrap-labeled::before,
                        label > textarea + .wrap-labeled::after {
                            transition-duration: 0.1s;
                        }
                    }
                }
            `}</style>
        </label>
    )
}
