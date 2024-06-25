import { Button, TextField } from "@mui/material";
import MuiPhoneNumber from "mui-phone-number";
import React from "react";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const DoctorLince = () => {
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  return (
    <div
      style={{ backgroundColor: "#f1f9f9" }}
      className="flex-1 border rounded-md  shadow-md"
    >
      <div className="flex flex-row items-center justify-between p-10  border-b">
        <div className="flex flex-row items-center gap-5">
          <p className="text-xl font-semibold">Doctor Linces</p>
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
      <div className="flex  flex-col  p-10 gap-5 border-b relative">
        <div className="flex flex-row justify-between items-center absolute top-3 right-8">
          <p className="text-xl font-semibold"></p>
          <p className="underline">edit</p>
        </div>
        <form action="" className="space-y-2">
          <div className="flex flex-row items-center  gap-5">
            <p className="text-neutral-500 text-md w-20 text-end">name</p>
            <TextField
              placeholder="abdo sadasdass"
              disabled
              size="small"
              sx={{
                backgroundColor: "white",
                width: "60%",
                color: "black",
                padding: "1px 2px",
              }}
              type="text"
              id={"text"}
              variant="outlined"
            />
          </div>
          <div className="flex flex-row items-center  gap-5">
            <p className="text-neutral-500 text-md text-end w-20">email</p>
            <TextField
              size="small"
              placeholder="abdo fared"
              disabled
              sx={{
                backgroundColor: "white",
                width: "60%",
                color: "black",
              }}
              type="text"
              id={"text"}
              variant="outlined"
            />
          </div>{" "}
          <div className="flex flex-row items-center  gap-5">
            <p className="text-neutral-500 text-md text-end w-20">birth date</p>
            <TextField
              size="small"
              placeholder="abdo fared"
              disabled
              sx={{
                backgroundColor: "white",
                width: "60%",
                color: "black",
              }}
              type="text"
              id={"text"}
              variant="outlined"
            />
          </div>{" "}
          <div className="flex flex-row items-center  gap-5">
            <p className="text-neutral-500 text-md text-end w-20">Area</p>
            <TextField
              size="small"
              placeholder="abdo fared"
              disabled
              sx={{
                backgroundColor: "white",
                width: "60%",
                color: "black",
              }}
              type="text"
              id={"text"}
              variant="outlined"
            />
          </div>{" "}
          <div className="flex flex-row items-center  gap-5">
            <p className="text-neutral-500 text-md text-end w-20">Area</p>
            <TextField
              size="small"
              placeholder="abdo fared"
              disabled
              sx={{
                backgroundColor: "white",
                width: "60%",
                color: "black",
              }}
              type="text"
              id={"text"}
              variant="outlined"
            />
          </div>{" "}
          <div className="flex flex-row items-center  gap-5">
            <p className="text-neutral-500 text-md text-end w-20">birth date</p>
            <Button
              size="small"
              component="label"
              role={undefined}
              style={{
                textTransform: "capitalize",
                width: "50%",

                color: "gray",
              }}
              color="secondary"
              variant="outlined"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Attach files
              <VisuallyHiddenInput type="file" />
            </Button>
          </div>{" "}
          <div className="flex flex-row items-center  gap-5">
            <p className="text-neutral-500 text-md text-end w-20"></p>
            <div className="space-x-2 w-6/12 flex flex-row items-center">
              <Button
                size="small"
                variant="contained"
                style={{
                  textTransform: "capitalize",
                  width: "50%",
                }}
              >
                save{" "}
              </Button>
              <Button
                size="small"
                variant="outlined"
                style={{
                  textTransform: "capitalize",
                  width: "50%",
                }}
              >
                cancel{" "}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DoctorLince;
