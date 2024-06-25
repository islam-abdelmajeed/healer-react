import { Button } from "@mui/material";
import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SecurityIcon from "@mui/icons-material/Security";
import BadgeIcon from "@mui/icons-material/Badge";
const ProfileNavigation = () => {
  return (
    <div className="w-fit border   rounded-md h-[350px]  shadow-md">
      <div
        className=" text-white rounded-t-md py-2 px-4  "
        style={{ backgroundColor: "#1EA384" }}
      >
        {/* add seting icon */}
        <Button
          style={{
            display: "flex",
            gap: "10px",
            color: "white",
            textTransform: "capitalize",
            fontWeight: 700,
          }}
        >
          <SettingsIcon fontSize="large" />
          personal Setings
        </Button>{" "}
      </div>
      <div className="px-4 py-4">
        <nav className="flex  flex-col items-start ">
          <Button
            color="primary"
            sx={{
              display: "flex",
              gap: "10px",
              color: "primary",
              textTransform: "capitalize",
              fontWeight: 700,
            }}
          >
            <InfoIcon size="large" />
            personal information
          </Button>
          <Button
            color="primary"
            sx={{
              display: "flex",
              gap: "10px",
              color: "primary",
              textTransform: "capitalize",
              fontWeight: 700,
            }}
          >
            <NotificationsIcon size="large" />
            Notifications{" "}
          </Button>
          <Button
            color="primary"
            sx={{
              display: "flex",
              gap: "10px",
              color: "primary",
              textTransform: "capitalize",
              fontWeight: 700,
            }}
          >
            <SecurityIcon size="large" />
            Login&Security{" "}
          </Button>
          <Button
            color="primary"
            sx={{
              display: "flex",
              gap: "10px",
              color: "primary",
              textTransform: "capitalize",
              fontWeight: 700,
            }}
          >
            <BadgeIcon size="large" />
            Doctor License{" "}
          </Button>
        </nav>
      </div>
    </div>
  );
};

export default ProfileNavigation;
