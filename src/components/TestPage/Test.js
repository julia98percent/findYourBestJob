import React, { useState } from "react";
import WatchResultBtn from "./WatchResultBtn";

function Test({ answers, curPage, setCurPage, questionList }) {
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
        {/* TODO 수정해야 할거같은게...뒤로 가면 radio 선택이 안돼 */}
        {curPage == 25 ? (
          <WatchResultBtn />
        ) : (
          <button
            disabled={
              Object.keys(answers).length == curPage &&
              Object.keys(answers).length % 5
            }
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
