import React, { useState, useEffect, createContext } from "react";

import { Switch, BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import TestPage from "./routes/TestPage";
import PrevPage from "./routes/PrevPage";
import ResultPage from "./routes/ResultPage";
import "bulma/css/bulma.min.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/test" render={() => <TestPage />} />
          <Route path="/result" component={ResultPage} />
          <Route exact path="/" component={PrevPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
