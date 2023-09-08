import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TaskRow = (props) => {
  const [task, setTask] = useState();
  const taskID = props.task;
  const i = props.i;

  return (
    <tr>
      <td>{i + 1}</td>
      <td>{task?.adminName}</td>
      <td>{task?.name}</td>
      <td>{task?.members ? task?.members?.length : 0}</td>

      <td>
        <Link to={`/task-details/${task?._id}`}>
          <button className="btn bg-[#021817] text-white hover:bg-[#0218179c] normal-case btn-sm">
            View Details
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default TaskRow;
