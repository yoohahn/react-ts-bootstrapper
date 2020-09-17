import React from "react";
import ReactDOM from "react-dom";
import {
  StylesProvider,
  createGenerateClassName,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { App } from "./App";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

// Create your own theme
const theme = createMuiTheme({});

const generateClassName = createGenerateClassName({
  productionPrefix: "a",
  disableGlobal: process.env.NODE_ENV === "production",
  seed: "",
});

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider generateClassName={generateClassName}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
