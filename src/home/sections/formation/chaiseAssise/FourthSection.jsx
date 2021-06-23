import React from "react";
import { Grid, Container, Box } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

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
      title: "Equilibre",
      link: "/assets/images/formations/energie.png",
      description:
        "Un employé détendu est plus énergique, plus concentré. Il offre une meilleure performance. Il gagne en motivation, en créativité, bref en efficacité et en savoir être.",
    },

    {
      title: "Teamwork",
      link: "/assets/images/formations/environement.png",
      description:
        "En agissant sur notre propre équilibre, le massage-bien-être renforce également le sentiment d’appartenance et améliore le climat social, offrant un environnement qui favorise l'épanouissement le développement des performances.",
    },

    {
      title: "Entreprise",
      link: "/assets/images/formations/work.png",
      description:
        "Pour toute activité professionnelle, un employé détendu est un employé motivé et créatif. Il est mieux concentré et sait bien mieux gérer les situations stressantes. Un environnement de travail zen est important pour la santé de chaque entreprise.",
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
              <Grid item md={3} xs={12}>
                {getImgSrc(item.id, item.link)}

                <Box mt={2}>
                  <h5 className={classes.title}> {item.title} </h5>

                  <p className={classes.paragraph}> {item.description} </p>
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
