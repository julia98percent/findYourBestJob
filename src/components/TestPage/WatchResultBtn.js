import React from "react";
import { Link } from "react-router-dom";
function WatchResultBtn() {
  return (
    <div className="WatchResultBtn">
      <Link to="/result">
        <input type="submit" />
      </Link>
    </div>
  );
}

export default WatchResultBtn;
