import React from "react";
import { Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

const DisplayAlert = ({ show, message, handleClose }) => {
  const vertical = "top";
  const horizontal = "right";

  const handleClick = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    handleClose();
  };

  return (
    <div>
      {console.log(show)}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={show}
        onClose={handleClick}
        autoHideDuration={6000}
        key={vertical + horizontal}
      >
        <Alert
          style={{ marginRight: "195px", marginTop: "20px" }}
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
