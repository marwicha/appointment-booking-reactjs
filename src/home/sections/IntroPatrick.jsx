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
        </Box>

        <Box mt={5} textAlign="center">
          <Grid container spacing={6}>
            <Grid item md={5} xs={12}>
              <h4 className={classes.p}>
                Le centre de thérapie ou de bien etre IKDO® est un centre de
                formation et d'apprentissage mais surtout un espace d'échange et
                de bien etre, piloté par Mr. Cailler Patrick, praticien confirmé
                qui, à travers ses multiples voyages et des années
                d'expériences, s'est forgé un savoir qu'il partage aujourd'hui
                avec vous. <br></br> Il est le créateur de plusieurs techniques
                de massages et de méditations notamment la
                <strong> Somatothérapie®</strong>,
              </h4>
            </Grid>

            <Grid item md={1} xs={12}></Grid>

            <Grid item md={5} xs={12}>
              <h4 className={classes.p}>
                pratique thérapeutique
                <strong> exclusivement</strong> enseignée au sein de notre
                institut.
                <br></br>A travers ses séances de coaching ou lors d'ateliers
                d'initiations vous apprendrez ses techniques de méditations et
                de massages, pour bénéficier de nos stages et nos programmes
                d'apprentissage offrants un certificat á terme, vous êtes
                invités à découvrir plus en détails nos prestations et vous
                inscrire sur notre site ou en contactant directement Mr.
                Cailler.
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
