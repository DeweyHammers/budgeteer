import React from "react";
import { Snackbar, IconButton } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import CheckIcon from "@mui/icons-material/Check";
import { connect } from "react-redux";
import { removeUser } from "../../redux/user/userActions";

const DisplayAlert = ({ show, handleClose, removeUser, user }) => {
  const vertical = "top";
  const horizontal = "center";

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
        key={vertical + horizontal}
      >
        <Alert
          style={{ marginTop: "20px" }}
          variant="filled"
          onClose={handleClick}
          severity="error"
        >
          Are you Sure?
          <IconButton
            style={{ marginLeft: 15 }}
            size="small"
            color="inherit"
            onClick={() => removeUser(user)}
          >
            <CheckIcon />
          </IconButton>
        </Alert>
      </Snackbar>
    </div>
  );
};

export default connect(null, { removeUser })(DisplayAlert);
