import React from "react";
import { Grid, TextField, Box } from "@material-ui/core";
import ContactMap1 from "./ContactMap1";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  button: {
    fontSize: 14,
    fontFamily: theme.typography.fontFamily,
    backgroundColor: `${palette.second}`,
    color: "white"
  }

}));

const Contact = () => {

  const classes = useStyles();
  
  return (
    <section className="section" id="contact">
      <div className="container text-center">
        <h1 className="mt-0 mb-16 font-normal text-28 mx-auto">
          Contactez nous
        </h1>
        <Grid container spacing={3}>
          <Grid item md={6} sm={6} xs={12}>
            <ContactMap1
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div className="h-full" />}
              containerElement={<div className="h-full" />}
              mapElement={<div className="h-full" />}
            />
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            <div className="py-10 px-6" elevation={3}>
              <form>
                <TextField
                  color="second"
                  className="mb-4"
                  label="Prénom"
                  size="small"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  className="mb-4"
                  label="Email"
                  size="small"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  className="mb-4"
                  label="Message"
                  size="small"
                  multiline
                  rows={8}
                  variant="outlined"
                  fullWidth
                />

                <Box className={clsx(
                  "p-4 w-full",
                  classes.button
                )}> 
                  Envoyer
                </Box>

              </form>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Contact;
