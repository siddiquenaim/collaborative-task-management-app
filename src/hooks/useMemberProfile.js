const useMemberProfile = () => {
  // Function to retrieve user data from local storage by userId
  const getUserDataFromLocalStorage = (userId) => {
    const usersData = JSON.parse(localStorage.getItem("usersData")) || {};
    for (let user in usersData) {
      if (usersData[user].userId === userId) {
        return usersData[user];
      }
    }
  };

  // Retrieve and return user data for the provided userId
  const getMemberProfile = (userId) => {
    if (userId) {
      return getUserDataFromLocalStorage(userId);
    }
    return null; // Return null if userId is not provided
  };

  return {
    getMemberProfile,
  };
};

export default useMemberProfile;
