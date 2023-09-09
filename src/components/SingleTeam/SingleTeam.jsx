import { Link, useParams } from "react-router-dom";
import useTeamData from "../../hooks/useTeamData";
import TaskRow from "./TaskRow";
import useTaskData from "../../hooks/useTaskData";

const SingleTeam = () => {
  const { teamId } = useParams();
  const { team } = useTeamData(teamId);
  // const allTask = JSON.parse(localStorage.getItem("tasksData"));
  const { tasks } = useTaskData(teamId);
  console.log(tasks);

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-10 mb-5">
        Welcome to {team?.name}
      </h1>

      {tasks && (
        <div className="overflow-x-scroll lg:overflow-x-auto my-10">
          <table className="table w-[90%]  mx-auto">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Description</th>
                <th>Due Date</th>
                <th>Priority Level</th>
                <th>Status</th>
                <th>View Task</th>
              </tr>
            </thead>
            <tbody>
              {tasks?.map((task, i) => (
                <TaskRow key={i} i={i} task={task}></TaskRow>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className=" text-center">
        {" "}
        <Link to={`/create-task/${teamId}`}>
          {" "}
          <button className="btn">Create a task</button>
        </Link>
      </div>
    </div>
  );
};

export default SingleTeam;
