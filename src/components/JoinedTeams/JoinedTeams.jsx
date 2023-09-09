import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";

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
    <div>
      <h1>Joined teams here</h1>
      {userJoinedTeams.map((team) => (
        <p key={team.teamId}>{team.name}</p>
      ))}
    </div>
  );
};

export default JoinedTeams;
