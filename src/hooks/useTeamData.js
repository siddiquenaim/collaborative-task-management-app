import { useEffect, useState } from "react";

const useTeamData = (teamId) => {
  const [team, setTeam] = useState({});
  const allTeams = JSON.parse(localStorage.getItem("teamsData")) || {};

  useEffect(() => {
    const fetchTeamData = () => {
      const selectedTeam = allTeams[teamId];
      if (selectedTeam) {
        setTeam(selectedTeam);
      }
    };

    fetchTeamData();
  }, []);

  return { team };
};

export default useTeamData;
