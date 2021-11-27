import React, { useState } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import TestPage from "./routes/TestPage";
import PrevPage from "./routes/PrevPage";
import ResultPage from "./routes/ResultPage";
import PageNotFound from "./routes/PageNotFound";
import ChartPage from "./routes/ChartPage";
import { AppContainer } from "./styles/theme";
import GlobalStyle from "./styles/global";
import "bulma/css/bulma.min.css";

function App() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState(0);
  const [answers, setAnswers] = useState({}); //답변한거 저장

  return (
    <AppContainer>
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route path="/404" render={() => <PageNotFound />} />
          <Route
            path="/test"
            render={() => (
              <TestPage answers={answers} setAnswers={setAnswers} />
            )}
          />
          <Route path="/result/:seq" component={ChartPage} />
          <Route
            path="/result"
            render={() => (
              <ResultPage name={name} gender={gender} answers={answers} />
            )}
          />
          <Route
            exact
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
          <Route render={() => <PageNotFound />} />
        </Switch>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
