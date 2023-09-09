import { Link } from "react-router-dom";

const TaskRow = ({ task, i, teamId }) => {
  const { taskId, title, description, dueDate, priority, status } = task;

  return (
    <tr>
      <td>{i + 1}</td>
      <td>{title}</td>
      <td>{description}</td>
      <td>{dueDate}</td>
      <td>{priority}</td>
      <td>{status}</td>
      <td>
        <Link to={`/task-details/${teamId}/${taskId}`}>
          <button className="btn bg-[#021817] text-white hover:bg-[#0218179c] normal-case btn-sm">
            View Details
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default TaskRow;
