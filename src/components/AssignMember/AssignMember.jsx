import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useTeamData from "../../hooks/useTeamData";
import useTaskMembers from "../../hooks/useTaskMembers";
import useSingleTaskData from "../../hooks/useSingleTaskData";
import Swal from "sweetalert2";

const AssignMember = () => {
  const [error, setError] = useState("");
  const taskId = useParams();
  const { teamId } = useParams();
  const { task } = useSingleTaskData(taskId);
  const { team } = useTeamData(teamId);
  const { members } = task;
  const { taskMembers } = useTaskMembers(members);
  const handleAssignMember = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    let allTask = JSON.parse(localStorage.getItem("tasksData"));

    if (userExists(email)) {
      for (let member of taskMembers) {
        if (team?.members?.includes(email)) {
          if (member?.email !== email) {
            for (let key in allTask) {
              if (allTask[key]?.taskId === taskId.taskId) {
                allTask[key]?.members?.push(email);
                localStorage.setItem("tasksData", JSON.stringify(allTask));
                Swal.fire({
                  icon: "success",
                  title: "Member Assigned Successfully",
                  showConfirmButton: true,
                  timer: 1500,
                });
                form.reset();
              }
            }
          } else {
            setError("This member is already a part of this task.");
          }
        } else {
          setError("User is not a part of the team.");
        }
      }
    } else {
      setError("User doesn't exist.");
    }
  };

  const userExists = (email) => {
    const usersData = JSON.parse(localStorage.getItem("usersData")) || {};

    // Check if the user with the provided email exists in the data
    for (const userId in usersData) {
      if (usersData.hasOwnProperty(userId)) {
        const userData = usersData[userId];
        if (userData.email === email) {
          return true;
        }
      }
    }

    return false;
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-10 mb-5">
        Assign team member
      </h1>
      <div className="flex justify-center mt-10">
        <form onSubmit={handleAssignMember} className="join">
          <input
            className="input input-bordered join-item"
            placeholder="Email"
            name="email"
            type="email"
          />
          <button className="btn join-item rounded-r-full">
            Assign Member
          </button>
        </form>
      </div>
      {error && <p className="text-center mt-4 text-red-600">{error}</p>}
    </div>
  );
};

export default AssignMember;
