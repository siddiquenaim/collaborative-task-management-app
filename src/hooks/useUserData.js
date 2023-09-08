import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider/AuthProvider";

const useUserData = () => {
  const { user } = useContext(AuthContext);

  // Function to retrieve user data from local storage
  const getUserDataFromLocalStorage = (userId) => {
    const usersData = JSON.parse(localStorage.getItem("usersData")) || {};
    return usersData[userId] || null;
  };

  // Retrieve and return user data
  const getUserData = () => {
    if (user) {
      return getUserDataFromLocalStorage(user.uid);
    }
    return null; // Return null if no user is logged in
  };

  return {
    getUserData,
  };
};

export default useUserData;
