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
            <h3 className="skill-title">Somatothérapie</h3>
            Vous avez vécu des difficultés d'ordre privé ou professionnel. Peu
            après, votre corps vous parle et vous souffrez entre autre du dos,
            de la tête, et vos idées se brouillent.Il s'agit tout simplement du
            langage du corps. <br></br> Vous êtes alors victime sans le savoir
            de troubles physiques liés au stress et angoisses que vous avez
            vécus précédemment. Sans vous en rendre compte, vous avez
            emmagasiner et somatiser votre souffrance psychique. Patrick vous
            accueille avec une empathie naturel afin de lever vos blocages
            émotionnels. Il utilise pour cela des techniques psycho-corporelles
            telles que l'écoute active accompagnée de soins (sons, vibrations,
            et du toucher). <br></br> Par cette relation d'aide celui-ci relie
            efficacement votre corps à votre esprit. Et libère ainsi les
            tensions physiques.
          </div>
        </article>

        <article className="skill-right">
          <div className="skill-image">
            <img src="./assets/images/coach.png" alt="" />
          </div>
          <div className="skill-description">
            <h3 className="skill-title">Coaching</h3>
            Vous vous posez de nombreuses questions tant sur votre vie privé que
            sur votre vie professionnelles suite au covid. Vous avez besoin de
            soutien et, de faire le point dans votre vie. Vous souhaitez vous
            fixer de nouveaux objectifs. N'attendez plus, osez franchir un cap
            avec un coach expérimenté dans l'accompagnement. Patrick Caillier
            est là pour vous aider à faire le point sur vous-même et à retrouver
            du sens dans vos projets. Quelques séances de coaching rien que pour
            vous, seront le meilleur moyen de retrouver de l'énergie et le désir
            d'entreprendre. Conseil du praticien : En cas de troubles physiques
            et émotionnels, prévoyez avant la séance de coaching un rendez-vous
            de somatothérapie.
          </div>
        </article>
      </Container>
    </section>
  );
};

export default Somathoterapie;
