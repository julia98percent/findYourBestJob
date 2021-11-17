import React, { useState, useEffect } from "react";
import axios from "axios";
import { Switch, BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import MainPage from "./routes/MainPage";
import PrevPage from "./routes/PrevPage";
function App() {
  const [q, setQ] = useState([]);
  const [a, setA] = useState([]);

  useEffect(() => {
    const call = async () => {
      const key = "e75f4f4f23d735668faf09f0ffff8123";
      const response = await axios.get(
        `https://www.career.go.kr/inspct/openapi/test/questions?apikey=${key}&q=6`
      );
      setQ(response.data.RESULT);
    };
    call();
  }, [q]);
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/test" component={MainPage} />
          {/* <Route path="/result" component={ResultPage} /> */}
          <Route exact path="/" component={PrevPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
