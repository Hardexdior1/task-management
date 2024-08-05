// src/App.js
import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import SideBar from "./Components/SideBar";
import Board from "./Components/Board";
import Createproject from "./Components/Createproject";
import AllUsers from "./Components/AllUsers";
import Homepage from "./Components/Homepage";
import MyContext from "./Components/context";
import user from "./images/Nike 1.png";
import TaskDetails from "./Components/TaskDeatails";

const App = () => {
  const [task, setTask] = useState([]);
  const [allTask, setAllTask] = useState([]);
  const [usersList, setUsersList] = useState([
    {
      name: "Ade",
      img: user,
      id: 1,
      active: true,
    },

    {
      name: "Quwam",
      img: user,
      id: 2,
      active: false,
    },
    {
      name: "Chulo",
      img: user,
      id: 3,
      active: true,
    },
    {
      name: "Chulo",
      img: user,
      id: 4,
      active: false,
    },
    {
      name: "Chulo",
      img: user,
      id: 5,
      active: true,
    },
    {
      name: "Chulo",
      img: user,
      id: 6,
      active: true,
    },
    {
      name: "Chulo",
      img: user,
      id: 7,
      active: true,
    },
    {
      name: "Chulo",
      img: user,
      id: 8,
      active: true,
    },
    {
      name: "Chulo",
      img: user,
      id: 9,
      active: true,
    },
  ]);
  const filter = ["All", "mine", "development", "design", "marketing", "sales"];
// ivnr8eivh80r
// vurbugvbur

  const contextValue = {
    usersList,
    setUsersList,
    task,
    setTask,
    filter,
    allTask,
    setAllTask,
  };
  console.log(task);
  console.log(allTask);

  return (
    <div>
      <MyContext.Provider value={contextValue}>
        <BrowserRouter>
          <div className="grid grid-cols-5 gap-10 bg-gray-100">
            <div className="col-span-1 bg-gray-300 h-screen">
              <SideBar />
            </div>

            <div className="col-span-3 py-10 ">
              <Board />

              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route
                  path="/create-project"
                  element={<Createproject task={task} setTask={setTask} />}
                />
                <Route
                  path="/HomePage/:projectName"
                  element={<TaskDetails />}
                />
              </Routes>
            </div>

            <div className="col-span-1 py-10 border bg-black text-white px-5 h-screen overflow-y-scroll">
              <AllUsers />
            </div>
          </div>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
};

export default App;
{
  /* <Route path="*" element={<Navigate to="/" />} /> */
}
{
  /* 
            <Route path="dashboard"
              element={
                // <ProtectedRoute>
                <Dashboard />
                // </ProtectedRoute>
              }
            /> */
}
{
  /* <Route path="*" element={<Navigate to="/signup" />} /> */
}
