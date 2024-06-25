import React from "react";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
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
const AttachFile = ({ title, placeHolder = "", btnLable }) => {
  return (
    <div className="space-y-3 w-full ">
      <Typography>{title}</Typography>
      <TextField
        size="small"
        fullWidth
        placeholder={placeHolder}
        type="text"
        id={"text"}
        variant="outlined"
      />

      <Button
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

      <div className="flex item-center  gap-2 flex-row w-6/12">
        <Button
          variant="contained"
          fullWidth
          style={{
            textTransform: "capitalize",
          }}
        >
          {btnLable}
        </Button>{" "}
        <Button
          fullWidth
          variant="outlined"
          style={{
            textTransform: "capitalize",
          }}
        >
          cancel
        </Button>
      </div>
    </div>
  );
};

export default AttachFile;
