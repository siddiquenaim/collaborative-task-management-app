import React from "react";
import useUserData from "../../hooks/useUserData";
import { Link } from "react-router-dom";

const Team = () => {
  const { getUserData } = useUserData();

  const userData = getUserData();

  console.log(userData?.createdTeams);

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mt-10 mb-5">Your Team</h2>
      {userData?.createdTeams?.length === 0 ? (
        <div className="text-center space-y-2">
          <p>You haven&apos;t created a team yet.</p>
          <Link to="/create-team">
            <button className="btn">Create Team</button>
          </Link>
        </div>
      ) : (
        <p>Team Data here</p>
      )}
    </div>
  );
};

export default Team;
