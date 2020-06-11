import React, { useRef, useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import DocsCode from "./DocsCode";
import * as ROUTES from "../routes";
import {
  installCode,
  importCode,
  configureCode,
  processPaymentsCode
} from "../util";

const scrollToRef = ref => {
  const scrollPadding = ref.current.offsetTop - 45;
  window.scrollTo({
    top: scrollPadding,
    left: 0,
    behavior: "smooth"
  });
};

const getDimensions = ele => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom
  };
};

const anchors = [
  ROUTES.IMPORT,
  ROUTES.INSTALL_NPM,
  ROUTES.USAGE,
  ROUTES.USAGE_IMPORT,
  ROUTES.USAGE_CONFIGURE,
  ROUTES.USAGE_PROCESS_PAYMENTS
];

const subAnchors = [
  ROUTES.INSTALL_NPM,
  ROUTES.USAGE_IMPORT,
  ROUTES.USAGE_CONFIGURE,
  ROUTES.USAGE_PROCESS_PAYMENTS
];

export default props => {
  const location = useLocation();
  const [anchored, setAnchored] = useState(false);
  console.log("anchored", anchored, location.state);
  const sectionRefs = {};
  anchors.forEach(anchor => {
    sectionRefs[anchor] = useRef(null);
  });

  useEffect(() => {
    if (location.state) {
      setAnchored(location.state.hash);
    }
  }, [location.state]);

  useEffect(() => {
    if (anchored) {
      console.log("scrolling to", anchored);
      scrollToRef(sectionRefs[anchored]);
    }
  }, [anchored, sectionRefs]);

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(
        document.getElementById("pt-header")
      );
      const scrollPosition = window.scrollY + headerHeight;

      // eslint-disable-next-line
      const selected = anchors.find(anchor => {
        const ele = sectionRefs[anchor].current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      subAnchors.forEach(id => {
        if (selected === id) {
          document.getElementById(`${id}-link`).className = "active";
        } else {
          document.getElementById(`${id}-link`).className = "inactive";
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="docs-subsection">
      <div className="refer" ref={sectionRefs[ROUTES.IMPORT]}>
        <Link
          to={{
            pathname: ROUTES.IMPORT,
            state: { hash: ROUTES.IMPORT }
          }}
        >
          <div id="import" className="section-head">
            <i className={`far fa-link`} />
            <h1>Import</h1>
          </div>
        </Link>
      </div>
      <div className="refer" ref={sectionRefs[ROUTES.INSTALL_NPM]}>
        <Link
          to={{
            pathname: ROUTES.INSTALL_NPM,
            state: { hash: ROUTES.INSTALL_NPM }
          }}
        >
          <div className="sub-header">
            <i className={`far fa-link`} />
            <h3>Install NPM</h3>
          </div>
        </Link>
        <p>
          Use our official libraries for access to the pay theory API from your
          application:
        </p>
        <DocsCode
          copyId="installNpmCode"
          language="bash"
          codeString={installCode}
          destenation="Terminal"
        />
      </div>
      <div className="refer" ref={sectionRefs[ROUTES.USAGE]}>
        <Link
          to={{
            pathname: ROUTES.USAGE,
            state: { hash: ROUTES.USAGE }
          }}
        >
          <div className="section-head">
            <i className={`far fa-link`} />
            <h1>Usage</h1>
          </div>
        </Link>
      </div>
      <div className="refer" ref={sectionRefs[ROUTES.USAGE_IMPORT]}>
        <Link
          to={{
            pathname: ROUTES.USAGE_IMPORT,
            state: { hash: ROUTES.USAGE_IMPORT }
          }}
        >
          <div className="sub-header">
            <i className={`far fa-link`} />
            <h3>Import</h3>
          </div>
        </Link>
        <p>Import our React Hooks and components to be used in your App:</p>
        <ul>
          <li>
            <b>CreditCardProvider</b> is a component where you provide
            configuration, it provides the necessary context for
          </li>
          <li>
            <b>CreditCardInput</b> is a component that extablishes the markup
            where the credit card input will appear
          </li>
          <li>
            <b>usePayTheory</b> is a function that returns the context need for
            working with payments, it provides:
            <ul>
              <li>
                loading - a boolean state value that changes to false once pay
                theory is ready
              </li>
              <li>
                valid - can be undefined, true or false based on what has been
                entered
              </li>
              <li>error - contains an error message if not false</li>
              <li>
                mount - a function which will mount the payment input (must be
                called after CreditCardInput has been rendered)
              </li>
              <li>
                initTransaction - a function which accepts an optional
                buyerOptions object and triggers card tokenization and
                authorization
              </li>
            </ul>
          </li>
        </ul>

        <DocsCode
          copyId="importCode"
          language="jsx"
          codeString={importCode}
          destenation="index.js"
        />
      </div>
      <div className="refer" ref={sectionRefs[ROUTES.USAGE_CONFIGURE]}>
        <Link
          to={{
            pathname: ROUTES.USAGE_CONFIGURE,
            state: { hash: ROUTES.USAGE_CONFIGURE }
          }}
        >
          <div className="sub-header">
            <i className={`far fa-link`} />
            <h3>Configure</h3>
          </div>
        </Link>
        <p>
          These parameters are required before processing a payment using{" "}
          <b>CreditCardProvider</b>.
        </p>
        <ul>
          <li>a pay theory API key</li>
          <li>a paytheory clientId</li>
          <li>an amount in cents</li>
          <li>optionally styles you want applied</li>
        </ul>

        <DocsCode
          copyId="configureCode"
          language="jsx"
          codeString={configureCode}
          destenation="index.js"
        />
      </div>
      <div className="refer" ref={sectionRefs[ROUTES.USAGE_PROCESS_PAYMENTS]}>
        <Link
          to={{
            pathname: ROUTES.USAGE_PROCESS_PAYMENTS,
            state: { hash: ROUTES.USAGE_PROCESS_PAYMENTS }
          }}
        >
          <div id="usageProcessPayments" className="sub-header">
            <i className={`far fa-link`} />
            <h3>Process payments</h3>
          </div>
        </Link>
        <p>Calling these functions will allow you to process a payment.</p>
        <ul>
          <li>to initialize, the form mount() is called once</li>
          <li>
            when the form is ready for submission, call initTransaction and pass
            in optional buyerOptions
          </li>
          <li>
            buyerOptions include
            <ul>
              <li>name - the name on the card</li>
              <li>
                billing address composed of:
                <ul>
                  <li>line 1</li>
                  <li>line 2</li>
                  <li>city</li>
                  <li>region</li>
                  <li>postal_code</li>
                  <li>country</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>

        <DocsCode
          copyId="processPaymentsCode"
          language="jsx"
          codeString={processPaymentsCode}
          destenation="app.js"
        />
      </div>
      <style jsx="true">
        {`
          .refer {
            padding: 0 0 20px;
          }
          .docs-subsection {
            padding: 50px 0px;
          }

          .docs-subsection a,
          .docs-subsection i {
            text-decoration: none;
          }

          .section-head h1 {
            font-size: 38px;
            font-weight: 700;
            cursor: pointer;
          }

          .section-head {
            display: flex;
            align-items: center;
            padding-top: 24px;
            color: black;
            text-decoration: none;
          }

          .section-head i {
            margin-right: 10px;
            cursor: pointer;
            display: none;
          }

          .section-head:hover i {
            display: flex;
          }
          .section-head:hover {
            margin-left: -26px;
          }

          .sub-header {
            display: flex;
            align-items: center;
            padding-top: 24px;
            color: black;
          }

          .sub-header i {
            margin-right: 10px;
            cursor: pointer;
            display: none;
          }

          .sub-header:hover i {
            display: flex;
          }

          .sub-header:hover {
            margin-left: -26px;
          }

          .sub-header h3 {
            font-size: 24px;
            cursor: pointer;
          }

          .docs-subsection p {
            font-size: 18px;
            color: #8b898a;
            padding: 15px 0px;
            list-style-position: outside;
          }

          .docs-subsection ul {
            list-style-position: inside;
            font-size: 18px;
            color: #8b898a;
            padding: 15px 0px;
            list-style-position: outside;
          }

          .docs-subsection ul ul {
            margin-left: 24px;
            padding-top: 0px !important;
          }

          .docs-subsection li {
            padding-top: 8px;
            margin-left: 1em;
            line-height: 1.3;
          }
        `}
      </style>
    </div>
  );
};
