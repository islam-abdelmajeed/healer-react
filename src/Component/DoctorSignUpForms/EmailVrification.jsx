import { Button, FormControl, TextField, Typography } from "@mui/material";
import React from "react";

const EmailVrification = ({ handleNext }) => {
  return (
    <div className="">
      <Typography variant="body" fontSize={20} style={{ fontWeight: 700 }}>
        Enter the 6-digit code we sent to <br /> example@gmail.com
      </Typography>
      <div className="space-y-5 w-full">
        <Typography fontSize={15} style={{ fontWeight: 700 }}>
          To keep your account safe dont share this code with anyone
        </Typography>

        <TextField
          size="small"
          fullWidth
          placeholder="example@gmail.com"
          style={{ backgroundColor: "lightgray" }}
          type="text"
          id="email"
          variant="outlined"
        />
        <Typography style={{ fontWeight: 700 }}>
          Confirm new password
        </Typography>

        <TextField
          size="small"
          fullWidth
          type="text"
          id="email"
          variant="outlined"
        />
        <div className="space-y-2">
          <p className="text-sm">
            Didn't get an email? <span className="underline">Resend code</span>{" "}
          </p>
          <Button
            onClick={handleNext}
            fullWidth
            variant="contained"
            style={{
              textTransform: "capitalize",
            }}
          >
            save{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmailVrification;
