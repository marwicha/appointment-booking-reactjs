import React from "react";
import { Grid, Container, Box } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  title: {
    fontFamily: "LEMON MILK",
    width: "100%",
    margin: "auto",
  },

  paragraph: {
    color: "#434343",
    fontFamily: "Lato Medium",
    fontSize: "18px",
    width: "100%",
    margin: "auto",
  },

  imgShadow: {
    boxShadow: "0px 7px 10px rgba(0, 0, 0, 0.25)",
    borderRadius: "0 50px",
    width: "10em",
    padding: "12px",
    background: "#FFFFFF",
  },

  img: {
    maxHeight: "6em",
    marginLeft: "auto",
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(4),
  },
}));

const FourthSection = () => {
  const classes = useStyles();

  const imgList = [
    {
      title: "L’ouïe",
      link: "/assets/images/formations/image1.png",
    },

    {
      title: "La vue",
      link: "/assets/images/formations/vue.png",
    },

    {
      title: "Le goût",
      link: "/assets/images/formations/gout.png",
    },

    {
      title: "L’odorat",
      link: "/assets/images/formations/odorat.png",
    },

    {
      title: "Le toucher",
      link: "/assets/images/formations/toucher.png",
    },
  ];

  const imgList2 = [
    {
      id: "1",
      link: "/assets/images/formations/proprioception.png",
      title: "La proprioception",
      text:
        "Qui est le fait de localiser ses différentes parties du corps dans l’espace.",
    },

    {
      id: "2",
      link: "/assets/images/formations/equilibrioception.png",
      title: "L'équilibrioception",
      text:
        "Aide à prévenir toute chute chez les humains et animaux en équilibre",
    },

    {
      id: "3",
      link: "/assets/images/formations/nociception.png",
      title: "La nociception",
      text: "Qui est le fait d’avoir le sens de la douleur.",
    },

    {
      id: "4",
      link: "/assets/images/formations/thermo.png",
      title: "La thermoception",
      text: " Qui est le fait d’avoir la perception du chaud / froid.",
    },
  ];

  const getImgSrc = (id, imgSrc) => {
    return <img src={imgSrc} alt="" className={classes.img} />;
  };

  return (
    <section className="section">
      <Container maxWidth="lg">
        <Box textAlign="center">
          <Grid container justify="space-between" alignItems="center">
            {imgList.map((item) => (
              <Grid item md={2} xs={12}>
                <div className={classes.imgShadow}>
                  <img src={item.link} alt="" />

                  <h6 className="mt-3"> {item.title} </h6>
                </div>
              </Grid>
            ))}
          </Grid>

          <Grid container justify="space-between" alignItems="center">
            {imgList2.map((item) => (
              <Grid item md={3} xs={12}>
                {getImgSrc(item.id, item.link)}

                <Box mt={4}>
                  <h5 className={classes.title}> {item.title} </h5>

                  <p className={classes.paragraph}> {item.text} </p>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default FourthSection;
