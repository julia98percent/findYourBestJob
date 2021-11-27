import React from "react";
import { Link } from "react-router-dom";
import { PrevButton, NextButton } from "../../styles/theme";

function Test({ answers, curPage, setCurPage, questionList }) {
  return (
    <>
      <div>
        <div>{questionList}</div>

        <PrevButton curPage={curPage} onClick={() => setCurPage(curPage - 5)}>
          이전
        </PrevButton>

        {curPage == 25 ? (
          <Link to="/result">
            <NextButton
              disabled={Object.keys(answers).length < 28}
              type="submit"
            >
              제출
            </NextButton>
          </Link>
        ) : (
          <NextButton
            disabled={Object.keys(answers).length < curPage + 5}
            onClick={() => setCurPage(curPage + 5)}
          >
            다음
          </NextButton>
        )}
      </div>
    </>
  );
}

export default Test;
