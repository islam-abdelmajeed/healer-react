import React from "react";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";

import Checkbox from "@mui/material/Checkbox";
import AttachFile from "./componets/AttachFile";

const AddLicenseIAndnsurance = ({ handleNext }) => {
  return (
    <div className="space-y-5">
      <Typography variant="body" fontSize={20} style={{ fontWeight: 700 }}>
        Add license & Insurance
      </Typography>
      <div className="space-y-5">
        <AttachFile title={"Add insurance name"} btnLable={"Add Insurance"} />
        <AttachFile
          title={"Add  iicense"}
          btnLable={"Add  license"}
          placeHolder={"ID number"}
        />
        <div className="flex flex-row items-start">
          <Checkbox />
          <p className="text-md ">
            I have read and accept Healer Terms of Use and I consent to Healer
            collecting data, including sensitive information such as health data
            (as fully described in the{" "}
            <span className="underline">Privacy Policy</span> )
          </p>
        </div>
        <Button
          fullWidth
          size="small"
          onClick={handleNext}
          variant="contained"
          style={{
            textTransform: "capitalize",
          }}
        >
          Send verification text
        </Button>
        <p className="text-sm text-neutral-500 text-center">
          By clicking &quot;Send verification text&quot; you agree to receive
          account updates and appointment reminders via text from Healer.
          Message frequency varies. Reply STOP to cancel or HELP for
          help.Message and data rates may apply.
        </p>
        <Button
          fullWidth
          style={{ color: "black", textTransform: "capitalize" }}
        >
          Continue with password instead
        </Button>
      </div>
    </div>
  );
};

export default AddLicenseIAndnsurance;
