import React from "react";
import ProfileNavigation from "./componts/ProfileNavigation";
import PersonalInformation from "./componts/PersonalInformation";
import Notifications from "./componts/Notifications";
import LogingAndSecurity from "./componts/LogingAndSecurity";
import DoctorLince from "./componts/DoctorLince";

const Profile = () => {
  return (
    <div className="flex flex-row gap-5 w-full">
      {/* <ProfileNavigation /> */}
      {/* <PersonalInformation /> */}
      {/* <Notifications /> */}
      {/* <LogingAndSecurity /> */}
      <DoctorLince />
    </div>
  );
};

export default Profile;
