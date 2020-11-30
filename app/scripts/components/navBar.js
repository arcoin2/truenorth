import { Grid } from "@material-ui/core";
import React from "react";

const NavBar = () => {
  return (
    <div className="navBar">
      <Grid item container xs={12}>
        <Grid item container xs={1}></Grid>
        <Grid item container xs={3}>
          <img src="/img/logo.png" className="logo" />
        </Grid>
      </Grid>
    </div>
  );
};

export default NavBar;
