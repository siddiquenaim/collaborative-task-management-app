import { useEffect, useState } from "react";

const useTaskMembers = (memberEmails) => {
  const [taskMembers, setTaskMembers] = useState([]);
  const usersData = JSON.parse(localStorage.getItem("usersData"));

  useEffect(() => {
    const fetchTaskMembersData = () => {
      const membersData = [];

      // Loop through member emails and retrieve user information
      memberEmails?.forEach((email) => {
        for (let user in usersData) {
          if (usersData[user]?.email === email) {
            membersData.push(usersData[user]);
          }
        }
      });

      setTaskMembers(membersData);
    };

    fetchTaskMembersData();
  }, [memberEmails]);
  // console.log(taskMembers);

  return { taskMembers };
};

export default useTaskMembers;
