import React from 'react'
import DocsBody from './DocsBody'

export default (props) => {
    return (
        <div className='documentation'>
            <DocsBody />
            <style jsx='true'>
                {`
                    .documentation {
                        display: flex;
                        width: 100%;
                    }
                `}
            </style>
        </div>
    )
}
