import React from "react";

function PrevInput({ name, gender, setName, setGender, checkName }) {
  return (
    <div>
      <h2 class="title is-2">직업가치관검사</h2>
      <p>
        이름: <input onChange={(e) => setName(e.target.value)} />
      </p>

      <div>
        {name ? (
          checkName(name) ? (
            <br />
          ) : (
            "숫자나 특수문자는 들어갈 수 없어요!8ㅅ8"
          )
        ) : (
          "이름을 입력해주세요!"
        )}
      </div>

      <label class="radio">
        <input
          type="radio"
          name="gender"
          value="100323"
          onChange={() => setGender(100323)}
        />
        남자
      </label>

      <label class="radio">
        <input
          type="radio"
          name="gender"
          value="100324"
          onChange={() => setGender(100324)}
        />
        여자
      </label>

      <div>{checkName(name) && gender ? "" : "성별을 선택해주세요!"}</div>
    </div>
  );
}

export default PrevInput;
