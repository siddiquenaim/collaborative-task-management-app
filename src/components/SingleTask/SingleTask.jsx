import React from "react";
import useSingleTaskData from "../../hooks/useSingleTaskData";
import { Link, useNavigate, useParams } from "react-router-dom";
import MemberRow from "./MemberRow";
import useTaskMembers from "../../hooks/useTaskMembers";
import Swal from "sweetalert2";

const SingleTask = () => {
  const taskId = useParams();
  const { teamId } = useParams();
  const { task } = useSingleTaskData(taskId);
  const { title, description, dueDate, priority, status, members } = task;
  const { taskMembers } = useTaskMembers(members);
  const navigate = useNavigate();

  const handleMarkCompleted = () => {
    if (status !== "Completed") {
      updateTaskStatus("Completed");
      Swal.fire({
        icon: "success",
        title: "Marked as Completed",
        showConfirmButton: true,
        timer: 1500,
      });
      navigate(-1);
    }
  };

  const updateTaskStatus = (newStatus) => {
    const allTask = JSON.parse(localStorage.getItem("tasksData"));
    for (let id in allTask) {
      if (id === taskId.taskId) {
        allTask[id].status = newStatus;
        localStorage.setItem("tasksData", JSON.stringify(allTask));
      }
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center pt-10 pb-5">{title}</h1>
      <p className="text-center">
        <span className="font-semibold">Task Description:</span>
        {description}
      </p>
      <p className="text-center mt-2">
        <span className="font-semibold">Total assigned members:</span>{" "}
        {members?.length}
      </p>
      {taskMembers && (
        <div className="overflow-x-scroll lg:overflow-x-auto my-10">
          <table className="table w-[90%]  mx-auto">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>View Profile</th>
              </tr>
            </thead>
            <tbody>
              {taskMembers?.map((member, i) => (
                <MemberRow key={i} i={i} member={member}></MemberRow>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="text-center space-x-4">
        <Link to={`/assign-member/${teamId}/${taskId.taskId}`}>
          <button
            className="btn bg-[#2B3440] text-white hover:bg-[#0218179c] normal-case"
            disabled={status === "Completed"}
          >
            Assign a member
          </button>
        </Link>
        {/* Disable the both the buttons if the task is already completed */}
        <button
          className="btn bg-[#2B3440] text-white hover:bg-[#0218179c] normal-case"
          onClick={handleMarkCompleted}
          disabled={status === "Completed"}
        >
          Mark As Completed
        </button>
      </div>
    </div>
  );
};

export default SingleTask;
