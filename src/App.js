import "./App.css";
import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Appointments from "./components/appointments";
import Home from "./components/home";
import SessionsPrices from "./components/SessionsPrices";
import Blog from "./components/blog";
import Products from "./components/products";
import About from './components/about';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/appointments" component={Appointments} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/SessionsPrices" component={SessionsPrices} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/about" component={About}/>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}
