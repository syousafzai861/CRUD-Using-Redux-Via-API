import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Form } from "react-router-dom";
import { Button } from "@mui/material";

const AddUser = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    address: "",
    contact: "",
  });
  const { name, email, address, contact } = state;
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "45ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="Name"
          value={name}
          type="text"
          variant="standard"
        />
        <br />
        <TextField
          id="standard-basic"
          label="Email"
          value={email}
          type="email"
          variant="standard"
        />
        <br />
        <TextField
          id="standard-basic"
          label="Address"
          value={address}
          type="text"
          variant="standard"
        />
        <br />
        <TextField
          id="standard-basic"
          label="Contact"
          value={contact}
          type="number"
          variant="standard"
        />
        <br />
        <Button
        style={{width: "100px"}}
          variant="contained"
          color="primary"
          type="submit"
    
        >
          SUBMIT
        </Button>
      </Box>
    </div>
  );
};

export default AddUser;
