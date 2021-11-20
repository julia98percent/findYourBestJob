import React from "react";
import ResultChart from "./ResultChart";
function Result({ name, gender, time }) {
  return (
    <div className="result">
      <h2>직업가치관검사 결과표</h2>
      <span>사용자는 뫄뫄 성향이므로 솨솨 직업에 적합합니다.</span>
      <ResultChart name={name} gender={gender} time={time} />
    </div>
  );
}

export default Result;
