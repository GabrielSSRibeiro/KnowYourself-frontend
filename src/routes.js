import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import BirthDate from "./pages/KnowYourself/BirthDate";
import Gender from "./pages/KnowYourself/Gender";
import Name from "./pages/KnowYourself/Name";
import Result from "./pages/Result";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/birth-date" exact component={BirthDate} />
        <Route path="/gender" exact component={Gender} />
        <Route path="/name" exact component={Name} />
        <Route path="/result" exact component={Result} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  );
}
