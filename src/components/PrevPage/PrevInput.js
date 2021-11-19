import React, { useState } from "react";
import { Link } from "react-router-dom";

function MainPage({ name, gender, setName, setGender }) {
  return (
    <div>
      <h2 class="title is-2">직업가치관검사</h2>
      <p>
        이름: <input onChange={(e) => setName(e.target.value)} />
      </p>
      <div style={{ visibility: name ? "hidden" : "inherit" }}>
        이름 입력 안해?!!
      </div>

      <label class="radio">
        <input
          type="radio"
          name="gender"
          value={100323}
          onChange={() => setGender(100323)}
        />
        남자
      </label>

      <label class="radio">
        <input
          type="radio"
          name="gender"
          value={100324}
          onChange={() => setGender(100324)}
        />
        여자
      </label>

      <div style={{ visibility: gender ? "hidden" : "inherit" }}>
        성별 선택 안해?!!
      </div>
    </div>
  );
}

export default MainPage;
