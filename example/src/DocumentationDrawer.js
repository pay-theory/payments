import React from "react";

export default props => {
  return (
    <div id="drawer" className="docs-drawer">
      <ul>
        <lh>Accepting a payment</lh>
        <li className="active">Install</li>
        <details open={false}>
          <summary>
            <p>Dropdown</p>
            <i className={`far fa-angle-down`} />
            <i className={`far fa-angle-right`} />
          </summary>
          <ul className="sub-list">
            <li>Step 1</li>
            <li className="active">Step 2</li>
            <li>Step 3</li>
            <li>Step 4</li>
          </ul>
        </details>
      </ul>
      <style jsx="true">{`
        .docs-drawer {
          background: #f4f4f4 0% 0% no-repeat padding-box;
          box-shadow: 3px 0px 10px #00000014;
          min-width: 290px;
          max-width: 290px;
          height: 100%;
        }

        .docs-drawer ul {
          list-style-type: none;
          -webkit-padding-start: 0;
          padding-inline-start: 0;
          width: 290px;
        }

        .docs-drawer li,
        .docs-drawer lh {
          display: flex;
          height: 46px;
          padding-left: 24px;
          list-style: none;
          color: #a3b3c4;
          margin-top: auto;
          margin-bottom: auto;
          align-items: center;
        }

        .docs-drawer lh {
          text-transform: uppercase;
          text-align: left;
          letter-spacing: 0.45px;
          color: #8795a6;
          font-weight: 700;
        }

        .docs-drawer details summary {
          display: flex;
          height: 46px;
          padding-left: 24px;
          width: 290px;
          list-style: none;
          color: #a3b3c4;
          margin-top: auto;
          margin-bottom: auto;
          align-items: center;
        }

        .sub-list {
          margin-left: 24px;
        }

        details summary::-webkit-details-marker {
          color: #6cc;
          display: none;
        }

        .active {
          color: #6b7887 !important;
          font-weight: 700;
          border-left: solid 4px #0bd8aa;
        }

        summary i {
          color: #6cc;
          font-size: 20px;
          padding-right: 25px;
        }

        summary {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .fa-angle-down {
          display: none;
        }

        details[open] .fa-angle-down {
          display: flex;
        }

        details[open] .fa-angle-right {
          display: none;
        }

        details[open] summary {
          font-weight: 700;
        }
      `}</style>
    </div>
  );
};
