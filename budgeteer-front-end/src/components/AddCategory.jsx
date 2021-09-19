import React, { Component } from "react";
import { TextField, Box, Button } from "@mui/material";

export default class AddCategory extends Component {
  state = { name: "" };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleAddCategory(this.state.name);
    this.props.closeAdd();
    this.setState({ name: "" });
  };

  render() {
    return (
      <Box
        component="form"
        onSubmit={this.handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          "& .MuiTextField-root": { marginTop: 3, marginBottom: 1 },
        }}
      >
        <TextField
          fullWidth
          type="text"
          name="name"
          label="Category Name"
          variant="outlined"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <Button fullWidth variant="contained" type="submit">
          Create
        </Button>
      </Box>
    );
  }
}
