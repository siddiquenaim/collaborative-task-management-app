import { useContext } from "react";
import uuid from "react-uuid";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const CreateTeam = () => {
  {
    document.title = "Create Team | TaskTracker";
  }
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCreateTeam = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const adminName = form.adminName.value;
    const adminEmail = form.adminEmail.value;
    const details = form.details.value;
    const teamId = uuid();

    const TeamInfo = {
      teamId,
      name,
      image,
      adminName,
      adminEmail,
      details,
      members: [user?.email],
      totalTask: 0,
      taskIds: [],
    };

    saveTeamDataToLocalStorage(teamId, TeamInfo);

    Swal.fire({
      icon: "success",
      title: "Your Team has been created!",
      showConfirmButton: true,
      timer: 1500,
    });
    navigate("/");
    form.reset();
  };

  //   Function to save team data to local storage
  const saveTeamDataToLocalStorage = (teamId, teamData) => {
    // Retrieve existing teams data from local storage
    const teamsData = JSON.parse(localStorage.getItem("teamsData")) || {};

    // Add the new team data to the existing data
    teamsData[teamId] = teamData;

    // Update the local storage with the updated teams data
    localStorage.setItem("teamsData", JSON.stringify(teamsData));

    // Add the team ID to the user's createdTeams array
    updateUserCreatedTeams(user?.uid, teamId);
  };

  const updateUserCreatedTeams = (userId, teamId) => {
    const usersData = JSON.parse(localStorage.getItem("usersData")) || {};
    // Check if the user exists in the data structure
    if (usersData[userId]) {
      usersData[userId].createdTeams.push(teamId);
      localStorage.setItem("usersData", JSON.stringify(usersData));
    } else {
      console.error("User not found:", userId);
    }
  };

  return (
    <div className="mb-20 mt-10 w-[90%] mx-auto">
      <div>
        <h1 className="text-3xl text-center font-bold">Create a Team</h1>
        <div className="my-5">
          <form onSubmit={handleCreateTeam} className="w-[95%] mx-auto grid">
            <div className="form-control w-[100%] col-span-2">
              <label className="label">
                <span className="label-text font-bold">Team Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Team Name"
                className="input input-bordered w-[90%]"
                required
              />
            </div>
            <div className="form-control w-[100%] col-span-2">
              <label className="label">
                <span className="label-text font-bold">Cover Image URL</span>
              </label>
              <input
                name="image"
                type="text"
                placeholder="Cover Image URL"
                className="input input-bordered w-[90%]"
                required
              />
            </div>
            <div className="form-control w-[100%] col-span-2">
              <label className="label">
                <span className="label-text font-bold">Admin Name</span>
              </label>
              <input
                name="adminName"
                type="text"
                placeholder="Admin Name"
                value={user?.displayName}
                className="input input-bordered w-[90%]"
                readOnly
              />
            </div>
            <div className="form-control w-[100%] col-span-2">
              <label className="label">
                <span className="label-text font-bold">Admin Email</span>
              </label>
              <input
                name="adminEmail"
                type="email"
                placeholder="Admin Email"
                className="input input-bordered w-[90%]"
                value={user?.email}
                readOnly
              />
            </div>

            <div className="form-control w-[100%] col-span-2">
              <label className="label">
                <span className="label-text font-bold">Detail Description</span>
              </label>
              <input
                name="details"
                type="text"
                placeholder="Detail Description"
                className="input input-bordered input-lg w-[90%]"
              />
            </div>
            <div className="form-control mx-auto col-span-2 mt-4">
              <input
                className="cursor-pointer btn bg-[#021817] text-white hover:bg-[#0218179c] normal-case"
                type="submit"
                value="Create a Team"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTeam;
