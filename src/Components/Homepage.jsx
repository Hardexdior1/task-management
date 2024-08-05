import React, { useContext, useState } from "react";
import MyContext from "./context";
import { Link } from "react-router-dom";
const Homepage = () => {
  const value = useContext(MyContext);
  const { task,setTask,filter, allTask} = value;


  const [active, setActive] = useState("All");
  const changeActive = (item) => {
    setActive(item);
  };

//   const [availableTask,setAvailableTask]=useState(task)

  const filterCategory=(item)=>{
    
    const newItems=allTask.filter((category)=>category.projectCategory==item)
    setTask(newItems)
    console.log(newItems);
  }
  return (
    <div className="py-20">
      <h1 className="font-semibold"> Dashboard </h1>

      <div className="flex items-center gap-5 p-4 rounded bg-white shadow-md mt-4 overflow-x-scroll">
        <h1 className="shrink-0 font-semibold cursor-pointer"> Filter by: </h1>

        {filter.map((item, index) => {
          return (
            <div
              className="cursor-pointer"
              key={index}
              onClick={() => {
                changeActive(item);
                filterCategory(item)
              }}>
              <h1
                className={
                  active == item ? "font-bold  text-green-500" : "font-bold"
                }>
                {item}
              </h1>
            </div>
          );
        })}
      </div>

      <center>
        <h3 className="text-xl font-bold mt-8 mb-3">Task List</h3>
        <hr />
      </center>
      {task.length > 0 ? "" : <center> No task yet </center>}
      <ul className="mt-4 md:grid grid-cols-2 gap-4 ">
        {task.map((task, index) => (
          <Link key={index} to={"/HomePage/"+task.projectName}>
            <li  className="mb-4 p-4 py-6 border rounded-lg shadow-md bg-white">
              <h4 className="text-lg font-bold">{task.projectName}</h4>
              {/* <p>{task.projectDetails}</p> */}
              <p>Due: {task.dueDate}</p>
              {/* <p>Category: {task.projectCategory}</p>
              <p>Assigned to: {task.assignTo}</p> */}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Homepage;
