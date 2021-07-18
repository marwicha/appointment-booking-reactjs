import React from "react";
import { Grid, Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  media: {
    width: "80%",
  },

  p: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "1.25em",
    lineHeight: "20px",
    textAlign: "justify",
  },

  title: {
    fontFamily: "LEMON MILK",
    fontStyle: "normal",
    fontWeight: "600",
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

  box: {
    marginBottom: "4em",
  },
}));

const FirstSection = () => {
  const classes = useStyles();

  return (
    <section className="section">
      <Container maxWidth="lg">
        <Box textAlign="center">
          <h3 className="font-bold text-28 text-center text-second mt-5 mb-10">
            Coaching
          </h3>
        </Box>
      </Container>

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
              <h3 className={classes.title}> Le coaching: </h3>

              <h4 className={classes.titleText}> qu'est ce que c'est? </h4>
              <img
                alt=""
                className={classes.media}
                src="/assets/images/coaching/coach.png"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Box display="flex" height="100%">
                <Box my="auto" className={classes.box} mt={4}>
                  <p className={classes.p}>
                    Le coaching individuel vous apporte une véritable réponse à
                    vos questions d'ordre professionnel ou privé pour révéler le
                    meilleur de vous-même.
                    <br></br>
                    <br></br>
                    Ceci vous permet également de fixer de nouveaux objectifs,
                    une direction à suivre.
                  </p>
                  <br></br>

                  <p className={classes.p}>
                    Pour cette semaine pas comme les autres, en immérsion dans
                    la nature, je vous accueille à Cormont, au cœur d'un petit
                    village face à l'Eglise, au cœur de soi et en connexion avec
                    cette magnifique nature authentique. A Proximité de
                    Montreuil sur mer, de la vallée de la course, d’Étaples et
                    du Touquet paris-plage.
                  </p>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default FirstSection;
