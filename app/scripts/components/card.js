import { Button, Grid } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import React, { useEffect, useState } from "react";

import MiniSpinner from "./miniSpinner";

import loanRequestsService from "../services/loanRequests.service";

const card = (props) => {
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState();
  const [hours, setHours] = useState();
  const [longString, setLongString] = useState();
  const [error2, setError2] = useState();

  useEffect(() => {
    setLoading(true);
    loanRequestsService
      .getCountryDetails(props.country)
      .then((response) => {
        const str = response.data.datetime;
        if (str === undefined || null || "") {
          console.log("Response undefinded");
        } else {
          const dateAndHour = str.split("T");
          console.log(dateAndHour);
          setLongString(dateAndHour);
          console.log(longString);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  
  const map =
    longString !== undefined || null || "" ? (
      longString.map((string) => (
        <Grid item container xs={12} direction="row" justify="center" alignItems="center">
          {string}
        </Grid>
      ))
    ) : (
      <Grid item container xs={12} direction="row" justify="center" alignItems="center">
        <p>Hubo un error en el server</p>
      </Grid>
    );

  const showSpinnerorDiv = loading ? (
    <MiniSpinner />
  ) : (
    <Grid item container>
      <Grid item container xs={12} direction="row" justify="center" alignItems="center">
        <p>{props.country}</p>
      </Grid>
      <Grid item container xs={12}>
        {map}
      </Grid>
      <Grid item container xs={12}></Grid>
      <Grid item container xs={12} irection="row" justify="center" alignItems="center">
        <Button disabled variant="contained" color="primary" startIcon={<DeleteIcon />} className="width70 deleteButton flexcenter">
          Delete
        </Button>
      </Grid>
    </Grid>
  );

  return (
    <>
      <div className="card">{showSpinnerorDiv}</div>
    </>
  );
};

export default card;

