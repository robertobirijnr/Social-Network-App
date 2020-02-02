import React from "react";
import { render } from "react-dom";
import App from "./App";
import configureStore from "../src/components/redux/store";
import { Provider as ReduxProvider } from "react-redux";

const store = configureStore();

render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  document.getElementById("root")
);
