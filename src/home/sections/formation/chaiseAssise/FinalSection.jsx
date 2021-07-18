import React from "react";
import {
  Grid,
  Icon,
  Container,
  Box,
  Card,
  CardContent,
  CardActionArea,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  card: {
    background: "#EBF0FF",
  },

  p: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "19px",
    color: "#384C5A",
    margin: "auto",
    textAlign: "left",
    maxWidth: "100%",
    padding: "1rem",
  },

  p2: {
    fontFamily: "Roboto",
    fontStyle: "bold",
    fontWeight: "500",
    fontSize: "22px",
    lineHeight: "19px",
    color: "#384C5A",
    margin: "auto",
    textAlign: "left",
    maxWidth: "100%",
    padding: "1rem",
  },

  h1: {
    fontFamily: "LEMON MILK",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "20px",
    textAlign: "left",
  },

  icon: {
    fontSize: "35px",
    marginBottom: "-8px",
  },
}));

const FinalSection = () => {
  const classes = useStyles();

  return (
    <section className="section">
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center" justify="center">
          <Grid item md={5} xs={12}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardContent>
                  <Box align="left">
                    <h1 className={classes.h1}>
                      <Icon className={classes.icon}> check </Icon>
                      Déroulement de la formation:
                    </h1>
                    <p className={classes.p}>
                      Format 2 jours: 4 séances de 3h30min de 9h à 17h
                    </p>
                    <br></br>
                    <p className={classes.p}>
                      Possibilité de déjeuner ensemble sur place mise á
                      disposition des locaux en toute convivialité
                    </p>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item md={5} xs={12}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardContent>
                  <Box align="left">
                    <h1 className={classes.h1}>
                      <Icon className={classes.icon}> map-marker-alt </Icon>
                      Lieu de la formation:
                    </h1>

                    <p className={classes.p}>1 rue de l'église 62630 Cormant</p>
                    <hr />

                    <h1 className={classes.h1}>
                      <Icon className={classes.icon}> euro-sign </Icon> côut de
                      la formation:
                    </h1>

                    <p className={classes.p}>Pour le prix (hors promotion): </p>

                    <p className={classes.p2}> 450€ </p>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default FinalSection;
