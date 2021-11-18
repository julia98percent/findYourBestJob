import React, { useEffect } from "react";
import axios from "axios";
import PrevResult from "../components/PrevResult";
function ResultPage() {
  useEffect(() => {
    const call = async () => {
      const key = "e75f4f4f23d735668faf09f0ffff8123";
      const response = await axios.post(
        "http://www.career.go.kr/inspct/openapi/test/report",
        {
          apikey: "e75f4f4f23d735668faf09f0ffff8123",
          qestrnSeq: "6",
          trgetSe: "100206",
          name: "홍길동",
          gender: "100323",
          school: "율도중학교",
          grade: "2",
          email: "",
          startDtm: 1550466291034,
          answers:
            "B1=1 B2=3 B3=5 4=7 5=1 6=2 7=1 8=5 9=5 10=1 11=4 12=4 13=5 14=4 15=4 16=4 17=4 18=5 19=1 20=1 21=1 22=5 23=3 24=6 25=3 26=2 27=2 28=6 29=3 30=2 31=4 32=3 33=5 34=2 35=3 36=2 37=7 38=2 39=5 40=5 41=5 42=1 43=7 44=6 45=5 46=4 47=2 48=5 49=4 50=5 51=5 52=5 53=7 54=2 55=6 56=4 57=6 58=4 59=3 60=5 61=5 62=5 63=7 64=4 65=7 66=5",
        }
      );
      console.log(response.data.RESULT.url);
    };
    call();
  }, []);
  return (
    <div className="result">
      <PrevResult />
    </div>
  );
}

export default ResultPage;
