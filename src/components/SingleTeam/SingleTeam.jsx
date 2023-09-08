import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useTeamData from "../../hooks/useTeamData";
import TaskRow from "./TaskRow";

const SingleTeam = () => {
  const { teamId } = useParams();
  const { team } = useTeamData(teamId);
  const allTask = JSON.parse(localStorage.getItem("tasksData"));
  const teamTask = allTask?.filter(
    (singleTask) => singleTask?.teamId === teamId
  );
  console.log(allTask);

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-10 mb-5">
        Welcome to {team?.name}
      </h1>

      {teamTask && (
        <div className="overflow-x-scroll lg:overflow-x-auto">
          <table className="table w-[90%] lg:w-full mx-auto">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Description</th>
                <th>Due Date</th>
                <th>Priority Level</th>
              </tr>
            </thead>
            <tbody>
              {allTask?.map((task, i) => (
                <TaskRow key={task} i={i} task={task}></TaskRow>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className=" text-center">
        {" "}
        <Link to="/create-task">
          {" "}
          <button className="btn">Create a task</button>
        </Link>
      </div>
    </div>
  );
};

export default SingleTeam;
