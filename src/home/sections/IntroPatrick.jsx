import React from "react";
import { Container, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  container: {
    position: "relative",
    textAlign: "center",
  },

  containerImg: {
    width: "100%",
    backgroundRepeat: "no-repeat",
  },

  contentText: {
    position: "absolute",
    left: "5%",
    top: "24%",
    maxWidth: "36em",

    [theme.breakpoints.down("xs")]: {
      width: "40%",
      height: "49%",
      overflow: "hidden",
      /* white-space: nowrap; */
      textOverflow: "ellipsis",
    },

    [theme.breakpoints.down("sm")]: {
      width: "40%",
      height: "49%",
      overflow: "hidden",
      /* white-space: nowrap; */
      textOverflow: "ellipsis",
    },

    [theme.breakpoints.down("md")]: {
      width: "40%",
      height: "49%",
      overflow: "hidden",
      /* white-space: nowrap; */
      textOverflow: "ellipsis",
    },
  },

  containerName: {
    position: "absolute",
    top: "15%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    [theme.breakpoints.down("xs")]: {
      top: "38%",
    },

    [theme.breakpoints.down("sm")]: {
      top: "32%",
    },

    [theme.breakpoints.down("md")]: {
      top: "32%",
    },
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
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "1rem",
    lineHeight: "30px",
    textAlign: "left",
  },
}));

const IntroPatrick = () => {
  const classes = useStyles();
  const mediaQuery = window.matchMedia("(min-width: 768px)");

  return (
    <>
      <section className="section">
        <Container maxWidth="lg" className={classes.container}>
          <img
            src="./assets/images/bgPatrick.png"
            alt=""
            className={classes.containerImg}
          />

          <Box textAlign="center" className={classes.containerName}>
            <Typography className={classes.typo} variant="h4" component="span">
              IKDO®
            </Typography>
          </Box>
          <Box className={classes.contentText} align="left">
            <p className={classes.p}>
              Le centre de thérapie ou de bien etre IKDO® est un centre de
              formation et d'apprentissage mais surtout un espace d'échange et
              de bien etre. Piloté par Mr. Cailler Patrick, praticien confirmé
              qui, à travers ses multiples voyages et des années d'expériences,
              s'est forgé un savoir qu'il partage aujourd'hui avec vous. Il est
              le créateur de plusieurs techniques de massages et de méditations
              notamment la Somatothérapie®, pratique thérapeutique exclusivement
              enseignée au sein de notre institut. A travers ses séances de
              coaching ou lors d'ateliers d'initiations vous apprendrez ses
              techniques de méditations et de massages, Pour bénéficier de nos
              stages et nos programmes d'apprentissage offrants un certificat á
              terme, vous êtes invités à découvrir plus en détails nos
              prestations et vous inscrire sur notre site ou en contactant
              directement Mr. Cailler.
            </p>
          </Box>
        </Container>
      </section>
    </>
  );
};

export default IntroPatrick;
