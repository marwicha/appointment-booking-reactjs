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
  title: {
    fontFamily: "Lato",
    width: "100%",
    margin: "auto",
  },

  img: {
    maxHeight: "6em",
    margin: "auto",
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(4),
  },

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
      title: "Equilibre",
      link: "/assets/images/formations/energie.png",
      description:
        "Un employé détendu est plus énergique, plus concentré.Il offre une meilleure performance,Il gagne en motivation, en créativité et en efficacité.",
    },

    {
      title: "Teamwork",
      link: "/assets/images/formations/environement.png",
      description:
        "En agissant sur notre propre équilibre, le massage-bien-être améliore le climat social, offrant un environnement qui favorise l'épanouissement le développement des performances.",
    },

    {
      title: "Entreprise",
      link: "/assets/images/formations/work.png",
      description:
        "Pour toute activité professionnelle, un employé détendu est un employé motivé et créatif.Il est mieux concentré et sait bien mieux gérer les situations stressantes. Un environnement de travail zen est important pour la santé de chaque entreprise.",
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
                <Card className={classes.root}>
                  <CardActionArea>
                    {getImgSrc(item.id, item.link)}
                    <CardContent>
                      <Typography gutterBottom variant="body2" component="h6">
                        {item.title}
                      </Typography>

                      <Box align="left">
                        <p className={classes.p}>{item.description}</p>
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
