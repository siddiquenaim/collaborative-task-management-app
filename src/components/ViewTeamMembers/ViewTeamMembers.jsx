import React from "react";
import { Link, useParams } from "react-router-dom";
import useTeamData from "../../hooks/useTeamData";
import useTaskMembers from "../../hooks/useTaskMembers";

const ViewTeamMembers = () => {
  const { teamId } = useParams();
  const { team } = useTeamData(teamId);
  const { members } = team;
  const { taskMembers } = useTaskMembers(members);
  console.log(taskMembers);

  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-2xl font-bold text-center my-10">Team Members</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {taskMembers?.map((user) => (
          <div
            key={user.userId}
            className="card w-full bg-base-100 shadow-xl rounded-sm"
          >
            <figure>
              <img
                src={user?.photo}
                alt="Team picture"
                className="h-[250px] w-[300px]"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{user?.name}</h2>

              <div className="card-actions justify-end">
                <Link to={`/user-details/${user?.userId}`}>
                  <button className="btn bg-[#2B3440] text-white hover:bg-[#0218179c] normal-case">
                    View Profile
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewTeamMembers;
