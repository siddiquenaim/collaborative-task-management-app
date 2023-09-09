import { useEffect, useState } from "react";

const useSingleTaskData = ({ taskId }) => {
  const [task, setTask] = useState({});
  const allTasks = JSON.parse(localStorage.getItem("tasksData"));
  //   console.log(taskId);

  useEffect(() => {
    const fetchSingleTaskData = () => {
      for (let task in allTasks) {
        if (allTasks[task]?.taskId === taskId) {
          setTask(allTasks[task]);
        }
      }
    };

    fetchSingleTaskData();
  }, []);
  console.log(task);

  return { task };
};

export default useSingleTaskData;
