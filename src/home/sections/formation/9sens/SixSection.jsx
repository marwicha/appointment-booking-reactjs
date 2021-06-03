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
    fontFamily: "LEMON MILK Light",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "12px",
    color: "#182731",
    lineHeight: "22px",
    alignItems: "center",
    justifyContent: "center",
  },

  description: {
    fontFamily: "LEMON MILK Light",
    fontStyle: "normal",
    fontWeight: "500",
    height: "50%",
    fontSize: "10px",
    color: "#182731",
  },

  imgShadow: {
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)",
    background: "#FFFFFF",
    padding: "2rem",
    width: "326px",
    height: "10em",
    borderRadius: "0px 50px",
  },

  imgShadowLast: {
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)",
    background: "#FFFFFF",
    padding: "2rem",
    height: "10em",
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
        "Dans le module 1 vous découvrirez l’utilité de la méthode des 9 SENS  Nous commencerons par des manœuvre de base du dos avec dos (mouvement lent et ample) ainsi que l’utilisation de l’aromathérapie  et des autres sens.",
    },

    {
      id: "2",
      title: "SHIATSU",
      title2: "Dos approfondissement pression progressive et étirements doux",
      description:
        "Dans le module 2 vous pourrez  approfondir vos connaissances avec des pression de Shiatsu progressive et étirement doux du dos (travail avec les pouces et le plat de la main).",
    },

    {
      id: "3",
      title: "SUEDOIS",
      title2: "Grand dos révision - Profondeur",
      description:
        "Dans le module 3 vous verrez l’utilité du massage suédois avec du pétrissage et nous en profitons pour revoir l’ensemble du massage du dos mais avec des mouvements plus profond et plus saccadés.",
    },
  ];

  const programList2 = [
    {
      id: "4",
      title: "INDIEN",
      title2: "Pierres chaudes - Jambes - fessiers - pieds sur l'épaule",
      description:
        "Dans le module 4 nous aborderons les techniques Indiennes avec le massage avec les Pierres chaudes  sur le dos mais aussi  le massage des Jambes - fessiers - et ce nous appelons le (pieds sur l’épaule)",
    },

    {
      id: "5",
      title: "TIBETAIN",
      title2: "Bol tibétain, bol en cristal",
      description:
        "Dans le module 5, vous ressentirez les bienfaits des ondes sonores avec les Bols tibétains et les bols en crystal",
    },

    {
      id: "6",
      title: "9 SENS (rappel)",
      title2: "Fluidité des enchaînements - pieds jambes",
      description:
        "Dans ce module 6 nous réviserons les bases pour rappel des techniques nous accentuerons l’apprentissage sur la bonne fluidité des enchaînements  et nous verrons les bienfait du massage des pieds et des jambes.",
    },
  ];

  const programList3 = [
    {
      id: "7",
      title: "AYURVEDIQUE",
      title2: "Ventre - plexus solaire",
      description:
        "Dans le module 7 (correspondant au 7 chakras) vous apprendrez à relier les chakras avec le massage du ventre  et du plexus solaire avec des mouvements ayurvédique.",
    },

    {
      id: "8",
      title: "SHIATSU",
      title2: "Nuque - clavicule",
      description:
        "Dans le module 8, nous reviendrons sur les mouvement de Shiatsu mais ceux ci seront lent et profond pour masser délicatement la nuque , les omoplates , et les clavicules.",
    },

    {
      id: "9",
      title: "CALIFORNIEN",
      title2: "Tête - visage",
      description:
        "Dans le module 9 nous terminerons par des mouvement de californien fluide et lent en massant délicatement la tête et le visage. Nous verrons également des mouvements Indiens sur ces mêmes partis du corps.",
    },
  ];

  const classes = useStyles();

  return (
    <section className="section">
      <Container maxWidth="lg">
        <h1 className={clsx(classes.h1, "text-center mt-5 mb-12")}>
          {" "}
          Programme{" "}
        </h1>

        <Grid container spacing={2} justify="space-between" alignItems="center">
          {programList1.map((item) => (
            <Grid md={3} xs={12}>
              <div className={clsx(classes.imgShadow, "mt-5")}>
                <h1 className={classes.number}> {item.id}</h1>

                <h1 className={classes.title}> {item.title} </h1>

                <h4 className={classes.title2}>{item.title2}</h4>
              </div>
            </Grid>
          ))}
        </Grid>

        <Box mt={5}>
          <Grid
            container
            spacing={2}
            justify="space-between"
            alignItems="center"
          >
            {programList2.map((item) => (
              <Grid md={3} xs={12}>
                <div className={clsx(classes.imgShadow, "mt-5")}>
                  <h1 className={classes.number}> {item.id} </h1>

                  <h1 className={classes.title}> {item.title} </h1>

                  <h4 className={classes.title2}>{item.title2}</h4>
                </div>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box mt={5}>
          <Grid
            container
            spacing={2}
            justify="space-between"
            alignItems="center"
          >
            {programList3.map((item) => (
              <Grid md={3} xs={12}>
                <div className={clsx(classes.imgShadow, "mt-5")}>
                  <h1 className={classes.number}> {item.id} </h1>

                  <h1 className={classes.title}> {item.title} </h1>

                  <h4 className={classes.title2}>{item.title2}</h4>
                </div>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box mt={5}>
          <Grid
            container
            className={clsx(classes.imgShadowLast, "mt-5")}
            lg={12}
            md={12}
            xs={12}
          >
            <Grid item md={4} xs={12}>
              <h1 className={classes.number}> 10 </h1>

              <h1 className={classes.title}> 9 SENS (rappel) </h1>
            </Grid>
            <Grid item md={8} xs={12}>
              <h4 className={classes.title2}>
                Dans le module 9 nous terminerons par des mouvement de
                californien fluide et lent en massant délicatement la tête et le
                visage. Nous verrons également des mouvements Indiens sur ces
                mêmes partis du corps.
              </h4>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default SixSection;
