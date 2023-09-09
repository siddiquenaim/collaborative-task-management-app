import React, { useEffect, useState } from "react";
import useUserData from "../../hooks/useUserData";
import { Link } from "react-router-dom";
import useTeamData from "../../hooks/useTeamData";

const Team = () => {
  const { getUserData } = useUserData();

  const userData = getUserData();

  const teamId = userData?.createdTeams[0];
  const { team } = useTeamData(teamId);

  console.log(team);

  return (
    <div>
      <h2 className="text-3xl font-bold text-center pt-10 pb-5">Your Team</h2>
      {userData?.createdTeams?.length === 0 ? (
        <div className="text-center space-y-2">
          <p>You haven&apos;t created a team yet.</p>
          <Link to="/create-team">
            <button className="my-3 btn bg-[#2B3440] text-white hover:bg-[#0218179c] normal-case">
              Create Team
            </button>
          </Link>
        </div>
      ) : (
        <div className="pt-10 lg:flex">
          <div className="lg:w-[50%] mx-auto">
            <img
              src={team?.image}
              className="h-[300px] w-[500px] mx-auto rounded-sm"
              alt=""
            />
          </div>
          <div className="flex justify-center items-center lg:w-[50%] mx-auto">
            <div className="mx-auto mt-5 text-lg space-y-2 lg:text-start">
              <p>
                <span className="font-semibold">Admin Name:</span>{" "}
                {team?.adminName}
              </p>
              <p>
                {" "}
                <span className="font-semibold">Admin Email:</span>{" "}
                {team?.adminEmail}
              </p>
              <p>
                <span className="font-semibold">Total Member:</span>{" "}
                {team?.members ? (
                  <span>{team?.members.length}</span>
                ) : (
                  <span>0</span>
                )}
              </p>
              <p>
                <span className="font-semibold">Total Tasks:</span>{" "}
                {team?.taskIds ? team?.taskIds?.length : 0}
              </p>
              <Link to={`/visit-team/${team?.teamId}`}>
                <button className="btn bg-[#2B3440] text-white hover:bg-[#0218179c] mt-5">
                  Visit Team
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;
