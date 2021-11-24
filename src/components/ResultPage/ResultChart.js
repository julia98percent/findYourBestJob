import React from "react";
import "charts.css/dist/charts.min.css";
function ResultChart({
  name,
  gender,
  date,
  resultScore,
  firstValue,
  secondValue,
  bestJobForEdu,
  bestJobForMajor,
}) {
  const edu = ["", "중졸이하", "고졸", "전문대졸", "대졸", "대학원졸"];
  const major = [
    "계열무관",
    "인문",
    "사회",
    "교육",
    "공학",
    "자연",
    "의학",
    "예체능",
  ];
  console.log(bestJobForMajor);
  console.log(bestJobForEdu);

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
              <td>{name}</td>
              <td>{gender == 100323 ? "남" : "여"}</td>
              <td>{date}</td>
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
              {/* //TODO 이 부분 컴포넌트로 따로 분리시켜서 리팩토링 할 수 잇겠는데...? */}
              <tr>
                <th scope="row"> 능력발휘 </th>
                <td style={{ "--size": `calc( ${resultScore[0][0]} / 10 )` }} />
              </tr>
              <tr>
                <th scope="row">자율성 </th>
                <td style={{ "--size": `calc( ${resultScore[1][0]} / 10 )` }} />
              </tr>
              <tr>
                <th scope="row"> 보수</th>
                <td style={{ "--size": `calc( ${resultScore[2][0]} / 10 )` }} />
              </tr>
              <tr>
                <th scope="row"> 안정성</th>
                <td style={{ "--size": `calc( ${resultScore[3][0]} / 10 )` }} />
              </tr>
              <tr>
                <th scope="row"> 사회적인정 </th>
                <td style={{ "--size": `calc( ${resultScore[4][0]} / 10 )` }} />
              </tr>
              <tr>
                <th scope="row"> 사회봉사 </th>
                <td style={{ "--size": `calc( ${resultScore[5][0]} / 10 )` }} />
              </tr>
              <tr>
                <th scope="row"> 자기계발 </th>
                <td style={{ "--size": `calc( ${resultScore[6][0]} / 10 )` }} />
              </tr>
              <tr>
                <th scope="row">창의성 </th>
                <td style={{ "--size": `calc( ${resultScore[7][0]} / 10 )` }} />
              </tr>
            </tbody>
          </table>
          <div>
            <h3>2. {name}님의 가치관과 관련이 높은 직업</h3>
            <span>
              {name}님이 중요하게 생각하는 {firstValue} 와(과) {secondValue}
              을(를) 만족시킬 수 있는 직업은 다음과 같습니다.
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
                    console.log(index + "!"); // 0, 1, 2, 3, 4 ...
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
                    console.log(index + "!"); // 0, 1, 2, 3, 4 ...
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
    </div>
  );
}

export default ResultChart;
