import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import Navbar from "./components/Layout/navBar";
import Landingpage from "./components/Layout/landingPage";
import Register from "./components/auth/register";
import Login from "./components/auth/login";
import Alert from "./components/Layout/alert";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "../src/components/redux/store";
import { loadUser } from "./components/redux/actions/auth";
import setAuthToken from "./util/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

let store = configureStore();
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <ReduxProvider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landingpage} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </ReduxProvider>
  );
};

export default App;
