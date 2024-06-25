import { Button, FormControl, TextField, Typography } from "@mui/material";
import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
const Login = () => {
  return (
    <div className="w-full">
      <FormControl
        style={{ width: "100%", padding: "0px 25px", marginTop: 20 }}
      >
        <div className="space-y-5 w-full">
          <Typography variant="body" fontSize={28} style={{ fontWeight: 700 }}>
            To log in, Enter your email address{" "}
          </Typography>
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
          <Button
            fullWidth
            variant="contained"
            style={{
              textTransform: "capitalize",
            }}
          >
            Continue
          </Button>

          <div className="flex items-center justify-center flex-col space-y-2">
            <p>or</p>
            {/* add google and apple icons */}
            <Button
              size="small"
              sx={{ color: "gray" }}
              fullWidth
              variant="outlined"
            >
              Continue with Google
            </Button>
            <Button
              size="small"
              sx={{ color: "gray" }}
              fullWidth
              variant="outlined"
            >
              Continue with Apple
            </Button>
          </div>
          <Button
            size="small"
            fullWidth
            style={{ color: "gray", textTransform: "capitalize" }}
          >
            New to Healer? Create an account
          </Button>
        </div>
      </FormControl>
    </div>
  );
};

export default Login;
