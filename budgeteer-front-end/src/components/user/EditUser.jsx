import React, { Component, Fragment } from "react";
import { TextField, Button } from "@mui/material";
import { connect } from "react-redux";
import { editUser } from "../../redux/user/userActions";

class EditUser extends Component {
  state = {
    [this.props.name]: this.props.value,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    this.props.closeEdit(`showEdit${this.props.name}`);
    const editUser = JSON.parse(JSON.stringify(this.props.user));
    editUser[this.props.name.toLowerCase()] = this.state[this.props.name];
    this.props.editUser(editUser);
  };

  render() {
    return (
      <Fragment>
        <TextField
          style={{ marginTop: 21, marginRight: 5 }}
          size="small"
          label={this.props.name}
          name={this.props.name}
          variant="outlined"
          value={this.state[this.props.name]}
          onChange={this.handleChange}
        />
        <Button
          style={{ marginRight: 5 }}
          variant="contained"
          type="submit"
          onClick={this.handleSubmit}
        >
          Edit
        </Button>
      </Fragment>
    );
  }
}

export default connect(null, { editUser })(EditUser);
