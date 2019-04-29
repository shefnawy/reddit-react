import React from "react";
import "./App.css";
import { Header } from "./Components/Header";
import { HomeContent } from "./Components/Content/HomeContent";
import { AccountContent } from "./Components/Content/AccountContent";
import { Footer } from "./Components/Footer/Footer";
import { Route, Switch, Redirect } from "react-router-dom";

export const Routes = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/Home" component={HomeContent} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/Account" component={AccountContent} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
};
