import React, { useState } from "react";
import { Label } from "../../styles/theme";
function ExampleTest({ setIsExample, question }) {
  const [exampleValue, setExampleValue] = useState(0);
  return (
    <div className="test">
      <div>
        직업과 관련된 두 개의 가치 중에서 자기에게 더 중요한 가치에 표시하세요.
        <br />
        가치의 뜻을 잘 모르겠다면 문항 아래에 있는 가치의 설명을 확인해보세요.
      </div>
      <div style={{ backgroundColor: "pink" }}>
        <p>1. 두개 가치 중에 자신에게 더 중요한 가치를 선택하세요.</p>
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

        <div>
          <span>
            {question[0]}:{question[2]}
          </span>
          <br />
          <span>
            {question[1]}:{question[3]}
          </span>
        </div>
      </div>
      <button disabled={!exampleValue} onClick={() => setIsExample(false)}>
        검사시작
      </button>
    </div>
  );
}

export default ExampleTest;
