import React from "react";
import Inputmessage from "./Inputmessage";
import Displaycards from "./Displaycards";
import Chatbot from "./Chatbot";
import Musiumpage from "./Musiumpage";
import MusiumpageDes from "./MusiumpageDes";
import { Route, Router, Routes } from "react-router-dom";
import Booking from "./Booking";

function Display(props) {
  return (
    <div className=" w-5/6 border-solid border divide-red-600 bg-slate-300 overflow-y-auto no-scrollbar">
      <div className="h-[90%]">
        <Routes>
          <Route path="/" element={<Displaycards />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/Musiumpage" element={<Musiumpage />} />
        </Routes>
        <Displaycards />
        <Displaycards />
        <Displaycards />
        {/* <Musiumpage />
        <MusiumpageDes />
        <Displaycards />
        <Displaycards />
        <Displaycards /> */}
        {/* <Chatbot/> */}
      </div>
      {/* <Inputmessage /> */}
    </div>
  );
}

export default Display;
