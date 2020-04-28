import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          {/* <Route exact path="/" component={} />
          <Route exact path="/surveys" component={} />
          <Route exact path="/surveys/news" component={} /> */}
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
