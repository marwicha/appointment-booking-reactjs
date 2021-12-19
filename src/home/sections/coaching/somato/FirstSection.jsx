import React from "react";
import { Grid, Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  media: {
    width: "80%",
  },

  souTitle: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "1em",
    lineHeight: "30px",
    textAlign: "center",
  },

  p: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "1em",
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
}));

const FirstSection = () => {
  const classes = useStyles();

  return (
    <section className="section">
      <Container maxWidth="lg">
        <Box textAlign="center">
          <h3 className="font-bold text-28 text-center text-second mt-5 mb-10">
            SOMATOTHERAPIE
          </h3>

          <p className={classes.souTitle}>
            Pour une séance de somatothérapie vous êtes invités à vous inscrire
            sur le site <a href="https://www.resalib.fr/" >résalib</a>
          </p>
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
              <Box>
                <h3 className={classes.title}> La somatothérapie: </h3>

                <h4 className={classes.titleText}> qu'est ce que c'est? </h4>

                <img
                  alt=""
                  className={classes.media}
                  src="/assets/images/coaching/somato.png"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" height="100%" mt={4}>
                <Box my="auto">
                  <p className={classes.p}>
                    <strong>La somatothérapie</strong> est un soin
                    psychocorporel, reliant corps et esprit par différentes
                    techniques multi sensorielle, principalement le toucher dont
                    le but est de débloquer les tensions dans le corps c'est á
                    dire la somatisation.
                    <br></br> <br></br>
                    En plaçant le corps au centre de l'attention cette approche
                    vous invite à entrer en contact avec ce que vous ressentez
                    de manière claire voyante, avec votre vécu moral et corporel
                    afin de mieux comprendre votre situation actuelle. <br></br>
                    <br></br>
                    Cette médiation corporelle n'est pas un traitement mais un
                    accompagnement pour votre mieux-être, ces séances permettent
                    de dénouer des blocages émotionnels, sources de souffrances
                    d'ordre psychosomatique. Au fil de mon accompagnement, vous
                    saurez mieux vivre en harmonie avec vos émotions en
                    décrivant mieux comment cette situation vous affecte,
                    comment elle vous touche intérieurement. <br></br> <br></br>
                    La traversée de ce ressenti modifie la perception que vous
                    avez de vous-même, des autres et de la situation et vous
                    découvrez de nouvelles possibilités d'être, de vous
                    positionner et de réagir.
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
