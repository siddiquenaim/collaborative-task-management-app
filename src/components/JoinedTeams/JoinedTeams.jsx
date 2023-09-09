import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const JoinedTeams = () => {
  const { user } = useContext(AuthContext);
  const allTeams = JSON.parse(localStorage.getItem("teamsData"));

  let userJoinedTeams = [];
  for (let id in allTeams) {
    if (allTeams[id]?.members?.includes(user.email)) {
      userJoinedTeams.push(allTeams[id]);
    }
  }

  console.log(userJoinedTeams);
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-2xl font-bold text-center my-10 ">Joined teams</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {userJoinedTeams.map((team) => (
          <div key={team.teamId} className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img
                src={team?.image}
                alt="Team picture"
                className="h-[250px] w-[300px]"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{team?.name}</h2>
              <p>Total Members: {team?.members?.length}</p>
              <div className="card-actions justify-end">
                <Link to={`/visit-team/${team?.teamId}`}>
                  <button className="btn bg-[#021817] text-white hover:bg-[#0218179c] normal-case">
                    View Team
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

export default JoinedTeams;
