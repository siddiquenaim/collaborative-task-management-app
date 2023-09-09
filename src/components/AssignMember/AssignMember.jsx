import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useTeamData from "../../hooks/useTeamData";
import useTaskMembers from "../../hooks/useTaskMembers";

const AssignMember = () => {
  const [error, setError] = useState("");
  const { teamId } = useParams();
  const { team } = useTeamData(teamId);
  const { members } = team;
  const { taskMembers } = useTaskMembers(members);
  const handleAssignMember = () => {
    console.log(taskMembers);
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
