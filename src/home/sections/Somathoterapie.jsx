import React from "react";
import { Grid, Box, Container, Button, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  buttonAction: {
    marginRight: theme.spacing(2),
    color: "white",
    backgroundColor: "#4b9fbc",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(2),
    },
  },

  img: {
    maxWidth: "65%",
  },
}));

const Somathoterapie = () => {
  const classes = useStyles();

  return (
    <section className="section">
      <Container maxWidth="lg">
        <Box pt={4} pb={4}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Box display="flex" height="80%">
                <Box my="auto">
                  <Container maxWidth="md">
                    <Typography
                      variant="h5"
                      component="h5"
                      color="second"
                      mt={4}
                    >
                      {" "}
                      Somathotérapie{" "}
                    </Typography>

                    <Box mt={8}>
                      <p>
                        C’est une pratique qui instaure une relation d’aide par
                        un toucher psycho-corporel.
                        <br></br>
                        <br></br>
                        Le praticien prend en compte vos ressentis corporels et
                        permet de replacer votre corps au centre de votre
                        attention.
                        <br></br>
                        <br></br>
                        Cette approche vous invite à entrer en contact avec ce
                        que vous ressentez, avec votre vécu corporel et
                        intérieur de la situation que vous vivez.
                      </p>
                    </Box>

                    <Box mt={6}>
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.buttonAction}
                      >
                        <NavLink to="/somatotherapie">En savoir plus</NavLink>
                      </Button>
                    </Box>
                  </Container>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                src="./assets/images/somato.png"
                alt=""
                className={classes.img}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default Somathoterapie;
