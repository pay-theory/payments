import React from 'react'

import DocsOverview from './components/DocsOverview'
import DocsSubsection from './components/DocsSubsection'

export default (props) => {
    return (
        <div className='doc-body'>
            <h1 className='header'>Accepting A Payment</h1>
            <DocsOverview />
            <DocsSubsection />
            <style jsx='true'>
                {`
                    .doc-body {
                        width: 100%;
                        height: 100%;
                        background: #ffffff 0% 0% no-repeat padding-box;
                        padding: 24px 70px;
                        padding-left: 360px;
                    }

                    .header {
                        padding: 24px 0px;
                        font-weight: 700;
                        font-size: 46px;
                        letter-spacing: 0px;
                        color: #101822;
                    }

                    @media only screen and (max-width: 768px) {
                        .doc-body {
                            padding: 20px 20px;
                        }
                    }
                `}
            </style>
        </div>
    )
}
