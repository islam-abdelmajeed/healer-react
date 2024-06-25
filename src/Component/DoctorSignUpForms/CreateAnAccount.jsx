import React from "react";
import Typography from "@mui/material/Typography";

import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import MuiPhoneNumber from "mui-phone-number";
import useMultistepform from "../../hooks/useMultistepform";
const CreateAnAccount = ({ handleNext }) => {
  const spacilaity = [
    {
      value: "Dentist",
      label: "Dentist",
    },
    {
      value: "Dermatologist",
      label: "Dermatologist",
    },
    {
      value: "Cardiologist",
      label: "Cardiologist",
    },
  ];
  return (
    <>
      <div className="space-y-5">
        <Typography variant="body" fontSize={20} style={{ fontWeight: 700 }}>
          Create an Account
        </Typography>
        <Stack>
          <Typography style={{ fontWeight: 700 }}>Email</Typography>

          <TextField
            size="small"
            fullWidth
            type="text"
            id="email"
            variant="outlined"
          />
        </Stack>

        <Stack direction={"row"} gap={3}>
          <div className="w-full">
            <Typography style={{ fontWeight: 700 }}>
              Legal first name
            </Typography>

            <TextField
              size="small"
              type="text"
              id="legal-first-name"
              variant="outlined"
              fullWidth
            />
          </div>
          <div className="w-full">
            <Typography style={{ fontWeight: 700 }}>Legal last name</Typography>

            <TextField
              size="small"
              type="text"
              id="legal-last-name"
              variant="outlined"
              fullWidth
            />
          </div>
        </Stack>
        <Stack>
          <Typography style={{ fontWeight: 700 }}>Date of birth</Typography>

          <TextField
            size="small"
            fullWidth
            type="date"
            id="email"
            variant="outlined"
          />
        </Stack>
        <Stack>
          <Typography style={{ fontWeight: 700 }}>Choose Spacialty</Typography>

          <TextField
            size="small"
            select
            fullWidth
            type="text"
            id="email"
            variant="outlined"
            defaultValue=""
            SelectProps={{
              native: true,
            }}
          >
            {spacilaity.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Stack>
        <Stack>
          <Typography style={{ fontWeight: 700 }}> Phone Number</Typography>
          <MuiPhoneNumber size="small" variant="outlined" defaultCountry="sa" />
        </Stack>
        <Stack>
          <Typography style={{ fontWeight: 700 }}> ZIP Code</Typography>

          <TextField
            size="small"
            fullWidth
            type="number"
            id="email"
            variant="outlined"
          />
        </Stack>
        <Stack>
          <Typography style={{ fontWeight: 700, marginBottom: 2 }}>
            {" "}
            Gender
          </Typography>
          <div className="border rounded-sm p-3">
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
                        fontSize: 18,
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
                        fontSize: 18,
                      },
                    }}
                  />
                }
                label="Male"
              />
            </RadioGroup>
          </div>
        </Stack>
        <Button
          onClick={handleNext}
          type="button"
          fullWidth
          variant="contained"
          style={{
            textTransform: "capitalize",
          }}
        >
          Continue
        </Button>
      </div>
      <div className="space-y-3 mt-3 ">
        <p className="text-sm text-center"> or</p>
        <p className="text-sm text-center text-neutral-500">
          Already have an account?
          <span className="underline">Login</span>
        </p>
      </div>
    </>
  );
};

export default CreateAnAccount;
