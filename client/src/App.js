import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import Navbar from "./components/Layout/navBar";
import Landingpage from "./components/Layout/landingPage";
import Register from "./components/auth/register";
import Login from "./components/auth/login";
import store from '../src/components/redux/store'
import {Provider} from 'react-redux'


const App = () => {
  return (
    <Provider store ={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Landingpage} />
        <section className="container">
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </section>
      </Fragment>
    </Router>
    </Provider>
  );
};

export default App;
