import React from "react";
import { Link } from "react-router-dom";
function WatchResultBtn() {
  return (
    <div className="WatchResultBtn">
      <Link to="/result">
        <button>결과보기</button>
      </Link>
    </div>
  );
}

export default WatchResultBtn;
