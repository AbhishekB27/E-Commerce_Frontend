import React from "react";
import ConnectionL from "./images/ConnectionLost.png";

const ConnectionLost = () => {
  return (
    <div className="grid place-items-center min-h-screen">
      <div className="container grid place-items-center space-y-3">
        <h1 className="text-lg font-semibold">Connection Lost</h1>
        <img src={ConnectionL} alt="" />
        <p className="font-sans font-medium text-base  md:text-lg md:font-poppins md:font-semibold">
          "Oops, it looks like your internet connection is playing hide and seek
          with us. Don't worry, we'll find it and bring it back to you in no
          time!"
        </p>
        <button onClick={()=>{window.location.reload()}} className=" md:font-semibold rounded px-3 py-2 bg-blue-600 text-white">Try Again</button>
      </div>
    </div>
  );
};

export default ConnectionLost;
