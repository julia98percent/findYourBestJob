import React, { useState } from "react";
import { Link } from "react-router-dom";
import PrevInput from "../components/PrevPage/PrevInput";
import "bulma/css/bulma.min.css";

function PrevPage({ name, setName, gender, setGender }) {
  function checkName(str) {
    const regExp = /^[a-zA-Zㄱ-힣|s]*$/;
    return regExp.test(str) ? true : false;
  }

  return (
    <div className="prev">
      <PrevInput
        name={name}
        setName={setName}
        gender={gender}
        setGender={setGender}
        checkName={checkName}
      />
      <Link to="/test">
        <button
          class="button is-black"
          colorScheme="blue"
          disabled={checkName(name) && gender ? false : true}
        >
          검사시작
        </button>
      </Link>
    </div>
  );
}

export default PrevPage;
