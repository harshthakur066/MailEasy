import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { Provider as UserProvider } from "./context/userContext";
import { Provider as SurveyProvider } from "./context/surveyContext";

import axios from "axios";
window.axios = axios;

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <SurveyProvider>
        <App />
      </SurveyProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
