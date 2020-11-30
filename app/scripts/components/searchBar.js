import React, { useEffect, useState } from "react";

import loanRequestsService from "../services/loanRequests.service";
import Spinner from "./spinner";

import { Button, Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import SaveIcon from "@material-ui/icons/Save";

const SearchBar = (props) => {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState(null);

  const handleChange = (e) => {
    setCountry(e.target.textContent);
  };

  const addCountryToArray = () => {
    if ( country !== null || undefined || "" ) { props.setSelectedCountries([...props.selectedCountries, country]) } 
  };

  useEffect(() => {
    setLoading(true);
    loanRequestsService
      .getAllCountries()
      .then((response) => {
        setOptions(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        alert(error)
        setLoading(false);
      });
  }, []);

  const showSpinner = loading ? <Spinner /> : null;

  return (
    <>
      {showSpinner}
      <Grid container>
        <Grid item container xs={7} sm={8} md={8} lg={9}>
          <Autocomplete
            onChange={handleChange}
            className="searchBar"
            id="combo-box"
            options={options}
            clearOnBlur
            renderInput={(params) => <TextField {...params} label="Search" variant="outlined" />}
          />
        </Grid>
        <Grid item container xs={5} sm={4} md={4} lg={3}>
          <Grid item container xs={12} style={{ marginLeft: "15px" }}>
            <Button onClick={addCountryToArray} variant="contained" color="default" startIcon={<SaveIcon />} style={{ width: "100%" }}>
              Guardar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SearchBar;
