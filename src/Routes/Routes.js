import React from "react";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";
import ContactsContextProvider from "../contexts/ContactsContext";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route>
        <ContactsContextProvider>
          <div className="container is-max-desktop">
            <div className="panel">
              <p className="panel-heading">
                <i className="fas fa-book" aria-hidden="true"></i>
                <span style={{ marginLeft: 8 }}>Contacts Book</span>
              </p>
              <div className="columns">
                <LeftSide />
                <RightSide />
              </div>
            </div>
          </div>
        </ContactsContextProvider>
      </Route>
    </BrowserRouter>
  );
};

export default Routes;
