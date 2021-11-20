import React from "react";

function PrevResult({ setIsPrev }) {
  return (
    <div className="result">
      <h2>검사가 완료되었습니다.</h2>
      <div>
        검사결과는 여러분이 직업을 선택할 때 상대적으로 어떠한 가치를 중요하게
        생각하는지를 알려주고, 중요 가치를 충족시켜줄 수 있는 직업에 대해 생각해
        볼 기회를 제공합니다.
      </div>
      <hr />
      <span>사용자는aa 성향이므로 bb직업에 적합합니다.</span>
      <button onClick={() => setIsPrev(false)}>결과보기</button>
    </div>
  );
}

export default PrevResult;
