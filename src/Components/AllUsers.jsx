import React, { useContext, useState } from "react";
import MyContext from "./context";

const AllUsers = () => {

    const value=useContext(MyContext)

    const {usersList,setUsersList}=value
 
  return (
    <div className="">
      <h1 className="font-bold text-1xl">All users</h1>

      <ul className="grid gap-3 mt-4">
        {usersList.map((item) => {
          return (
            <div
              key={item.id}
              className="flex shrink-0 gap-2 items-center justify-between shadow-md p-2 bg-white text-black rounded">
              <div className="flex items-center gap-2">
                {item.active ? (
                  <button className="py-1 px-1 rounded bg-green-500 rounded-full">
                    {" "}
                  </button>
                ) : (
                  ""
                )}
                <li className="font-semibold"> {item.name} </li>
              </div>
              <div>
                <img
                  className="h-10 w-10 rounded-full border object-cover"
                  src={item.img}
                  alt={item.name}
                />
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default AllUsers;
