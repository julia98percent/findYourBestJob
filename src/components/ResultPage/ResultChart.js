import React from "react";

function ResultChart({ name, gender, time }) {
  return (
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
            <td>{time}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ResultChart;
