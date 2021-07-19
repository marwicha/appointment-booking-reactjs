import React from "react";
import { Grid, Container, Box } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  h1: {
    fontFamily: "LEMON MILK",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "26px",
    color: "#182731",
  },

  number: {
    fontFamily: "LEMON MILK",
    fontStyle: "bold",
    fontWeight: "700",
    fontSize: "18px",
    color: "#182731",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontFamily: "LEMON MILK",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    color: "#182731",
    //textAlign: "left",
    alignItems: "center",
    justifyContent: "center",
  },

  title2: {
    color: "#182731",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "1em",
    textAlign: "left",
  },

  p: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "1em",
    textAlign: "left",
  },

  imgShadow: {
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)",
    background: "#FFFFFF",
    padding: "2rem",
    maxWidth: 326,
    height: "17em",
    borderRadius: "0px 50px",
    margin: "auto",
  },

  imgShadowLast: {
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)",
    background: "#FFFFFF",
    padding: "2rem",
    height: "8em",
    borderRadius: "0px 50px",

    "@media screen and (max-width: 767px)": {
      height: "16em",
    },
  },
}));

const SixSection = () => {
  const programList1 = [
    {
      id: "1",
      title: "CALIFORNIEN",
      title2: "Méthode des 9 Sens Manoeuvres de base dos - Aromathérapie",
      description:
        "vous découvrirez l'utilité de la méthode des 9 SENS, nous commencerons par des manœuvres de base du dos avec dos ainsi que l'utilisation de l'aromathérapie et des autres sens.",
    },

    {
      id: "2",
      title: "SHIATSU",
      title2:
        "Dos approfondissement des pressions progressive et étirements doux",
      description:
        "Approfondir vos connaissances avec des pression de Shiatsu progressive et étirement doux du dos.",
    },

    {
      id: "3",
      title: "SUEDOIS",
      title2: "Grand dos révision - Profondeur",
      description:
        "Vous verrez l’utilité du massage suédois avec du pétrissage",
    },
  ];

  const programList2 = [
    {
      id: "4",
      title: "INDIEN",
      title2: "Pierres chaudes - Jambes - fessiers - pieds sur l'épaule",
      description:
        "Nous aborderons les techniques Indiennes avec le massage avec les Pierres chaudes sur le dos et jambes.",
    },

    {
      id: "5",
      title: "TIBETAIN",
      title2: "Bol tibétain, bol en cristal",
      description:
        "Vous ressentirez les bienfaits des ondes sonores avec les Bols tibétains.",
    },

    {
      id: "6",
      title: "9 SENS (rappel)",
      title2: "Fluidité des enchaînements - pieds jambes",
      description:
        "Nous accentuerons l'apprentissage sur la bonne fluidité des enchaînements.",
    },
  ];

  const programList3 = [
    {
      id: "7",
      title: "AYURVEDIQUE",
      title2: "Ventre - plexus solaire",
      description:
        "Vous apprendrez à relier les chakras avec le massage du ventre avec des mouvements ayurvédique.",
    },

    {
      id: "8",
      title: "SHIATSU",
      title2: "Nuque - clavicule",
      description:
        "Nous reviendrons sur les mouvements de Shiatsu pour masser la nuque, les omoplates et les clavicules.",
    },

    {
      id: "9",
      title: "CALIFORNIEN",
      title2: "Tête - visage",
      description:
        "Nous terminerons par des mouvements de californien et indiens en massant la tête et le visage.",
    },
  ];

  const classes = useStyles();

  return (
    <section className="section">
      <Container maxWidth="lg">
        <h1 className={clsx(classes.h1, "text-center mt-5 mb-12")}>
          Programme
        </h1>

        <Grid container spacing={2} justify="center" alignItems="center">
          {programList1.map((item) => (
            <Grid item md={4} xs={12}>
              <div className={clsx(classes.imgShadow, "mt-5")}>
                <h1 className={classes.number}> {item.id}</h1>

                <h1 className={classes.title}> {item.title} </h1>

                <h4 className={classes.title2}>{item.title2}</h4>
                <p className={classes.p}>{item.description}</p>
              </div>
            </Grid>
          ))}
        </Grid>

        <Box mt={5}>
          <Grid container spacing={2} justify="center" alignItems="center">
            {programList2.map((item) => (
              <Grid item md={4} xs={12}>
                <div className={clsx(classes.imgShadow, "mt-5")}>
                  <h1 className={classes.number}> {item.id} </h1>

                  <h1 className={classes.title}> {item.title} </h1>

                  <h4 className={classes.title2}>{item.title2}</h4>
                  <p className={classes.p}>{item.description}</p>
                </div>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box mt={5}>
          <Grid container spacing={2} justify="center" alignItems="center">
            {programList3.map((item) => (
              <Grid item md={4} xs={12}>
                <div className={clsx(classes.imgShadow, "mt-5")}>
                  <h1 className={classes.number}> {item.id} </h1>

                  <h1 className={classes.title}> {item.title} </h1>

                  <h4 className={classes.title2}>{item.title2}</h4>
                  <p className={classes.p}>{item.description}</p>
                </div>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box mt={5}>
          <Grid
            container
            className={clsx(classes.imgShadowLast, "mt-5")}
            container
            spacing={2}
            justify="center"
            alignItems="center"
          >
            <Grid item md={4} xs={12}>
              <h1 className={classes.number}> 10 </h1>

              <h1 className={classes.title}> 9 SENS (rappel) </h1>
            </Grid>
            <Grid item md={8} xs={12}>
              <h4 className={classes.p}>
                Dans ce dernier module, nous terminerons par des mouvement de
                californien fluide et lent en massant délicatement la tête et le
                visage. <br></br>Nous verrons également des mouvements Indiens
                sur ces mêmes partis du corps.
              </h4>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default SixSection;
