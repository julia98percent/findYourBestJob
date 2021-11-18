import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import { Switch, BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import TestPage from "./routes/TestPage";
import PrevPage from "./routes/PrevPage";
import ResultPage from "./routes/ResultPage";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const [q, setQ] = useState([]);
  const [name, setName] = useState("");
  const [gender, setGender] = useState(0);
  const [curPage, setCurPage] = useState(0);

  useEffect(() => {
    const call = async () => {
      const key = "e75f4f4f23d735668faf09f0ffff8123";
      const response = await axios.get(
        `https://www.career.go.kr/inspct/openapi/test/questions?apikey=${key}&q=6`
      );
      let arr = [];
      for (let i = 0; i < Object.keys(response.data.RESULT).length; i++) {
        let temp = response.data.RESULT[i];
        arr.push([temp.answer01, temp.answer02, temp.answer03, temp.answer04]);
      }
      setQ(arr);
    };
    call();
  }, []);
  return (
    <div className="App">
      <ChakraProvider>
        <BrowserRouter>
          <Switch>
            <Route
              path="/test"
              render={() => (
                <TestPage q={q} curPage={curPage} setCurPage={setCurPage} />
              )}
            />
            <Route path="/result" component={ResultPage} />
            <Route exact path="/" component={PrevPage} />
          </Switch>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
