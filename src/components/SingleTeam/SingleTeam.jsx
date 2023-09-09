import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useTeamData from "../../hooks/useTeamData";
import TaskRow from "./TaskRow";
import useTaskData from "../../hooks/useTaskData";

const SingleTeam = () => {
  const { teamId } = useParams();
  const { team } = useTeamData(teamId);
  const { tasks } = useTaskData(teamId);

  // State variables for filtering and sorting
  const [filterStatus, setFilterStatus] = useState("all"); // Filter by task status
  const [sortBy, setSortBy] = useState("dueDate"); // Sort tasks by due date initially
  const [sortOrder, setSortOrder] = useState("asc"); // Sort tasks in ascending order initially

  // Function to filter tasks based on selected status
  const filteredTasks = tasks.filter((task) => {
    if (filterStatus === "all") {
      return true; // Show all tasks
    } else {
      return task.status === filterStatus; // Filter by selected status
    }
  });

  // Function to sort tasks based on selected criteria
  const sortedTasks = [...filteredTasks].sort((task1, task2) => {
    // Sort by due date or priority level
    if (sortBy === "dueDate") {
      const date1 = new Date(task1.dueDate).getTime();
      const date2 = new Date(task2.dueDate).getTime();
      return sortOrder === "asc" ? date1 - date2 : date2 - date1;
    } else if (sortBy === "priority") {
      return sortOrder === "asc"
        ? task1.priority - task2.priority
        : task2.priority - task1.priority;
    }
  });

  return (
    <div>
      <h1 className="text-2xl font-bold text-center pt-10 pb-5">
        Welcome to {team?.name}
      </h1>

      {/* Filter and sort options */}
      <div className="flex justify-between mb-4 w-[90%] mx-auto">
        <div className="border py-2 px-3 rounded-md">
          <label className="mr-2">Filter by Status:</label>
          <select
            onChange={(e) => setFilterStatus(e.target.value)}
            value={filterStatus}
            className="cursor-pointer"
          >
            <option value="all">All</option>
            <option value="Completed">Completed</option>
            <option value="inProgress">In Progress</option>
            <option value="pending">Pending</option>
          </select>
        </div>
        <div className="border py-2 px-3 rounded-md">
          <label className="mr-2">Sort by:</label>
          <select
            onChange={(e) => setSortBy(e.target.value)}
            value={sortBy}
            className="cursor-pointer"
          >
            <option value="dueDate">Due Date</option>
            <option value="priority">Priority</option>
          </select>
        </div>
        <div className="border py-2 px-3 rounded-md">
          <label className="mr-2">Sort Order:</label>
          <select
            onChange={(e) => setSortOrder(e.target.value)}
            value={sortOrder}
            className="cursor-pointer"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>

      {sortedTasks.length > 0 ? (
        <div className="overflow-x-scroll lg:overflow-x-auto my-10">
          <table className="table w-[90%] mx-auto">
            {/* Table headers */}
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Description</th>
                <th>Due Date</th>
                <th>Priority Level</th>
                <th>Status</th>
                <th>View Task</th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody>
              {sortedTasks.map((task, i) => (
                <TaskRow key={i} i={i} teamId={teamId} task={task}></TaskRow>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center">No tasks found.</p>
      )}

      <div className="text-center space-x-3 mt-7">
        <Link to={`/create-task/${teamId}`}>
          <button className="btn bg-[#2B3440] text-white hover:bg-[#0218179c] normal-case">
            Create a task
          </button>
        </Link>
        <Link to={`/view-team-members/${teamId}`}>
          <button className="btn bg-[#2B3440] text-white hover:bg-[#0218179c] normal-case">
            View team members
          </button>
        </Link>
        <Link to={`/add-team-member/${teamId}`}>
          <button className="btn bg-[#2B3440] text-white hover:bg-[#0218179c] normal-case">
            Add team member
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleTeam;
