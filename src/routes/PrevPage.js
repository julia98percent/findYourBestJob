import React from "react";
import { Link } from "react-router-dom";
import PrevInput from "../components/PrevPage/PrevInput";
import { Button, ButtonGroup, BeatLoader } from "@chakra-ui/react";

function MainPage() {
  return (
    <div className="main">
      <PrevInput />
      <Link to="/test">
        <Button isDisabled={false} colorScheme="blue">
          검사시작
        </Button>
      </Link>
    </div>
  );
}

export default MainPage;
