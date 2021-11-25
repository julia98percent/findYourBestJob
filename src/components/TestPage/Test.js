import React, { useState } from "react";
import WatchResultBtn from "./WatchResultBtn";

function Test({ answers, curPage, setCurPage, questionList }) {
  console.log(Object.keys(answers).length + "   " + curPage);
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

        {curPage == 25 ? (
          <WatchResultBtn />
        ) : (
          <button
            disabled={Object.keys(answers).length < curPage + 5}
            style={curPage == 25 ? { visibility: "hidden" } : { color: "blue" }}
            onClick={() => setCurPage(curPage + 5)}
          >
            다음
          </button>
        )}
      </div>
    </div>
  );
}

export default Test;
