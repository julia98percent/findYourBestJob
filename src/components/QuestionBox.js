import React, { useState } from "react";
function QuestionBox({ num, question, a, setA }) {
  const handleChange = (e) => {
    console.log(a);
    let newA = { ...a };
    newA[e.target.name] = e.target.value;
    setA(newA);
  };

  return (
    <div className="main">
      <div style={{ backgroundColor: "pink" }}>
        <p>{num}. 두개 가치 중에 자신에게 더 중요한 가치를 선택하세요.</p>

        <label>
          <input
            name={num}
            type="radio"
            value={num * 2 - 1}
            onChange={(e) => handleChange(e)}
            checked={a[num] && a[num] == num * 2 - 1}
          />
          {question[0]}
        </label>

        <label>
          <input
            name={num}
            type="radio"
            value={num * 2}
            onChange={(e) => handleChange(e)}
            checked={a[num] && a[num] == num * 2}
          />
          {question[1]}
        </label>

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
    </div>
  );
}

export default QuestionBox;
