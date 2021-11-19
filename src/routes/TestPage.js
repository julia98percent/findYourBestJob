import React, { useState } from "react";
import QuestionBox from "../components/TestPage/QuestionBox";
import { Button, ButtonGroup } from "@chakra-ui/react";

function TestPage({ q, curPage, setCurPage }) {
  const [isMain, setIsMain] = useState(false);
  const [a, setA] = useState({});
  const questions = [];
  for (let i = curPage; i < curPage + 5; i++) {
    if (i == 28) break;
    questions.push(
      <QuestionBox a={a} setA={setA} key={i} num={i + 1} question={q[i]} />
    );
  }
  return (
    <div className="test">
      <h2>{isMain == false ? "검사예시" : "검사진행"}</h2>
      <div>progress bar 자리</div>
      {isMain == false ? (
        <div>
          대충 설명하는 페이지
          <Button onClick={() => setIsMain(true)}>클릭하세요</Button>
        </div>
      ) : (
        <div>
          <div>{questions}</div>
          <Button
            style={curPage == 0 ? { visibility: "hidden" } : { color: "red" }}
            onClick={() => setCurPage(curPage - 5)}
          >
            이전
          </Button>
          {/* 결과보기 버튼 따로 만들어서 컴포넌트 분리 해주기 */}
          <Button
            style={curPage == 25 ? { visibility: "hidden" } : { color: "blue" }}
            onClick={() => setCurPage(curPage + 5)}
          >
            다음
          </Button>
        </div>
      )}
    </div>
  );
}

export default TestPage;
