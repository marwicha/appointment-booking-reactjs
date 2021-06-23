import React from "react";
import { Grid, Box, Container, Button, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  buttonAction: {
    marginRight: theme.spacing(2),
    color: "white",
    backgroundColor: "#4b9fbc",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(2),
    },
  },

  container: {
    maxWidth: "1140px",
    margin: "0 auto",
    padding: "0 20px",
  },

  skill: {
    position: "relative",
  },

  skillImage: {
    position: "absolute",
    zIndex: "1",
    width: "50%",
    height: "100%",
    overflow: "hidden",
  },

  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "all 1s",
  },

  skillRight: {
    right: "0",
  },

  skillLeft: {
    left: "0",
  },

  skillDescriptionRight: {
    padding: "36px 55% 36px 0",
    textAlign: "right",
    zIndex: "0",
  },

  skillDescriptionLeft: {
    padding: "36px 0 36px 55%",
    textAlign: "left",
    zIndex: "0",
  },
}));

const Somathoterapie = () => {
  const classes = useStyles();

  return (
    <section className="section">
      <Container maxWidth="lg">
        <article className="skill-left">
          <div className="skill-image">
            <img src="./assets/images/somato.png" alt="" />
          </div>
          <div className="skill-description">
            <h3 className="skill-title">Somathotérapie</h3>
            C’est une pratique qui instaure une relation d’aide par un toucher
            psycho-corporel.
            <br></br>
            <br></br>
            Le praticien prend en compte vos ressentis corporels et permet de
            replacer votre corps au centre de votre attention.
            <br></br>
            <br></br>
            Cette approche vous invite à entrer en contact avec ce que vous
            ressentez, avec votre vécu corporel et intérieur de la situation que
            vous vivez.
          </div>
        </article>

        <article className="skill-right">
          <div className="skill-image">
            <img src="./assets/images/coach.png" alt="" />
          </div>
          <div className="skill-description">
            <h3 className="skill-title">Coaching</h3>
            C’est une pratique qui instaure une relation d’aide par un toucher
            psycho-corporel.
            <br></br>
            <br></br>
            Le praticien prend en compte vos ressentis corporels et permet de
            replacer votre corps au centre de votre attention.
            <br></br>
            <br></br>
            Cette approche vous invite à entrer en contact avec ce que vous
            ressentez, avec votre vécu corporel et intérieur de la situation que
            vous vivez.
          </div>
        </article>
      </Container>
    </section>
  );
};

export default Somathoterapie;
