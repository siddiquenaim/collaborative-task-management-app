import React from "react";
import useSingleTaskData from "../../hooks/useSingleTaskData";
import { Link, useParams } from "react-router-dom";
import MemberRow from "./MemberRow";
import useTaskMembers from "../../hooks/useTaskMembers";

const SingleTask = () => {
  const taskId = useParams();
  const { task } = useSingleTaskData(taskId);
  const { title, description, dueDate, priority, status, members } = task;
  const { taskMembers } = useTaskMembers(members);

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-10 mb-5">{title}</h1>
      <p className="text-center">{description}</p>
      <p className="text-center">Total assigned members: {members?.length}</p>
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
      <div className=" text-center">
        {" "}
        <Link to={`/assign-member/${taskId}`}>
          {" "}
          <button className="btn">Assign a member</button>
        </Link>
      </div>
    </div>
  );
};

export default SingleTask;
