import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "charts.css/dist/charts.min.css";
import { edu, major, koreanValue } from "../constants";

function ChartPage({ match }) {
  const [username, setUsername] = useState("");
  const [userGender, setUserGender] = useState(0);
  const [userDate, setUserDate] = useState("");
  const [resultScore, setResultScore] = useState([]);
  const [sortedResultScore, setSortedResultScore] = useState([]);
  const [bestJobForEdu, setBestJobForEdu] = useState([]);
  const [bestJobForMajor, setBestJobForMajor] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");

  const copyUrlRef = useRef();
  const handleCopyUrl = (e) => {
    if (!document.queryCommandSupported("copy")) {
      return alert("복사 기능이 지원되지 않는 브라우저입니다.");
    }
    copyUrlRef.current.select();
    document.execCommand("copy");
    e.target.focus();
  };

  useEffect(() => {
    const jsonURL =
      "https://www.career.go.kr/inspct/api/psycho/report?seq=" +
      match.params.seq;

    const call = async () => {
      const response2 = await axios.get(jsonURL).then((res) => res.data);
      setUsername(response2.user.name);
      setUserGender(response2.user.grade);
      setUserDate(response2.result.endDtm.substring(0, 10));
      const wonScore = response2.result.wonScore.split(/\s|=/);
      let beforeSort = [];
      let cnt = 0;
      for (let i = 0; i < wonScore.length; i++) {
        if (wonScore && i % 2) {
          beforeSort.push([wonScore[i - 1], koreanValue[cnt], wonScore[i]]);
          cnt++;
        }
      }
      let afterSort = [...beforeSort];
      afterSort.sort((a, b) => {
        return b[2] - a[2];
      });

      setResultScore(beforeSort);
      setSortedResultScore(afterSort);
      setFirstValue(afterSort[0][1]);
      setSecondValue(afterSort[1][1]);

      // 평균 학력별 직업 정보
      const response3 = await axios
        .get(
          `https://inspct.career.go.kr/inspct/api/psycho/value/jobs?no1=${afterSort[0][0]}&no2=${afterSort[1][0]}`
        )
        .then((res) => res.data);
      // 평균 전공별 직업 정보
      const response4 = await axios
        .get(
          `https://inspct.career.go.kr/inspct/api/psycho/value/majors?no1=${afterSort[0][0]}&no2=${afterSort[1][0]}`
        )
        .then((res) => res.data);

      setBestJobForEdu(response3);
      setBestJobForMajor(response4);

      console.log(bestJobForEdu);
      console.log(bestJobForMajor);
    };
    call();
    console.log(sortedResultScore);
  }, []);
  // if (sortedResultScore != undefined && bestJobForEdu) {
  //   console.log(resultScore);
  //   console.log(bestJobForEdu);
  //   setIsLoading(false);
  // }

  return (
    <div>
      <h2>직업가치관검사 결과표</h2>
      <div>
        직업가치관이란 직업을 선택할 때 영향을 끼치는 자신만의 믿음과
        신념입니다. 따라서 여러분의 직업생활과 관련하여 포기하지 않는 무게중심의
        역할을 한다고 볼 수 있습니다. 직업가치관검사는 여러분이 직업을 선택할 때
        상대적으로 어떠한 가치를 중요하게 생각하는지를 알려줍니다. 또한 본인이
        가장 중요하게 생각하는 가치를 충족시켜줄 수 있는 직업에 대해 생각해 볼
        기회를 제공합니다.
      </div>
      <div className="result-chart">
        <table class="table">
          <thead>
            <tr>
              <td>이름</td>
              <td>성별</td>
              <td>검사일</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{username}</td>
              <td>{userGender == 100323 ? "남" : "여"}</td>
              <td>{userDate}</td>
            </tr>
          </tbody>
        </table>

        <h3>1. 직업가치관 결과</h3>
        <div>
          <table
            style={{
              height: 200 + "px",
              maxWidth: 800 + "px",
              margin: 0,
              "--color": "pink",
            }}
            class="charts-css column show-10-secondary-axes  show-data-axes data-spacing-10  show-labels"
          >
            <caption> {/*TODO 수정해야대요~~~~~~!!!!*/} </caption>
            <tbody>
              {resultScore.map((item) => {
                return (
                  <tr>
                    <th scope="row">{item[1]}</th>
                    <td style={{ "--size": `calc( ${item[2]} / 10 )` }} />
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div>
            <h3>2. {username}님의 가치관과 관련이 높은 직업</h3>
            <span>
              {username}님이 중요하게 생각하는 {firstValue}와(과)
              {secondValue}을(를) 만족시킬 수 있는 직업은 다음과 같습니다.
            </span>
            <div>
              <h4>종사자 평균 학력별</h4>
              <table class="table">
                <thead>
                  <tr>
                    <td>분야</td>
                    <td>직업명</td>
                  </tr>
                </thead>
                <tbody>
                  {/* api에서 가져온 추천직업의 item을 첫번째부터 순차적으로
                  사용하는게 아닌 거기서 일단 분류하고 필요한 정보를 빼서
                  쓰려고 함 */}
                  {bestJobForEdu.map((item, index) => {
                    // console.log(index); // 0, 1, 2, 3, 4 ...
                    const jobByEdu = bestJobForEdu.filter((item2) => {
                      // map함수의 index를 활용해서 직업 분류(직업명 컬럼에 들어갈 내용들)
                      return item2[2] === index;
                    });
                    return (
                      <tr
                        style={jobByEdu.length == 0 ? { display: "none" } : {}}
                      >
                        <td>{edu[index]}</td>
                        <td>
                          {jobByEdu.map((job) => {
                            const [jobLinkNum, jobName] = job;
                            return (
                              <a
                                href={`https://www.career.go.kr/cnet/front/base/job/jobView.do?SEQ=${jobLinkNum}`}
                                target="_blank"
                              >
                                {jobName + " "}
                              </a>
                            );
                          })}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div>
              <h4>종사자 평균 전공별</h4>
              <table class="table">
                <thead>
                  <tr>
                    <td>분야</td>
                    <td>직업명</td>
                  </tr>
                </thead>
                <tbody>
                  {bestJobForMajor.map((item, index) => {
                    // console.log(index + "!"); // 0, 1, 2, 3, 4 ...
                    const jobByMajor = bestJobForMajor.filter((item2) => {
                      // map함수의 index를 활용해서 직업 분류(직업명 컬럼에 들어갈 내용들)
                      return item2[2] === index;
                    });
                    return (
                      <tr
                        style={
                          jobByMajor.length == 0 ? { display: "none" } : {}
                        }
                      >
                        <td>{major[index]}</td>
                        <td>
                          {jobByMajor.map((job) => {
                            const [jobLinkNum, jobName] = job;
                            return (
                              <a
                                href={`https://www.career.go.kr/cnet/front/base/job/jobView.do?SEQ=${jobLinkNum}`}
                                target="_blank"
                              >
                                {jobName + " "}
                              </a>
                            );
                          })}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Link to="/">
        <button>다시 검사하기</button>
      </Link>
      <div>
        <p>친구와 공유 ㄱㄱ</p>
        <button onClick={handleCopyUrl}>공유하기</button>
        {/* <form> */}
        <textarea ref={copyUrlRef} value={window.location.href} />
      </div>
    </div>
  );
}

export default ChartPage;
