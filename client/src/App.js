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
import Dashboard from "./components/dashboard/dasboard";
import PrivateRoute from "./components/routing/privateRoute";
import CreateProfile from "./components/profile-forms/createProfile";
import EditProfile from "./components/profile-forms/editProfile";
import AddExperirience from "./components/profile-forms/addExpirence";
import AddEducation from "./components/profile-forms/addEducation";
import Profiles from "./components/profiles/profiles";
import Profile from "./components/profile/Profile";
import Posts from "./components/posts/Posts";

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
              <Route exact path="/profiles" component={Profiles} />
              <Route exact path="/profile/:id" component={Profile} />
              <PrivateRoute
                Route
                exact
                path="/dasboard"
                component={Dashboard}
              />
              <PrivateRoute
                Route
                exact
                path="/create-profile"
                component={CreateProfile}
              />
              <PrivateRoute
                Route
                exact
                path="/edit-profile"
                component={EditProfile}
              />
              <PrivateRoute
                Route
                exact
                path="/add-experience"
                component={AddExperirience}
              />
              <PrivateRoute
                Route
                exact
                path="/add-education"
                component={AddEducation}
              />
              <PrivateRoute Route exact path="/posts" component={Posts} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </ReduxProvider>
  );
};

export default App;
