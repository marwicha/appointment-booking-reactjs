import React from "react";
import { Grid, Box, Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
const useStyles = makeStyles(({ palette, ...theme }) => ({
  media: {
    width: "85%",
    height: "385px",
  },

  p: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "1em",
    lineHeight: "25px",
    textAlign: "justify",
  },

  title: {
    fontFamily: "LEMON MILK",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "1.5em",
    color: "#384C5A",
    marginBottom: "3em",
  },

  btn: {
    color: "white",
    backgroundColor: "#4b9fbc",
    marginTop: "2em",
  },
}));

const FiveSection = () => {
  const classes = useStyles();

  return (
    <section className="section">
      <Container maxWidth="lg" className="container-formations">
        <Box pt={8} pb={10}>
          <Grid
            container
            spacing={2}
            textAlign="center"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} md={4}>
              <img
                alt=""
                className={classes.media}
                src="/assets/images/coaching/somato3.png"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" height="100%">
                <Box my="auto">
                  <h3 className={classes.title}>
                    Une séance de coaching avec patrick caillier
                  </h3>
                  <p className={classes.p}>
                    Un accompagnement de coaching personnalisé pour une
                    transformation puissante.
                    <br></br>
                    Un voyage en nature hors des sentiers battus, en communion
                    avec la nature et avec vous-même.
                    <br></br>
                    une détox téléphonique et numérique (Pas de réseau mobile
                    sur Cormont).
                  </p>
                  <h3 className={classes.title}>
                    N'attendez plus pour bénéficier de cette séance !
                  </h3>
                  <NavLink to="/inscription">
                    <Button className={classes.btn}> Réserver ici</Button>
                  </NavLink>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default FiveSection;
