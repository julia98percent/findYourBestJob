import React from "react";
import { Redirect, Link } from "react-router-dom";

function PrevResult({ name, setIsPrev, firstValue, secondValue, sequence }) {
  console.log(name + "<< name");
  return (
    <div className="result">
      {name ? (
        <div>
          <h2>검사가 완료되었습니다.</h2>
          <div>
            검사결과는 여러분이 직업을 선택할 때 상대적으로 어떠한 가치를
            중요하게 생각하는지를 알려주고, 중요 가치를 충족시켜줄 수 있는
            직업에 대해 생각해 볼 기회를 제공합니다.
          </div>
          <div>
            <hr />
            {name}님은 {firstValue[1]},{secondValue[1]} 성향이 강하시네요!
            <br />
            다음 페이지에서 {name}님만을 위한 결과분석 보고서를 보여드릴게요 ~ !
          </div>
          <Link to={`/result/${sequence}`}>
            <button>자세한 결과보기</button>
          </Link>
        </div>
      ) : (
        <Redirect to="404" />
      )}
    </div>
  );
}

export default PrevResult;
