import React from "react";
import "charts.css/dist/charts.min.css";
function ResultChart({ name, gender, date, resultScore }) {
  // console.log(name, date);
  return (
    <div>
      <h2>직업가치관검사 결과표</h2>

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
              {/* //TODO 이 부분 리팩토링 할 수 잇겠는데...? */}
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
        </div>
      </div>
    </div>
  );
}

export default ResultChart;
