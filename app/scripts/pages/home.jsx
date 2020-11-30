import { Grid } from "@material-ui/core";

import React, { useState } from "react";

import SearchBar from "../components/searchBar";
import CardContainer from "../components/cardsContainers";

const home = () => {

    const [selectedCountries, setSelectedCountries] = useState([])

  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center" className="mt-5">
        <Grid item container xs={1} md={2} lg={3}></Grid>

        <Grid item container xs={10} md={8} lg={6}>
          <Grid item container xs={12}>
            <SearchBar setSelectedCountries={setSelectedCountries} selectedCountries={selectedCountries} ></SearchBar>
          </Grid>

          <Grid item container xs={12}>
            <CardContainer setSelectedCountries={setSelectedCountries} selectedCountries={selectedCountries}></CardContainer>
          </Grid>
        </Grid>
        <Grid item container xs={1} md={2} lg={3}></Grid>
      </Grid>
    </>
  );
};

export default home;
