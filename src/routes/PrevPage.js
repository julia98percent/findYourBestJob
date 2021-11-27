import React, { useState } from "react";
import { Link } from "react-router-dom";
import PrevInput from "../components/PrevPage/PrevInput";
import { Button, CenterContainer } from "../styles/theme";
function PrevPage({ name, setName, gender, setGender }) {
  function checkName(str) {
    const regExp = /^[a-zA-Zㄱ-힣|s]*$/;
    return regExp.test(str) ? true : false;
  }

  return (
    <CenterContainer>
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
      </div>
    </CenterContainer>
  );
}

export default PrevPage;
