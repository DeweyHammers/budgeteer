import React from "react";
import { Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

const DisplayAlert = ({
  show,
  message,
  handleClose,
  vertical,
  horizontal,
  marginRight,
}) => {
  const handleClick = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    handleClose();
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={show}
        onClose={handleClick}
        autoHideDuration={6000}
        key={vertical + horizontal}
      >
        <Alert
          style={{ marginRight: marginRight, marginTop: "20px" }}
          variant="filled"
          onClose={handleClick}
          severity="error"
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default DisplayAlert;
