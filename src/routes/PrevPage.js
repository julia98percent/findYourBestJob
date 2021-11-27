import React, { useRef } from "react";
import { Link } from "react-router-dom";
import PrevInput from "../components/PrevPage/PrevInput";
import {
  Button,
  CenterContainer,
  BoldText,
  ShareButton,
  CopyTextArea,
  MarginContainer,
  BorderCenterContainer,
} from "../styles/theme";
function PrevPage({ name, setName, gender, setGender }) {
  function checkName(str) {
    const regExp = /^[a-zA-Zㄱ-힣|s]*$/;
    return regExp.test(str) ? true : false;
  }
  const copyUrlRef = useRef();
  const handleCopyUrl = (e) => {
    if (!document.queryCommandSupported("copy")) {
      return alert("복사 기능이 지원되지 않는 브라우저입니다.");
    }
    console.log(copyUrlRef);
    copyUrlRef.current.select();
    document.execCommand("copy");
    e.target.focus();
  };
  return (
    <BorderCenterContainer>
      <PrevInput
        name={name}
        setName={setName}
        gender={gender}
        setGender={setGender}
        checkName={checkName}
      />

      <div>
        <Link to="/test">
          <Button disabled={name && checkName(name) && gender ? false : true}>
            검사시작
          </Button>
        </Link>
        <MarginContainer>
          <BoldText>친구와 같이 테스트 해보는거 어떠세요...?😘</BoldText>
          <ShareButton onClick={handleCopyUrl}>
            링크 복사하기
            <CopyTextArea ref={copyUrlRef} value={window.location.href} />
          </ShareButton>
        </MarginContainer>
      </div>
    </BorderCenterContainer>
  );
}

export default PrevPage;
