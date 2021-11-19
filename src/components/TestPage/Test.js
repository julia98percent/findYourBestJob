import React, { useState } from "react";
import QuestionBox from "./QuestionBox";
import "bulma/css/bulma.min.css";

function Test({ curPage, setCurPage, questionList }) {
  return (
    <div className="test">
      <h2>검사진행</h2>
      <div>
        <div>{questionList}</div>
        <button
          style={curPage == 0 ? { visibility: "hidden" } : { color: "red" }}
          onClick={() => setCurPage(curPage - 5)}
        >
          이전
        </button>
        {/* 결과보기 버튼 따로 만들어서 컴포넌트 분리 해주기 */}
        <button
          style={curPage == 25 ? { visibility: "hidden" } : { color: "blue" }}
          onClick={() => setCurPage(curPage + 5)}
        >
          다음
        </button>
      </div>
    </div>
  );
}

export default Test;
