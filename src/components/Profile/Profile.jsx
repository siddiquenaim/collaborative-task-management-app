import useUserData from "../../hooks/useUserData";

const Profile = () => {
  const { getUserData } = useUserData();

  const userData = getUserData();

  return (
    <div className="py-20">
      <div className="flex justify-center">
        <div className="avatar online">
          <div className="w-36 rounded-full">
            <img src={userData?.photo} />
          </div>
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-bold my-5">{userData?.name}</h3>
        <p className="lg:w-[50%] mx-auto">&#34;{userData?.bio}&#34;</p>
      </div>
    </div>
  );
};

export default Profile;
