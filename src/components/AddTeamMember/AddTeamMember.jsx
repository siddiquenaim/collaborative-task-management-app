import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const AddTeamMember = () => {
  const { teamId } = useParams();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  let allTeams = JSON.parse(localStorage.getItem("teamsData"));
  const handleAddMember = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    if (userExists(email) && !allTeams[teamId].members.includes(email)) {
      allTeams[teamId].members.push(email);
      localStorage.setItem("teamsData", JSON.stringify(allTeams));
      Swal.fire({
        icon: "success",
        title: "User Added Successfully",
        showConfirmButton: true,
        timer: 1500,
      });
      navigate(-1);
      form.reset();
    } else if (allTeams[teamId].members.includes(email)) {
      setError("User is already in the team");
    } else {
      setError("User doesn't exist.");
    }
  };

  const userExists = (email) => {
    const usersData = JSON.parse(localStorage.getItem("usersData")) || {};

    // Check if the user with the provided email exists in the data
    for (const userId in usersData) {
      if (usersData.hasOwnProperty(userId)) {
        const userData = usersData[userId];
        if (userData.email === email) {
          return true;
        }
      }
    }

    return false;
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center pt-10 pb-5">
        Add team member
      </h1>
      <div className="flex justify-center pt-10">
        <form onSubmit={handleAddMember} className="join">
          <input
            className="input input-bordered join-item"
            placeholder="Email"
            name="email"
            type="email"
          />
          <button className="btn join-item rounded-r-full">Add Member</button>
        </form>
      </div>
      {error && <p className="text-center mt-4 text-red-600">{error}</p>}
    </div>
  );
};

export default AddTeamMember;
