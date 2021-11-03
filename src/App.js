import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Service from "./Service";
import Nav_bar from "./Nav_bar";
import { Redirect, Route, Switch } from "react-router";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Footer from "./footer";

const App = () => {
  return (
    <>
    <Nav_bar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/service" component={Service} />
      <Route exact path="/contact" component={Contact} />
      <Redirect to="/"></Redirect>
    </Switch>
    <Footer />
    </>
  );
};

export default App;