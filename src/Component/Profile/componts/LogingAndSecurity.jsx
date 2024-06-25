import { Button, TextField, Typography } from "@mui/material";
import MuiPhoneNumber from "mui-phone-number";
import React from "react";

const LogingAndSecurity = () => {
  return (
    <div
      style={{ backgroundColor: "#f1f9f9" }}
      className="flex-1 border rounded-md  shadow-md"
    >
      <div className="flex flex-row items-center justify-between p-10  border-b">
        <div className="flex flex-row items-center ">
          <p className="text-xl font-semibold">loging</p>
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
      {/* password  */}
      <form action="">
        <div className="flex  flex-col  p-10 gap-1 border-b">
          <p className="text-md font-semibold">Password</p>
          <p className="text-lg font-semibold mb-2 ">
            Enter Your curent password
          </p>
          <div className=" mb-2">
            <TextField
              placeholder="password"
              size="small"
              sx={{
                backgroundColor: "white",
                color: "black",
                padding: "1px 2px",
              }}
              type="text"
              id={"text"}
              variant="outlined"
            />
            <p className="underline text-neutral-500">forget password</p>
          </div>
          <div className="space-y-5 w-full">
            <div className="space-y-2 ">
              {" "}
              <Typography style={{ fontWeight: 700 }}>
                {" "}
                Create a new password
              </Typography>
              <TextField
                placeholder="password"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  padding: "1px 2px",
                }}
                size="small"
                type="text"
                id="email"
                variant="outlined"
              />
            </div>
            <div className="space-y-5 w-full">
              {" "}
              <Typography style={{ fontWeight: 700 }}>
                Confirm new password
              </Typography>
              <TextField
                placeholder="password"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  padding: "1px 2px",
                }}
                size="small"
                type="text"
                id="email"
                variant="outlined"
              />
            </div>

            <div>
              <p className="text-xs text-neutral-500">
                * Use atleast 8 characters
              </p>
              <p className="text-xs text-neutral-500">* Use letters</p>
              <p className="text-xs text-neutral-500">* Use numbers</p>
              <p className="text-xs text-neutral-500">
                * Use special characters,like @#$%&*
              </p>
            </div>

            <Button
              size="small"
              variant="contained"
              style={{
                textTransform: "capitalize",
              }}
            >
              save{" "}
            </Button>
          </div>
          <form action="" className="space-y-2"></form>
        </div>
      </form>
      {/* coneccted accounts */}
      <div className="flex  flex-col  p-10  border-b ">
        <div className="flex flex-row justify-between items-center">
          <p className="text-xl font-semibold">coneccted accounts</p>
          <p className="underline">edit</p>
        </div>
        <p className="text-neutral-500 text-sm"> conected with google</p>
      </div>
      {/* phone mumber */}
      <div className="flex  flex-col  p-10 border-b">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col">
            <p className="text-xl font-semibold">security</p>
            <p className=" text-md font-semibold  ">phone number</p>
          </div>
          <p className="underline">edit</p>
        </div>

        <form action="" className="">
          <div className="flex flex-col w-full space-y-2  ">
            <MuiPhoneNumber
              size="small"
              fullWidth
              value={"59755185"}
              disabled
              style={{
                backgroundColor: "white",
                color: "black",
              }}
              variant="outlined"
              defaultCountry="sa"
            />
            <Button
              variant="contained"
              style={{
                textTransform: "capitalize",
                width: "100px",
              }}
            >
              save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogingAndSecurity;
