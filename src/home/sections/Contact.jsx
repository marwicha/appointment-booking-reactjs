import React from "react";
import { Grid, TextField, Button, Icon } from "@material-ui/core";
import ContactMap1 from "./ContactMap1";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  button: {
    fontSize: 14,
    fontFamily: theme.typography.fontFamily,
    backgroundColor: `${palette.second}`,
    color: "white",
  },

  icon: {
    background: "#EBF0FF",
    borderRadius: "60px",
    marginRight: "8px",
    marginBottom: "-7px",
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <section className="section" id="contact">
      <div className="container text-center">
        <Grid
          container
          justify="center"
          alignItems="center"
        >
          <ContactMap1
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div className="h-full" />}
            containerElement={<div className="h-full" />}
            mapElement={<div className="h-full" />}
          />
        </Grid>
      </div>
    </section>
  );
};

export default Contact;
