import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useTeamData from "../../hooks/useTeamData";

const SingleTeam = () => {
  const { teamId } = useParams();
  const { team } = useTeamData(teamId);
  console.log(team);

  return <div>This is a single Team: {team?.name} </div>;
};

export default SingleTeam;
