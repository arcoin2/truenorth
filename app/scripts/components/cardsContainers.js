import { Grid } from "@material-ui/core";
import React, { useState } from "react";

import Card from "./card";

const CardsContainers = (props) => {
  const listItems = props.selectedCountries.map((number) => <li>{number}</li>);

  return (
    <div className="cardsContainer mt-5">
      <Grid item container >
        {props.selectedCountries.map((country) => (
          <Grid item container xs={12} sm={6} md={4}  direction="row" justify="center" alignItems="center">
            <Card country={country}> </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CardsContainers;

//<Card listItems={listItems}></Card>
