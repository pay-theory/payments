import React from "react";
import "./styles.css";

// react-router 5 only supports a single router in your application
// There was originally a router here, in index.js and in NavigationDrawer
import { BrowserRouter as Router, Route } from "react-router-dom";

import { GlobalStyle, PortalHead, BooksHooks } from "@paytheory/books-ui";
import { generateDocumentationMenu } from "./util";
import NavigationDrawer from "./NavigationDrawer/NavigationDrawer";

import Documentation from "./Documentation";

export default function App() {
  const docsStyle = {
    background: "#F4F4F4",
    hoverBackground: "#E8ECEF",
    fontColor: "#A3B3C4",
    hoverFontColor: "#6B7887"
  };

  // eslint-disable-next-line
  const defaultStyle = {
    background: "#160f3d",
    hoverBackground: "#100a31",
    fontColor: "rgba(255, 255, 255, 0.5)",
    hoverFontColor: "#fff"
  };

  const demoAccount = {
    user: { nickname: "demo" }
  };

  return (
    <Router>
      <GlobalStyle />
      <BooksHooks.context.menu.Provider value={generateDocumentationMenu()}>
        <BooksHooks.context.account.Provider value={demoAccount}>
          <BooksHooks.context.page.Provider
            value={{
              title: "Docs",
              subtitle: "Test Playground"
            }}
          >
            <div id="container">
              <div id="pt-header" className="sticky">
                <PortalHead logout={() => {}} />
              </div>
              <div className="body-container">
                <NavigationDrawer
                  listHead="Accepting A Payment"
                  style={docsStyle}
                />
                <Route path="/">
                  <Documentation />
                </Route>
              </div>
            </div>
          </BooksHooks.context.page.Provider>
        </BooksHooks.context.account.Provider>
      </BooksHooks.context.menu.Provider>
      <style jsx="true">
        {`
          .documentation {
            display: flex;
            width: 100vw;
          }

          .sticky {
            position: -webkit-sticky;
            position: sticky;
            top: -2px;
            z-index: 2;
          }
        

          @media only screen and (max-width: 768px) {
            #drawer {
              display: none;
            }
          }
        `}
      </style>
    </Router>
  );
}
