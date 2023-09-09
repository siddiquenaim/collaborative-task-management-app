import React, { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import uuid from "react-uuid";

const CreateTask = () => {
  document.title = "Create Task | TaskTracker";
  const { user } = useContext(AuthContext);

  const { teamId } = useParams();

  const handleCreateTask = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;
    const dueDate = form.dueDate.value;
    const priority = form.priority.value;
    const taskId = uuid();
    const taskTeamId = teamId;
    const members = [user.email];
    const status = "pending";

    const taskData = {
      taskId,
      taskTeamId,
      title,
      description,
      dueDate,
      priority,
      members,
      status,
    };

    // Save task data to local storage
    saveTaskDataToLocalStorage(taskId, taskData);

    Swal.fire({
      icon: "success",
      title: "Task has been created!",
      showConfirmButton: true,
      timer: 1500,
    });

    form.reset();
  };

  // Function to save task data to local storage
  const saveTaskDataToLocalStorage = (taskId, taskData) => {
    // Retrieve existing tasks data from local storage
    const tasksData = JSON.parse(localStorage.getItem("tasksData")) || {};
    const teamsData = JSON.parse(localStorage.getItem("teamsData"));

    for (let key in teamsData) {
      if (teamsData[key].teamId === teamId) {
        teamsData[key].taskIds.push(taskId);
        localStorage.setItem("teamsData", JSON.stringify(teamsData));
      }
    }

    // Add the new task data to the existing data
    tasksData[taskId] = taskData;

    // Update the local storage with the updated tasks data
    localStorage.setItem("tasksData", JSON.stringify(tasksData));
  };

  return (
    <div className="mb-20 mt-10 w-[90%] mx-auto">
      <div>
        <h1 className="text-3xl text-center font-bold">Create a Task</h1>
        <div className="my-5">
          <form onSubmit={handleCreateTask} className="w-[95%] mx-auto grid">
            <div className="form-control w-[100%] col-span-2">
              <label className="label">
                <span className="label-text font-bold">Title</span>
              </label>
              <input
                name="title"
                type="text"
                placeholder="Task Title"
                className="input input-bordered w-[90%]"
                required
              />
            </div>
            <div className="form-control w-[100%] col-span-2">
              <label className="label">
                <span className="label-text font-bold">Description</span>
              </label>
              <textarea
                name="description"
                placeholder="Task Description"
                className="input input-bordered w-[90%] h-[120px] resize-y"
                required
              ></textarea>
            </div>
            <div className="form-control w-[100%] col-span-2">
              <label className="label">
                <span className="label-text font-bold">Due Date</span>
              </label>
              <input
                name="dueDate"
                type="date"
                className="input input-bordered w-[90%]"
                required
              />
            </div>
            <div className="form-control w-[100%] col-span-2">
              <label className="label">
                <span className="label-text font-bold">Priority Level</span>
              </label>
              <select
                name="priority"
                className="select select-bordered w-[90%]"
                required
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <div className="form-control mx-auto col-span-2 mt-4">
              <input
                className="cursor-pointer btn bg-[#021817] text-white hover:bg-[#0218179c] normal-case"
                type="submit"
                value="Create Task"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
