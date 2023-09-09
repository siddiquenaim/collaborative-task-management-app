import { useEffect, useState } from "react";

const useTaskData = (taskTeamId) => {
  const [tasks, setTasks] = useState([]);
  const allTasks = JSON.parse(localStorage.getItem("tasksData")) || {};

  useEffect(() => {
    const fetchTaskData = () => {
      const filteredTasks = Object.values(allTasks).filter(
        (task) => task.taskTeamId === taskTeamId
      );
      setTasks(filteredTasks);
    };

    fetchTaskData();
  }, []);

  return { tasks };
};

export default useTaskData;
