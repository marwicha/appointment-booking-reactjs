import React from "react";
import { Grid, Container, Box, Card } from "@material-ui/core";
import LooksTwoIcon from "@material-ui/icons/LooksTwo";
import LooksOneIcon from "@material-ui/icons/LooksOne";
import Looks3Icon from "@material-ui/icons/Looks3";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  icon: {
    marginBottom: theme.spacing(1),
  },

  p: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "22px",
    textAlign: "justify",
  },
}));

const FourSection = () => {
  const classes = useStyles();

  return (
    <section className="section">
      <Container maxWidth="lg">
        <Box py={6}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box textAlign="center">
                <LooksOneIcon
                  color="primary"
                  fontSize="large"
                  className={classes.icon}
                />
              </Box>

              <Box textAlign="left">
                <p className={classes.p}>
                  C’est dans un cadre bienveillant, efficace et respectueux de
                  votre personne, que nous abordons votre{" "}
                  <strong>parcours de vie</strong> (passé-présent), afin de
                  trouver ensemble la cohérence de votre projet futur.
                  <br></br>
                  <br></br>
                  Je vous aide aussi dans l’identification de vos points forts.
                  <br></br>
                  <br></br>
                  Grâce à l’interaction établie entre nous, vous vous fixer de
                  nouveaux objectifs clairs et précis en accord avec vos
                  valeurs.
                  <br></br>
                  <br></br>
                </p>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box textAlign="center">
                <LooksTwoIcon
                  color="primary"
                  fontSize="large"
                  className={classes.icon}
                />
              </Box>

              <Box textAlign="left">
                <p className={classes.p}>
                  A chaque avancement de votre projet, Je vous apporte un{" "}
                  <strong>soutien</strong>, je vous aide à aussi à reconnaître
                  vos points de blocage, à les comprendre et à les adoucir.
                  <br></br>
                  <br></br>
                  Cette compréhension vous permet d’affiner vos objectifs et à
                  vous engager dans l’action.
                  <br></br>
                  <br></br>
                  Je vous encourage à progresser le plus rapidement possible
                  vers la réalisation de ceux-ci et à vous centrer sur vos
                  priorités.
                </p>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box textAlign="center">
                <Looks3Icon
                  color="primary"
                  fontSize="large"
                  className={classes.icon}
                />
              </Box>

              <Box textAlign="left">
                <p className={classes.p}>
                  Ce coaching individuel vous permet d’obtenir des{" "}
                  <strong>résultats</strong> mesurables dans le temps sur votre
                  vie personnelle et professionnelle grâce à l’optimisation de
                  vos ressources.
                  <br></br>
                  <br></br>
                  Vous obtiendrez des résultats rapides et concrets !
                </p>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default FourSection;
