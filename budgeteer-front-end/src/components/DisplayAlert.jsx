import React, { Component } from "react";
import { Snackbar, Button } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

export default class DisplayAlert extends Component {
  state = { vertical: "top", horizontal: "right" };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.props.handleClose();
  };

  render() {
    const { vertical, horizontal } = this.state;
    const { show, message } = this.props;

    return (
      <div>
        {console.log(show)}
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={show}
          onClose={this.handleClose}
          autoHideDuration={6000}
          key={vertical + horizontal}
          action={
            <React.Fragment>
              <Button onClick={this.handleClose}></Button>
            </React.Fragment>
          }
        >
          <Alert
            style={{ marginRight: "195px", marginTop: "20px" }}
            variant="filled"
            onClose={this.handleClose}
            severity="error"
          >
            {message}
          </Alert>
        </Snackbar>
      </div>
    );
  }
}
