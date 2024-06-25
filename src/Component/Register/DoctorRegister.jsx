import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import CreateAnAccount from "../DoctorSignUpForms/CreateAnAccount";
import AddLicenseIAndnsurance from "../DoctorSignUpForms/AddLicenseIAndnsurance";
import EmailVrification from "../DoctorSignUpForms/EmailVrification";
import useMultistepform from "../../hooks/useMultistepform";
import { Button } from "@mui/material";
import Congratulations from "../DoctorSignUpForms/Congratulations";
const DoctorRegister = () => {
  const handleNext = () => {
    next();
  };
  const handleBack = () => {
    back();
  };
  const { steps, currentStepIndex, step, next, back } = useMultistepform([
    <CreateAnAccount handleNext={handleNext} />,
    <AddLicenseIAndnsurance handleNext={handleNext} />,
    <EmailVrification handleNext={handleNext} />,
    <Congratulations />,
  ]);

  return (
    <div className="flex flex-col items-center relative">
      <p className="text-lg font-bold absolute top-10 right-3">
        {currentStepIndex + 1}/{steps.length}
      </p>
      {currentStepIndex !== 0 ? (
        <div className="text-lg font-bold absolute top-0 left-3">
          <Button onClick={back} size="small" variant="outlined">
            back
          </Button>
        </div>
      ) : (
        ""
      )}

      <div>
        <Typography variant="h5" style={{ fontWeight: 700, marginBottom: 50 }}>
          Make Your Doctor Account
        </Typography>
      </div>
      <FormControl>
        {/* <CreateAnAccount /> */}
        {/* <AddLicenseIAndnsurance /> */}
        {/* <EmailVrification /> */}
        {step}
      </FormControl>
    </div>
  );
};

export default DoctorRegister;
