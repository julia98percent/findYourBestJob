import React from "react";
import {
  InputName,
  WarningMsg,
  InputCover,
  Label,
  H2,
} from "../../styles/theme";

function PrevInput({ name, gender, setName, setGender, checkName }) {
  return (
    <div>
      <H2>✏️직업가치관검사🐰</H2>
      <div>
        <InputCover>
          <InputName>이름</InputName>
          <input onChange={(e) => setName(e.target.value)} />

          <WarningMsg>
            {name ? (
              checkName(name) ? (
                <br />
              ) : (
                "숫자나 특수문자는 들어갈 수 없어요!8ㅅ8"
              )
            ) : (
              "이름을 입력해주세요!"
            )}
          </WarningMsg>
        </InputCover>
        <InputCover>
          <InputName>성별</InputName>
          <Label>
            <input
              type="radio"
              name="gender"
              value="100323"
              onChange={() => setGender(100323)}
            />
            남자
          </Label>

          <Label>
            <input
              type="radio"
              name="gender"
              value="100324"
              onChange={() => setGender(100324)}
            />
            여자
          </Label>

          <WarningMsg>
            {checkName(name) && gender ? "" : "성별을 선택해주세요!"}
          </WarningMsg>
        </InputCover>
      </div>
    </div>
  );
}

export default PrevInput;
