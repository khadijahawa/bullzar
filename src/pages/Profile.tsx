import React from "react";
import {
  Advice,
  ClubNFTStake,
  UserStatus,
  TreasurePass,
  Extras2,
  MyCampaigns,
} from "../components";

const Profile = () => {
  return (
    <div>
      <Extras2 />
      <hr />
      <TreasurePass />
      <Advice />
      <UserStatus />
      <ClubNFTStake />
      <MyCampaigns />
    </div>
  );
};

export default Profile;
