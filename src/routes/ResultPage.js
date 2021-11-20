import React, { useState, useEffect } from "react";
import axios from "axios";
import PrevResult from "../components/ResultPage/PrevResult";
import Result from "../components/ResultPage/Result";
function ResultPage({ name, gender, answers }) {
  const [isPrev, setIsPrev] = useState(true);
  const [resultUrl, setResultUrl] = useState(undefined);
  let resultAnswer = "";
  for (let i = 0; i < Object.keys(answers).length; i++) {
    resultAnswer += "B" + (i + 1) + "=" + answers[i + 1 + ""] + " ";
  }
  useEffect(() => {
    const call = async () => {
      const key = "e75f4f4f23d735668faf09f0ffff8123";
      const date = new Date();
      const response = await axios.post(
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

      const jsonURL =
        "https://www.career.go.kr/inspct/api/psycho/report?seq=" + seq;
      setResultUrl(jsonURL);
    };
    call();
  }, []);
  console.log(resultUrl);
  return (
    <div className="result">
      {isPrev ? (
        <PrevResult setIsPrev={setIsPrev} />
      ) : (
        <Result name={name} gender={gender} />
      )}
    </div>
  );
}

export default ResultPage;
