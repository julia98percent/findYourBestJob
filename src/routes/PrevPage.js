import React, { useState } from "react";
import { Link } from "react-router-dom";
import PrevInput from "../components/PrevPage/PrevInput";
import "bulma/css/bulma.min.css";

function PrevPage({ name, setName, gender, setGender }) {
  return (
    <div className="prev">
      <PrevInput
        name={name}
        setName={setName}
        gender={gender}
        setGender={setGender}
      />
      <Link to="/test">
        <button
          class="button is-black"
          colorScheme="blue"
          isDisabled={name && gender ? false : true}
        >
          검사시작
        </button>
      </Link>
    </div>
  );
}

export default PrevPage;
