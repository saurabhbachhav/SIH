import React, { useState } from "react";
import { Musiumimg } from "../assets/assets";
import { Link } from "react-router-dom";
function Musiumpage() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === Musiumimg.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? Musiumimg.length - 1 : current - 1);
  };

  return (
    <div className="h-screen">
      <div className="flex justify-evenly items-center p-5  bg-slate-900 ">
        <div
          className="left_arrow  bg-gray-200 hover:bg-gray-400 hover:text-white rounded-lg cursor-pointer"
          onClick={prevSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        <div className="image">
          {Musiumimg.map(
            (item, index) =>
              current === index && (
                <div className="flex max-w-96 min-w-96 justify-center  ">
                  {" "}
                  <img
                    className="rounded-2xl z-0 hover:z-50"
                    src={item}
                    alt="image"
                  />
                </div>
              )
          )}
        </div>
        <div
          className="right_arrow bg-gray-200 hover:bg-gray-400 hover:text-white rounded-lg cursor-pointer"
          onClick={nextSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
      <h1>To be Included</h1>
      <div className="flex justify-center">
        <button
          type="button"
          className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 "
        >
          <Link to="/booking" className="block w-full h-full">
            Book Ticket
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Musiumpage;
