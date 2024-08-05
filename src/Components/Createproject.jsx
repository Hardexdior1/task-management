import React, { useContext, useState } from "react";
import MyContext from "./context";
import { useNavigate } from "react-router-dom";
const Createproject = () => {
  const value = useContext(MyContext);
  const navigate = useNavigate();

  let { task, usersList, setTask , filter, allTask,setAllTask} = value;
  // console.log(usersList);

  // const [tasks, setTasks] = useState([]);
  const [formData, setFormData] = useState({
    projectName: "",
    projectDetails: "",
    dueDate: "",
    projectCategory: "",
    assignTo: "",
    comments: [],
  });
  //   const assignTo=(userName)=>{
  //        let assignee= usersList.filter((item)=>item.name==userName)
  //        console.log(assignee);

  //   }\
  const category = (e) => {
    // const assignee = usersList.find((item) => item.name === userName);
console.log(e.target.value);
      setFormData((prevFormData) => ({
        ...prevFormData,
        projectCategory: e.target.value,
      }));

    console.log(e.target.value);
  };

  const assignTo = (userName) => {
    const assignee = usersList.find((item) => item.name === userName);
    if (assignee) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        assignTo: assignee,
      }));
    }
    console.log(assignee);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [creating, setCreating] = useState(false);
  const handleSubmit = (e) => {
    setCreating(true);
    e.preventDefault();
    // setTask((prevTasks) => [...prevTasks, formData]);
    setFormData({
      projectName: "",
      projectDetails: "",
      dueDate: "",
      projectCategory: "",
      assignTo: [],
    });
    setTask((prevTasks) => [...prevTasks, formData]);
    setAllTask((prevTasks) => [...prevTasks, formData]);

    // setAllTask({
    //   projectName: "",
    //   projectDetails: "",
    //   dueDate: "",
    //   projectCategory: "",
    //   assignTo: [],
    // });
    let timeoutId = setTimeout(() => {}, 3000);

    setTimeout(() => {
      clearTimeout(timeoutId);
      navigate("/");
      setCreating(false);
    }, 2000);
  };

  return (
    <div className="max-w-lg mx-auto mt-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Project name:
          </label>
          <input
            required
            type="text"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Project Details:
          </label>
          <textarea
            required
            name="projectDetails"
            value={formData.projectDetails}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Set due date:
          </label>
          <input
            required
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Project category:
          </label>
          <select
            // required

            name="projectCategory"
            onClick={category}
            value={formData.projectCategory}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500">
            <option value="">Select...</option>
            {filter.map((item,index) => {
              return <option key={index}>{item}</option>;
            })}
            {/* Add options for categories here */}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Assign to:
          </label>
          <select
            required

            name="assignTo"
            onClick={assignTo}
            value={formData.assignTo}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500">
            <option value="">Select...</option>
            {usersList.map((item) => {
              return <option key={item.id}>{item.name}</option>;
            })}
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-green-500">
          {creating ? "   Creating.." : "Add Project"}
        </button>
      </form>
    </div>
  );
};

export default Createproject;
