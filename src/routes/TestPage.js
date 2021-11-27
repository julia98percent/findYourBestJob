import React, { useState, useEffect } from "react";
import QuestionBox from "../components/TestPage/QuestionBox";

import ExampleTest from "../components/TestPage/ExampleTest";
import Test from "../components/TestPage/Test";
import axios from "axios";

import { ClearContainer, LeftH2, RightH2 } from "../styles/theme";
function TestPage({ answers, setAnswers }) {
  const [curPage, setCurPage] = useState(0); // 현재 페이지 번호 및 진행률

  const [isExample, setIsExample] = useState(true); // 예시 페이지야?

  const handleChange = (e) => {
    let newAnswers = { ...answers };
    newAnswers[e.target.name] = e.target.value;
    setAnswers(newAnswers);
  };
  const [questions, setQuestions] = useState([]); //axios로 받아온 질문 저장

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
      setQuestions(arr);
    };
    call();
  }, []);
  const questionList = []; // 5개씩 묶어서 보여줄 list
  for (let i = curPage; i < curPage + 5; i++) {
    if (i == 28) break;
    questionList.push(
      <QuestionBox
        answers={answers}
        setAnswers={setAnswers}
        key={i}
        num={i + 1}
        question={questions[i]}
      />
    );
  }

  return (
    <div className="test">
      <div>
        <LeftH2>
          {Math.round((Object.keys(answers).length / questions.length) * 100) +
            "%"}
        </LeftH2>
        <RightH2>{isExample ? "검사예시" : "검사진행"}</RightH2>
      </div>
      <ClearContainer>
        <progress
          className="progress is-link is-normal"
          value={
            questions.length
              ? Math.round(
                  (Object.keys(answers).length / questions.length) * 100
                )
              : 0
          }
          max="100"
        ></progress>
      </ClearContainer>
      {isExample ? (
        <ExampleTest
          setIsExample={setIsExample}
          question={[
            "창의성",
            "안정성",
            "스스로 아이디어를 내어 새로운 일을 해볼 수 있는 것입니다.",
            "한 직장에서 오랫동안 일할 수 있는 것입니다.",
          ]}
        />
      ) : (
        <Test
          answers={answers}
          curPage={curPage}
          setCurPage={setCurPage}
          questionList={questionList}
          handleChange={handleChange}
        />
      )}
    </div>
  );
}
export default TestPage;
