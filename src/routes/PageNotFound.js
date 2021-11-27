import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { BorderCenterContainer, BoldMsg } from "../styles/theme";
import lost from "../assets/404.png";

function PageNotFound() {
  const [count, setCount] = useState(3);
  const history = useHistory();

  useEffect(() => {
    const timeout = setTimeout(() => setCount((c) => c - 1), 1000);
    return () => clearTimeout(timeout);
  }, [count]);

  useEffect(() => {
    setTimeout(() => {
      history.push("/");
    }, 3000);
  }, []);

  return (
    <BorderCenterContainer>
      <img src={lost} alt="토끼가 404 팻말을 들고있는 이미지" />
      <BoldMsg>잘못된 접근입니다</BoldMsg>
      <BoldMsg>{count}초 후 메인 페이지로 이동돼요😓</BoldMsg>
    </BorderCenterContainer>
  );
}
export default PageNotFound;
