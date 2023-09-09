import React from "react";
import useMemberProfile from "../../hooks/useMemberProfile";
import { useParams } from "react-router-dom";

const MemberProfile = () => {
  const { userId } = useParams();
  const { getMemberProfile } = useMemberProfile();
  const userProfile = getMemberProfile(userId);

  console.log(userId, getMemberProfile, userProfile);

  return (
    <div className="my-20">
      <div className="flex justify-center">
        <div className="avatar">
          <div className="w-36 rounded-full">
            <img src={userProfile?.photo} />
          </div>
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-bold my-5">{userProfile?.name}</h3>
        <p className="lg:w-[50%] mx-auto">&#34;{userProfile?.bio}&#34;</p>
      </div>
    </div>
  );
};

export default MemberProfile;
