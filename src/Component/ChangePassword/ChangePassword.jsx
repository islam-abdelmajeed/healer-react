import { Button, FormControl, TextField, Typography } from "@mui/material";
import React from "react";

const ChangePassword = () => {
  return (
    <div className="w-full">
      <Typography fontSize={28} style={{ fontWeight: 700 }}>
        Change a password
      </Typography>
      <FormControl style={{ width: "100%", marginTop: 20 }}>
        <div className="space-y-5 w-full">
          <Typography style={{ fontWeight: 700 }}>
            {" "}
            Create a new password
          </Typography>

          <TextField
            size="small"
            fullWidth
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
          <div>
            <p className="text-xs text-neutral-500">Use atleast 8 characters</p>
            <p className="text-xs text-neutral-500">Use letters</p>
            <p className="text-xs text-neutral-500">Use numbers</p>
            <p className="text-xs text-neutral-500">
              Use special characters,like @#$%&*
            </p>
          </div>

          <Button
            size="small"
            fullWidth
            variant="contained"
            style={{
              textTransform: "capitalize",
            }}
          >
            save{" "}
          </Button>
        </div>
      </FormControl>
    </div>
  );
};

export default ChangePassword;
