import React from "react";
import {
  InputName,
  WarningMsg,
  InputCover,
  Label,
  H2,
  PrevDescription,
} from "../../styles/theme";

function PrevInput({ name, gender, setName, setGender, checkName }) {
  return (
    <div>
      <H2>✏️직업가치관검사🐰</H2>
      <PrevDescription>
        이 검사에서는 직업과 관련된 다양한 욕구 및 가치들에 대해 여러분이
        상대적으로 무엇을 얼마나 더 중요하게 여기는가를 살펴보고, 그 가치가
        충족될 가능성이 높은 직업을 탐색할 수 있도록 도움을 줄 수 있어요!
      </PrevDescription>
      <div>
        <InputCover>
          <InputName>이름</InputName>
          <input onChange={(e) => setName(e.target.value)} />

          <WarningMsg>
            {name ? (
              checkName(name) ? (
                <></>
              ) : (
                "숫자나 특수문자는 들어갈 수 없어요!8ㅅ8"
              )
            ) : (
              "이름을 입력해주세요"
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
            {checkName(name) && gender ? "" : "성별을 선택해주세요"}
          </WarningMsg>
        </InputCover>
      </div>
    </div>
  );
}

export default PrevInput;
