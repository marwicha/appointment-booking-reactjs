import React from "react";
import { Grid, Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  media: {
    width: "86%",
    height: "34em",
    marginBottom: "4em",
  },

  p: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "1em",
    lineHeight: "19px",
    textAlign: "justify",
  },

  title: {
    fontFamily: "LEMON MILK",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "1.5em",
    color: "#384C5A",
  },

  titleText: {
    fontFamily: "LEMON MILK light",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "1em",
    color: "#384C5A",
  },
}));

const SecondSection = () => {
  const classes = useStyles();

  return (
    <section className="section">
      <Container maxWidth="lg">
        <Box textAlign="left">
          <h3 className={classes.title}>Le coaching</h3>
          <h4 className={classes.titleText}>est pour vous, si :</h4>
        </Box>
      </Container>

      <Container maxWidth="lg" className="container-formations">
        <Box pt={4} pb={2}>
          <Grid container spacing={5} justify="center" alignItems="center">
            <Grid item xs={12} md={7}>
              <Box display="flex" height="100%">
                <Box my="auto">
                  <p className={classes.p}>
                    Vous avez besoin de vous déconnecter de votre quotidien et
                    de votre mental ?.
                    <br></br>
                    Vous avez besoin de partir à la rencontre de votre vrai
                    vous, de votre coeur ?<br></br>
                    Vous avez envie de lâcher tout ce qui vous emprisonne et ne
                    vous appartient pas pour enfin vivre pleinement et vous
                    épanouir ?<br></br>
                    <br></br>
                    Vous avez décidé d'être d'heureux, quoiqu'il arrive et de
                    prendre votre vie en main ?<br></br>
                    Vous désirez vous fixer de nouveaux objectifs, ou faire le
                    point dans votre vie.
                    <br></br>
                    Patrick Caillier spécialisé entre autres dans
                    l'accompagnement est là pour vous aider à retrouver du sens
                    dans vos projets.
                  </p>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={5}>
              <img
                alt=""
                className={classes.media}
                src="/assets/images/coaching/coach2.png"
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default SecondSection;
