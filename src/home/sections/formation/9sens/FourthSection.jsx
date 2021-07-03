import React from "react";
import {
  Grid,
  Container,
  Box,
  Card,
  Typography,
  CardContent,
  CardActionArea,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  root: { maxWidth: 250, margin: "auto" },

  title: {
    fontFamily: "Roboto",
    width: "100%",
    margin: "auto",
  },

  // img: {
  //   maxHeight: "6em",
  //   marginLeft: "auto",
  //   marginBottom: theme.spacing(2),
  //   marginTop: theme.spacing(4),
  // },

  p: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "1em",
    lineHeight: "30px",
    textAlign: "left",
    maxWidth: 500,
  },
}));

const FourthSection = () => {
  const classes = useStyles();

  const imgList = [
    {
      title: "L'ouïe",
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
      title: "L'odorat",
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
      text: "Localiser ses différentes parties du corps dans l’espace.",
    },

    {
      id: "2",
      link: "/assets/images/formations/equilibrioception.png",
      title: "L'équilibrioception",
      text: "Aide à prévenir toute chute chez les humains et animaux en équilibre.",
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
      text: "Qui est le fait d’avoir la perception du chaud/froid.",
    },
  ];

  // const getImgSrc = (id, imgSrc) => {
  //   return <img src={imgSrc} alt="" className={classes.img} />;
  // };

  return (
    <section className="section">
      <Container maxWidth="lg">
        <Box textAlign="center" mt={5}>
          <Grid container justify="center" alignItems="center">
            {imgList.map((item) => (
              <Grid item md={2} xs={12}>
                <img src={item.link} alt="" />

                <h6 className="mt-3"> {item.title} </h6>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box textAlign="center" mt={10}>
          <Grid container justify="center" alignItems="center">
            {imgList2.map((item) => (
              <Grid item md={3} xs={12}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <img src={item.link} alt="" />
                    <CardContent>
                      <Typography gutterBottom variant="body2" component="h6">
                        {item.title}
                      </Typography>

                      <Box align="left">
                        <p className={classes.p}>{item.text}</p>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default FourthSection;
