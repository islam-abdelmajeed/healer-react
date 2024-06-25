import {
  Button,
  FormControl,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const LoginV2 = () => {
  return (
    <div className="w-full">
      <FormControl
        style={{ width: "100%", padding: "0px 25px", marginTop: 20 }}
      >
        <div className="space-y-5 w-full">
          <Typography variant="body" fontSize={28} style={{ fontWeight: 700 }}>
            To log in, Enter your email address and password
          </Typography>

          <div className="space-y-10">
            <div className="space-y-2">
              <Typography style={{ fontWeight: 700 }}>Email Address</Typography>

              <TextField
                size="small"
                fullWidth
                placeholder="example@gmail.com"
                style={{ background: "lightgray" }}
                type="text"
                id="email"
                variant="outlined"
              />
            </div>
            <div className="space-y-2">
              <Typography style={{ fontWeight: 700 }}>Password</Typography>
              <TextField
                size="small"
                fullWidth
                type="text"
                id="email"
                variant="outlined"
              />{" "}
            </div>

            <div className="space-y-2">
              <Button
                size="small"
                fullWidth
                variant="contained"
                style={{
                  textTransform: "capitalize",
                }}
              >
                Login
              </Button>
              <Button
                fullWidth
                style={{ color: "black", textTransform: "capitalize" }}
              >
                New to Healer? Create an account{" "}
              </Button>
            </div>
          </div>
        </div>
      </FormControl>
    </div>
  );
};

export default LoginV2;
