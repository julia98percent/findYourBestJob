import React from "react";
import { Link } from "react-router-dom";
function MainPage() {
  return (
    <div>
      <h2>직업가치관검사</h2>
      <p>
        이름 <input />
      </p>
      <label>
        <input name="gender" type="radio" value={100323} />
        남자
      </label>
      <label>
        <input name="gender" type="radio" value={100324} />
        여자
      </label>
    </div>
  );
}

export default MainPage;
