import React from "react";
import { Redirect, Link } from "react-router-dom";
import {
  H2,
  CenterContainer,
  ResultHr,
  BoldText,
  ResultButton,
} from "../../styles/theme";

function PrevResult({ name, firstValue, secondValue, sequence }) {
  return (
    <CenterContainer>
      {name ? (
        <>
          <H2>검사가 완료되었습니다.</H2>
          <div>
            검사결과는 여러분이 직업을 선택할 때 상대적으로 어떠한 가치를
            중요하게 생각하는지를 알려주고, 중요 가치를 충족시켜줄 수 있는
            직업에 대해 생각해 볼 기회를 제공합니다.
          </div>
          <ResultHr />
          <div>
            {name}님은{" "}
            <BoldText>{firstValue[1] + ", " + secondValue[1]}</BoldText>
            성향이 강하시네요!
            <br />
            다음 페이지에서 {name}님을 위해 열심히 준비한
            <br /> 결과분석 보고서를 보여드릴게요 🐰
            <br />
          </div>
          <Link to={`/result/${sequence}`}>
            <ResultButton>자세한 결과보기</ResultButton>
          </Link>
        </>
      ) : (
        <Redirect to="404" />
      )}
    </CenterContainer>
  );
}

export default PrevResult;
