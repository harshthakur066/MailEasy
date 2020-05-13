import React, { useContext, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { Context as AuthContext } from "../context/authContext";

import Header from "./Header";
import Dashboard from "./Dashboard";
import Landing from "./Landing";

const App = () => {
  const { fetchUser } = useContext(AuthContext);

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          {/* <Route exact path="/surveys/news" component={} /> */}
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
