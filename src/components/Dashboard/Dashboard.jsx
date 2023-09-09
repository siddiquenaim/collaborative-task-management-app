import React from "react";
import { Link } from "react-router-dom";
import TeamRow from "./TeamRow";

const Dashboard = () => {
  const allTeams = JSON.parse(localStorage.getItem("teamsData"));
  const allTeamArray = [];
  for (let key in allTeams) {
    allTeamArray.push(allTeams[key]);
  }

  return (
    <div>
      {" "}
      <h1 className="text-2xl font-bold text-center mt-10 mb-5">
        Summary of All Teams
      </h1>
      {allTeamArray && (
        <div className="overflow-x-scroll lg:overflow-x-auto my-10">
          <table className="table w-[90%]  mx-auto">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Total Members</th>
                <th>Total Tasks</th>
                <th>Total Pending Task</th>
                <th>Total Completed Task</th>
              </tr>
            </thead>
            <tbody>
              {allTeamArray?.map((team, i) => (
                <TeamRow key={team.teamId} i={i} team={team}></TeamRow>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
