import React from 'react'
import { BooksHooks } from '@paytheory/books-ui'
const PortalLabel = (props) => {
  return (
    <BooksHooks.context.page.Consumer>
      {(pageHook) => {
        return (
          <div className='portal-head-label' data-testid='portal-label'>
            {pageHook.title}
            <style jsx='true'>{`
              .portal-head-label {
                height: 52px;
                line-height: 52px;
                vertical-align: center;
                margin-right: 8px;
                font-size: 18px;
              }
            `}</style>
          </div>
        )
      }}
    </BooksHooks.context.page.Consumer>
  )
}

export default PortalLabel
