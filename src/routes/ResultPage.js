import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import PrevResult from "../components/ResultPage/Result";
import { koreanValue } from "../constants";

function ResultPage({ name, gender, answers }) {
  const [isPrev, setIsPrev] = useState(true);
  const [date, setDate] = useState(null);
  const [resultScore, setResultScore] = useState([]);
  const [firstValue, setFirstValue] = useState(-1);
  const [secondValue, setSecondValue] = useState(-1);
  const [bestJobForMajor, setBestJobForMajor] = useState([]);
  const [bestJobForEdu, setBestJobForEdu] = useState([]);
  const [sequence, setSequence] = useState("");

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
      setSequence(seq);
      //결과 json 요청 (시간 + 점수)
      const jsonURL =
        "https://www.career.go.kr/inspct/api/psycho/report?seq=" + seq;

      const response2 = await axios.get(jsonURL).then((res) => res.data);
      const wonScore = response2.result.wonScore.split(/\s|=/);
      let temp = [];
      let cnt = 0;
      for (let i = 0; i < wonScore.length; i++) {
        if (wonScore && i % 2) {
          temp.push([wonScore[i - 1], koreanValue[cnt], wonScore[i]]);
          cnt++;
        }
      }

      let forMax = [...temp];
      forMax.sort((a, b) => {
        return b[2] - a[2];
      });

      setResultScore(temp);
      setFirstValue(forMax[0]);
      setSecondValue(forMax[1]);
    };
    call();
  }, []);
  return (
    <>
      {name ? (
        <PrevResult
          name={name}
          setIsPrev={setIsPrev}
          firstValue={firstValue}
          secondValue={secondValue}
          bestJobForMajor={bestJobForMajor}
          sequence={sequence}
        />
      ) : (
        <Redirect to="/404" />
      )}
    </>
  );
}

export default ResultPage;
