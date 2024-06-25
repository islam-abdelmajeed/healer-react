import { Button, Checkbox } from "@mui/material";
import React from "react";

const Notifications = () => {
  return (
    <div
      style={{ backgroundColor: "#f1f9f9" }}
      className="flex-1 border rounded-md  shadow-md"
    >
      <div className="flex flex-row items-center justify-between p-10  border-b">
        <div className="flex flex-row items-center ">
          <p className="text-xl font-semibold">Notifications</p>
        </div>
        <Button
          variant="outlined"
          style={{
            textTransform: "capitalize",
            width: "100px",
            borderRadius: "25px",
          }}
        >
          setings{" "}
        </Button>
      </div>
      {/* personal info */}
      <div className="flex  flex-col  p-10 border-b">
        <p className="text-md font-semibold">Offer and update</p>
        <p className="text-lg font-semibold ">Email</p>
        <form action="" className="">
          <div className="flex flex-row items-start">
            <Checkbox sx={{ marginTop: "-5px" }} size="small" />
            <div className="flex flex-col items-start">
              <p className="text-md ">I have read and accept Healer Terms</p>
              <p className="text-xs text-neutral-500 ">
                I have read and accept Healer Terms
              </p>
            </div>
          </div>
          <div className="flex flex-row items-start">
            <Checkbox sx={{ marginTop: "-5px" }} size="small" />
            <div className="flex flex-col items-start">
              <p className="text-md ">I have read and accept Healer Terms</p>
              <p className="text-xs text-neutral-500 ">
                I have read and accept Healer Terms
              </p>
            </div>
          </div>
          <div className="flex flex-row items-start">
            <Checkbox sx={{ marginTop: "-5px" }} size="small" />
            <div className="flex flex-col items-start">
              <p className="text-md ">I have read and accept Healer Terms</p>
              <p className="text-xs text-neutral-500 ">
                I have read and accept Healer Terms
              </p>
            </div>
          </div>
          <div className="flex flex-row items-start">
            <Checkbox sx={{ marginTop: "-5px" }} size="small" />
            <div className="flex flex-col items-start">
              <p className="text-md ">I have read and accept Healer Terms</p>
              <p className="text-xs text-neutral-500 ">
                I have read and accept Healer Terms
              </p>
            </div>
          </div>
        </form>
        <div className="space-x-2 flex items-center flex-row mt-5">
          <Button
            variant="contained"
            style={{
              textTransform: "capitalize",
              width: "25%",
            }}
          >
            save{" "}
          </Button>
          <Button
            variant="outlined"
            style={{
              textTransform: "capitalize",
              width: "25%",
            }}
          >
            cancel{" "}
          </Button>
        </div>{" "}
      </div>
    </div>
  );
};

export default Notifications;
