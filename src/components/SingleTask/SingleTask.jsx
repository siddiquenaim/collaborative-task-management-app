import React from "react";
import useSingleTaskData from "../../hooks/useSingleTaskData";
import { useParams } from "react-router-dom";

const SingleTask = () => {
  const taskId = useParams();
  const { task } = useSingleTaskData(taskId);
  console.log(task);
  const { title, description, dueDate, priority, status, members } = task;
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-10 mb-5">{title}</h1>
      <p className="text-center">{description}</p>
      <p className="text-center">Total assigned members: {members?.length}</p>
    </div>
  );
};

export default SingleTask;
