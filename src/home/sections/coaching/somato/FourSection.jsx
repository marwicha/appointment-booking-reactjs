import React from "react";
import { Grid, Container, Box } from "@material-ui/core";
import LooksTwoIcon from "@material-ui/icons/LooksTwo";
import LooksOneIcon from "@material-ui/icons/LooksOne";
import Looks3Icon from "@material-ui/icons/Looks3";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  icon: {
    marginBottom: theme.spacing(1),
  },

  p: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "1em",
    lineHeight: "20px",
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
                  La première séance est <strong>verbale</strong>.<br></br>
                  <br></br>
                  en début de séance vous faites le point sur le vécu et les
                  tensions corporelles.
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
                  La deuxieme est concentrée sur le <strong>soin</strong>.
                  <br></br>
                  <br></br>
                  Cette phase intègre l'utilisation de différentes techniques de
                  toucher-massages® en fonction de chaque personne, pouvant
                  utiliser le massage californien, shiatsu, énergétique,
                  relaxation, réflexologie plantaire mais aussi fait appel aux
                  sons et aux vibrations avec la sonothérapie (Bols tibétains et
                  autres instruments musicaux).
                  <br></br>
                  <br></br>
                  Ces techniques de relaxation ancestrale dénouent les tensions
                  et rétablissent le bon fonctionnement des organes internes, en
                  rééquilibrant vos énergies.
                  <br></br>
                  <br></br>
                  La conséquence de ce soin engendre un autre ressenti de
                  vous-même.
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
                  La troisième phase <strong> dite d’intégration</strong>:
                  <br></br>
                  <br></br>
                  c’est la partie la plus importante réalisée entre vous et
                  l’accompagnateur. Tout en étant aidé vous exprimez vos
                  ressentis et vos pensées. En clarifiant celles-ci grâce à la
                  relaxation vous pourrez envisager de dépasser vos difficultés.
                  <br></br>
                  <br></br>
                  Vous pourrez ainsi vous baser sur chaque séance pour induire
                  le changement en vous et à trouver vos propres solutions.
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
