import React, { useState } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import TestPage from "./routes/TestPage";
import PrevPage from "./routes/PrevPage";
import ResultPage from "./routes/ResultPage";
import "bulma/css/bulma.min.css";

function App() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState(undefined);
  const [answers, setAnswers] = useState({}); //답변한거 저장

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            path="/test"
            render={() => (
              <TestPage answers={answers} setAnswers={setAnswers} />
            )}
          />
          <Route
            path="/result"
            render={() => (
              <ResultPage name={name} gender={gender} answers={answers} />
            )}
          />
          <Route
            path="/"
            render={() => (
              <PrevPage
                name={name}
                setName={setName}
                gender={gender}
                setGender={setGender}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
