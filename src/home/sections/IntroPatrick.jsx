import React from "react";
import { Container, Box, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  container: {
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)",
    background: "#FAFBFF",
    padding: "2rem",
    borderRadius: "0px 50px",
    maxWidth: "1000px",
    margin: "0 auto",
    boxSizing: "border-box",
  },

  typo: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },

  p: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "1em",
    lineHeight: "30px",
    textAlign: "left",
  },
}));

const IntroPatrick = () => {
  const classes = useStyles();

  return (
    <section className="section">
      <Container maxWidth="lg" className={classes.container}>
        <Box textAlign="center">
          <Typography className={classes.typo} variant="h4" component="span">
            IKDO®
          </Typography>

          <Typography
            variant="subtitle1"
            color="textSecondary"
            paragraph={true}
          >
            Suite au Covid 19 la réouverture d'ikdo est reporté en octobre 2021.
          </Typography>

          <Typography
            variant="subtitle2"
            color="textSecondary"
            paragraph={true}
          >
            Nous vous remercions de votre compréhension.
          </Typography>
        </Box>

        <Box mt={5} textAlign="center">
          <Grid container spacing={6}>
            <Grid item md={5} xs={12}>
              <h4 className={classes.p}>
                Le centre de bien-être IKDO® est un centre de formation et
                d'apprentissage mais surtout un espace d'échange et de
                ressourcement, piloté par Mr.Caillier Patrick, praticien
                confirmé qui, à travers ses multiples voyages et des années
                d'expérience, s'est forgé un savoir qu'il partage aujourd'hui
                avec vous, en séances individuelles (massages, coaching de vie,
                la somatothérapie), ou en groupe pour le massage des 9 sens, la
                méditation, le massage assis sur chaise érgonomique
              </h4>
            </Grid>

            <Grid item md={1} xs={12}></Grid>

            <Grid item md={5} xs={12}>
              <h4 className={classes.p}>
                afin d'apprendre les notions élémentaires de ces techniques.
                <br></br>
                Pour les prestations individuelles vous êtes invités à vous
                inscrire sur notre site en créant un compte et prendre un rendez
                vous, et pour les stages et nos programmes de formation offrant
                une attestation de stage, merci d'appeler le centre IKDO sur le
                numéro 0784942149.
                <br></br>
                Au plaisir de vous accueillir prochainement!.
              </h4>
            </Grid>
            <Grid item md={1} xs={12}></Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default IntroPatrick;
