import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Form, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions";

const AddUser = () => {
  let dispatch = useDispatch();

  const [state, setState] = useState({
    name: "",
    email: "",
    address: "",
    contact: "",
  });
  const [error, setError] = useState("");
  const { name, email, address, contact } = state;

  const handleinputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    if (!name || !address || !contact || !email) {
      setError("Please provide all the required fields");
    } else {
      dispatch(addUser(state));
      navigate("/");
      setError("");
    }
  };
  const navigate = useNavigate();
  return (
    <div>
      <Button
        style={{ width: "100px", marginTop: "20px" }}
        variant="contained"
        color="secondary"
        onClick={() => navigate("/")}
      >
        GO BACK
      </Button>
      <h1>ADD USER</h1>
      {error && <h3 style={{color:"red"}}>{error}</h3>}
      <Box
        marginTop={"100px"}
        onSubmit={handlesubmit}
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
          name="name"
          type="text"
          variant="standard"
          onChange={handleinputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Email"
          value={email}
          name="email"
          type="email"
          variant="standard"
          onChange={handleinputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Address"
          value={address}
          name="address"
          type="text"
          variant="standard"
          onChange={handleinputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Contact"
          value={contact}
          name="contact"
          type="number"
          variant="standard"
          onChange={handleinputChange}
        />
        <br />
        <Button
          style={{ width: "100px" }}
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
