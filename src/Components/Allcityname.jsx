import React from "react";
import { Link } from "react-router-dom";

function Allcityname(props) {
  return (
    <div>
      <Link to="/">
        <button
          type="button"
          className="border-solid border-2 border-black bg-slate-500 text-sm font-semibold text-white shadow-sm hover:bg-black hover-shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black w-full h-16 mt-1"
        >
          {props.cityname}
        </button>
      </Link>
    </div>
  );
}

export default Allcityname;
