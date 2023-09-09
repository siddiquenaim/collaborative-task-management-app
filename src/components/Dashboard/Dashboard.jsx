import React from "react";

const Dashboard = () => {
  const allTeams = JSON.parse(localStorage.getItem("teamsData"));
  const allTeamArray = [];
  for (let key in allTeams) {
    allTeamArray.push(allTeams[key]);
  }

  console.log(allTeamArray);
  return (
    <div>
      {" "}
      <h1 className="text-2xl font-bold text-center mt-10 mb-5">
        Summary of All Teams
      </h1>
    </div>
  );
};

export default Dashboard;
