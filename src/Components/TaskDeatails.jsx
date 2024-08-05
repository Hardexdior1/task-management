import React, { useContext, useState } from "react";
import MyContext from "./context";
import { useParams } from "react-router-dom";
import user from "../images/Nike 1.png";

const TaskDetails = () => {
  const { projectName } = useParams();
  const value = useContext(MyContext);

  const { usersList, task, setTask } = value;

  const postIndex = task.findIndex((item) => item.projectName === projectName);
  const post = task[postIndex];
  console.log(post);

  const [comment, setComment] = useState("");

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const assigneeList = usersList.filter((item) => item.name == post.assignTo);
  console.log(assigneeList);

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    const updatedTasks = task.map((item, index) => {
      if (index === postIndex && comment.trim() !== "") {
        return {
          ...item,
          comments: [...item.comments, comment],
        };
      }
      return item;
    });

    setTask(updatedTasks);
    setComment("");
  };

  return (
    <div className="grid items-top gap-4 mt-5 md:grid-cols-2 ">
      <div className="shadow-md rounded p-5 grid gap-4 h-fit">
        <p className="text-2xl font-bold first-letter:uppercase text-gray-700">
          {post.projectName}
        </p>
        <p className="text-lg font-semibold first-letter:uppercase">
          {" "}
          Project due by {post.dueDate}
        </p>

        <p className="text-lg font-semibold first-letter:uppercase">
          {" "}
          {post.projectDetails}
        </p>

        <div>
          <p className="text-lg font-semibold first-letter:uppercase text-gray-600">
            {" "}
            Project assigned to:
          </p>

          <div className="grid  gap-3 items-center h-80 overflow-y-scroll md:grid-cols-2 mt-2">
            {assigneeList.map((item,index)=>{
              return <div key={index} className="grid items-left bg-white rounded-md justify-center text-center py-2">
                <img
              className=" object-cover mt-3 h-20 w-20 rounded-full border border-black mb-3"
              src={item.img}
              alt={item.name}
            />

            <p className="font-semibold"> {item.name} </p>
              </div>
            })}
            
          </div>
        </div>
      </div>

      <div className="grid   shadow-md p-4 h-screen overflow-y-scroll">
        <div>
          <h1>Project comments </h1>
          <ul className="mt-4 ">
            {post.comments.map((comment, index) => (
              <li key={index} className="mb-4  p-2 border rounded-lg shadow-sm">
                {comment}
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleCommentSubmit} className="">
          <textarea
            value={comment}
            onChange={handleCommentChange}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder="Add a comment"></textarea>
          <button
            type="submit"
            className="mt-2 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600">
            Add Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskDetails;
