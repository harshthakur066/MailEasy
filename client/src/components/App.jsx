import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider as AuthProvider } from "../context/authContext";

import Header from "./Header";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <AuthProvider>
          <Header />
          {/* <Route exact path="/" component={} />
          <Route exact path="/surveys" component={} />
          <Route exact path="/surveys/news" component={} /> */}
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
