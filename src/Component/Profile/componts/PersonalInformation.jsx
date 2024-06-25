import React from "react";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import IconButton from "@mui/material/IconButton";
import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import MuiPhoneNumber from "mui-phone-number";

const PersonalInformation = () => {
  return (
    <div
      style={{ backgroundColor: "#f1f9f9" }}
      className="flex-1 border rounded-md  shadow-md"
    >
      <div className="flex flex-row items-center justify-between p-10  border-b">
        <div className="flex flex-row items-center gap-5">
          <div className="relative">
            <img
              className="rounder-full w-20 h-20"
              src="../../../Image Assets/img/doctors/doctor-ceo.png"
              alt="img"
            />
            <div className="absolute bottom-0 left-14">
              <IconButton aria-label="delete" color="primary">
                <AutoFixHighIcon color="primary" />
              </IconButton>
            </div>
          </div>
          <div>
            <p className="text-lg capitalize">username</p>
            <p className="text-md text-neutral-700">asdsadasdsad</p>
          </div>
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
        </Button>{" "}
      </div>
      {/* personal info */}
      <div className="flex  flex-col  p-10 gap-5 border-b">
        <div className="flex flex-row justify-between items-center">
          <p className="text-xl font-semibold">personal info</p>
          <p className="underline">edit</p>
        </div>
        <form action="" className="space-y-2">
          <div className="flex flex-row items-center  gap-14">
            <p className="text-neutral-500 text-md w-20">name</p>
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
          <div className="flex flex-row items-center  gap-14">
            <p className="text-neutral-500 text-md w-20">email</p>
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
          <div className="flex flex-row items-center  gap-14">
            <p className="text-neutral-500 text-md w-20">phone</p>

            <MuiPhoneNumber
              size="small"
              value={"59755185"}
              disabled
              style={{
                backgroundColor: "white",
                width: "60%",
                color: "black",
              }}
              variant="outlined"
              defaultCountry="sa"
            />
          </div>
          <div className="flex flex-row items-center  gap-14">
            <p className="text-neutral-500 text-md w-20">birth date</p>
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
          <div className="flex flex-row items-center  gap-14">
            <p className="text-neutral-500 text-md w-20">Area</p>
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
          <div className="flex flex-row items-center  gap-14">
            <p className="text-neutral-500 text-md w-20"></p>
            <div className="space-x-2">
              <Button
                variant="contained"
                style={{
                  textTransform: "capitalize",
                  width: "100px",
                }}
              >
                save{" "}
              </Button>
              <Button
                variant="outlined"
                style={{
                  textTransform: "capitalize",
                  width: "100px",
                }}
              >
                cancel{" "}
              </Button>
            </div>
          </div>
        </form>
      </div>
      {/* phone mumber */}
      <div className="flex  flex-col  p-10 gap-5 border-b">
        <div className="flex flex-row justify-between items-center">
          <p className="text-xl font-semibold">phone number</p>
          <p className="underline">edit</p>
        </div>

        <form action="" className="space-y-5">
          <div className="flex flex-row items-center  gap-14">
            <p className="text-neutral-500 text-md w-20">phone</p>

            <MuiPhoneNumber
              size="small"
              value={"59755185"}
              disabled
              style={{
                backgroundColor: "white",
                width: "60%",
                color: "black",
              }}
              variant="outlined"
              defaultCountry="sa"
            />
          </div>

          <div className="flex flex-row items-center  gap-14">
            <p className="text-neutral-500 text-md w-20"></p>
            <div className="space-x-2">
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
          </div>
        </form>
      </div>
      {/* email adres */}
      <div className="flex  flex-col  p-10  border-b ">
        <div className="flex flex-row justify-between items-center">
          <p className="text-xl font-semibold">email adress</p>
          <p className="underline">edit</p>
        </div>
        <div className="">
          <p className="text-neutral-500 text-sm"> gmail@gmail.cpm</p>
          <p className="text-neutral-500 text-sm">verfified</p>
        </div>
      </div>
      {/* click adress */}
      <div className="flex  flex-col  p-10  border-b">
        <div className="flex flex-row justify-between items-center">
          <p className="text-xl font-semibold">click adress</p>
          <p className="underline">edit</p>
        </div>
        <form action="" className="space-y-2">
          <div className="flex flex-row items-center  gap-14">
            <p className="text-neutral-500 text-md w-20"></p>
            <div className="w-7/12">
              <p className=" text-md">straet ADress </p>
              <TextField
                placeholder="abdo sadasdass"
                disabled
                size="small"
                sx={{
                  backgroundColor: "white",
                  width: "100%",
                  color: "black",
                  padding: "1px 2px",
                }}
                type="text"
                id={"text"}
                variant="outlined"
              />
            </div>
          </div>
          <div className="flex flex-row items-center  gap-14">
            <p className="text-neutral-500 text-md w-20"></p>
            <div className="w-7/12">
              <p className=" text-md">city </p>
              <div className="flex flex-row items-center justify-between w-full">
                <TextField
                  placeholder="abdo sadasdass"
                  disabled
                  size="small"
                  sx={{
                    backgroundColor: "white",
                    width: "45%",
                    color: "black",
                    padding: "1px 2px",
                  }}
                  type="text"
                  id={"text"}
                  variant="outlined"
                />
                <TextField
                  placeholder="abdo sadasdass"
                  disabled
                  size="small"
                  sx={{
                    backgroundColor: "white",
                    width: "45%",
                    color: "black",
                    padding: "1px 2px",
                  }}
                  type="text"
                  id={"text"}
                  variant="outlined"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center  gap-14">
            <p className="text-neutral-500 text-md w-20"></p>
            <div className="w-7/12">
              <p className=" text-md">zip code </p>
              <TextField
                placeholder="abdo sadasdass"
                disabled
                size="small"
                sx={{
                  backgroundColor: "white",
                  width: "100%",
                  color: "black",
                  padding: "1px 2px",
                }}
                type="text"
                id={"text"}
                variant="outlined"
              />
            </div>
          </div>

          <div className="flex flex-row items-center  gap-14">
            <p className="text-neutral-500 text-md w-20"></p>
            <div className="space-x-2">
              <Button
                variant="contained"
                style={{
                  textTransform: "capitalize",
                  width: "100px",
                }}
              >
                save{" "}
              </Button>
            </div>
          </div>
        </form>
      </div>
      <div className="flex  flex-col  p-10  border-b">
        <div className="flex flex-row justify-between items-center">
          <p className="text-xl font-semibold">Gender</p>
          <p className="underline">edit</p>
        </div>
        <form action="" className="space-y-2 px-5">
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={
                <Radio
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 25,
                    },
                  }}
                />
              }
              label="Female"
            />
            <FormControlLabel
              value="male"
              control={
                <Radio
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 25,
                    },
                  }}
                />
              }
              label="Male"
            />
          </RadioGroup>
        </form>
      </div>
    </div>
  );
};

export default PersonalInformation;
