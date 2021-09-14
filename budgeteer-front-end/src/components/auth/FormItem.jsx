import React from "react";
import { TextField, Grid } from "@material-ui/core";

const FormItem = (props) => {
  const { Icon, handleChange, name, type, value, placeholder } = props;

  return (
    <Grid container alignItems="flex-end">
      <Grid item xs={1}>
        {console.log(Icon)}
        <Icon style={{ marginBottom: "10px" }} fontSize="large" />
      </Grid>
      <Grid item xs={11}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id={name}
          label={placeholder}
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
        />
      </Grid>
    </Grid>
  );
};

export default FormItem;
