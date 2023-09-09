const TeamRow = ({ team, i }) => {
  const { name, members, taskIds } = team;

  const allTask = JSON.parse(localStorage.getItem("tasksData"));
  let pendingTasks = [];
  for (let key in allTask) {
    if (
      taskIds?.includes(allTask[key].taskId) &&
      allTask[key].status === "pending"
    ) {
      pendingTasks.push(allTask[key]);
    }
  }
  const completedTask = taskIds?.length - pendingTasks?.length;

  return (
    <tr>
      <td>{i + 1}</td>
      <td>{name}</td>
      <td>{members?.length}</td>
      <td>{taskIds?.length}</td>
      <td>{pendingTasks?.length}</td>
      <td>{completedTask}</td>
    </tr>
  );
};

export default TeamRow;
