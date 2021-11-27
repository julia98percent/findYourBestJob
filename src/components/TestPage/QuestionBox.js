import React, { useState } from "react";
import {
  QuestionContainer,
  Label,
  QA,
  Description,
  QuestionCover,
} from "../../styles/theme";
function QuestionBox({ num, question, answers, setAnswers }) {
  const handleChange = (e) => {
    let newAnswers = { ...answers };
    newAnswers[e.target.name] = e.target.value;
    setAnswers(newAnswers);
  };

  return (
    <QuestionContainer>
      <QA>
        <QuestionCover>
          {num}. 두개 가치 중에 자신에게 더 중요한 가치를 선택하세요.
        </QuestionCover>

        <Label>
          <input
            type="radio"
            name={num}
            value={num * 2 - 1}
            onChange={(e) => handleChange(e)}
            checked={answers[num] && answers[num] == num * 2 - 1}
          />
          {question[0]}
        </Label>

        <Label>
          <input
            type="radio"
            name={num}
            value={num * 2}
            onChange={(e) => handleChange(e)}
            checked={answers[num] && answers[num] == num * 2}
          />
          {question[1]}
        </Label>
      </QA>
      <Description>
        <span>
          {question[0]}:{question[2]}
        </span>
        <br />
        <span>
          {question[1]}:{question[3]}
        </span>
      </Description>
    </QuestionContainer>
  );
}

export default QuestionBox;
