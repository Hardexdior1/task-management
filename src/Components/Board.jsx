import React from "react";
import AllUsers from "./AllUsers";

const Board = () => {
  return (
    <div className="">
      <div className="flex items-top justify-between ">
        <h1 className="font-semibold text-2xl">The Dojo </h1>

        <button className="p-3  h-fit text-black rounded border transition hover:bg-black hover:text-white">
          {" "}
          LOGOUT{" "}
        </button>
      </div>

      
    </div>
  );
};

export default Board;
