import React, { useState, useEffect } from "react";
import axios from "axios";
import PrevResult from "../components/ResultPage/PrevResult";
// import Result from "../components/ResultPage/Result";
import ResultChart from "../components/ResultPage/ResultChart";

function ResultPage({ name, gender, answers }) {
  const [isPrev, setIsPrev] = useState(true);
  const [resultUrl, setResultUrl] = useState(undefined);
  const [date, setDate] = useState(null);
  const [resultScore, setResultScore] = useState([]);
  const [firstValue, setFirstValue] = useState(-1);
  const [secondValue, setSecondValue] = useState(-1);
  const koreanValue = [
    "능력발휘",
    "자율성",
    "보수",
    "안정성",
    "사회적인정",
    "사회봉사",
    "자기계발",
    "창의성",
  ];
  let resultAnswer = "";
  for (let i = 0; i < Object.keys(answers).length; i++) {
    resultAnswer += "B" + (i + 1) + "=" + answers[i + 1 + ""] + " ";
  }
  useEffect(() => {
    const call = async () => {
      const key = "e75f4f4f23d735668faf09f0ffff8123";
      const date = new Date();
      const response = await axios.post(
        // 결과 요청 post
        "http://www.career.go.kr/inspct/openapi/test/report",
        {
          apikey: key,
          qestrnSeq: "6",
          trgetSe: "100209",
          name,
          gender,
          startDtm: date.getTime(),
          answers: resultAnswer,
        }
      );

      let url = new URL(response.data.RESULT.url);
      let params = new URLSearchParams(url.search);
      const seq = params.get("seq");
      //결과 json 요청 (시간 + 점수)
      const jsonURL =
        "https://www.career.go.kr/inspct/api/psycho/report?seq=" + seq;
      setResultUrl(jsonURL);

      const response2 = await axios.get(jsonURL);
      setDate(response2.data.result.endDtm.substring(0, 10));
      const wonScore = response2.data.result.wonScore.split(/\s|=/);
      let temp = [];
      let cnt = 0;
      for (let i = 0; i < wonScore.length; i++) {
        if (wonScore && i % 2) {
          temp.push([wonScore[i - 1], koreanValue[cnt], wonScore[i]]);
          cnt++;
        }
      }
      console.log(temp);
      let forMax = [...temp];
      forMax.sort((a, b) => {
        return b[0] - a[0];
      });

      setResultScore(temp);
      setFirstValue(forMax[0]);
      setSecondValue(forMax[1]);

      console.log(firstValue[0], secondValue[0], gender);
      const response3 = await axios.get(
        `https://inspct.career.go.kr/inspct/api/psycho/value/jobs?no1=${firstValue[0]}&no2=${secondValue[0]}`
      );
      console.log(response3.request.response); // 평균 학력별 직업 정보
      const response4 = await axios.get(
        `https://inspct.career.go.kr/inspct/api/psycho/value/majors?no1=${firstValue[0]}&no2=${secondValue[0]}` // 평균 전공별 직업 정보
      );

      setDate(response2.data.result.endDtm.substring(0, 10));
    };
    call();
  }, []);
  console.log(resultUrl);
  return (
    <div className="result">
      {isPrev ? (
        <PrevResult setIsPrev={setIsPrev} />
      ) : (
        <ResultChart
          name={name}
          gender={gender}
          date={date}
          resultScore={resultScore}
        />
      )}
    </div>
  );
}

export default ResultPage;
