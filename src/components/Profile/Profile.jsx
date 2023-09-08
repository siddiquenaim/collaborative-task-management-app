import useUserData from "../../hooks/useUserData";

const Profile = () => {
  const { getUserData } = useUserData();

  const userData = getUserData();
  console.log(userData);

  return (
    <div>
      <h1>User profile</h1>
    </div>
  );
};

export default Profile;
