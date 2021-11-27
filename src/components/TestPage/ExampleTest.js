import React, { useState } from "react";
import {
  Label,
  Button,
  CenterContainer,
  QuestionContainer,
  Description,
  QA,
  QuestionCover,
} from "../../styles/theme";
function ExampleTest({ setIsExample, question }) {
  const [exampleValue, setExampleValue] = useState(0);
  return (
    // <CenterContainer>
    <>
      <div>
        직업과 관련된 두 개의 가치 중에서 자기에게 더 중요한 가치에 표시하세요.
        가치의 뜻을 잘 모르겠다면 문항 아래에 있는 가치의 설명을 확인해보세요.
      </div>
      <QuestionContainer>
        <QA>
          <QuestionCover>
            <p>1. 두개 가치 중에 자신에게 더 중요한 가치를 선택하세요.</p>
          </QuestionCover>

          <Label>
            <input
              type="radio"
              name="ex"
              value={998}
              onClick={(e) => setExampleValue(e.target.value)}
            />
            {question[0]}
          </Label>

          <Label>
            <input
              type="radio"
              name="ex"
              value={999}
              onClick={(e) => setExampleValue(e.target.value)}
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
      <Button disabled={!exampleValue} onClick={() => setIsExample(false)}>
        검사시작
      </Button>
    </>
    // </CenterContainer>
  );
}

export default ExampleTest;
