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
      title: "Plus énergie",
      link: "/assets/images/formations/energie.png",
      description:
        "Un employé détendu est plus énergique, plus concentré. Il offre une meilleure performance. Il gagne en motivation, en créativité, bref en efficacité et en savoir être.",
    },

    {
      title: "Un climat social",
      link: "/assets/images/formations/environement.png",
      description:
        "Le massage-bien-être renforce également le sentiment d’appartenance à l’organisation et améliore le climat social.",
    },

    {
      title: "Le travail",
      link: "/assets/images/formations/work.png",
      description:
        "Il est un moyen efficace de renforcer votre image auprès de vos collaborateurs, clients et partenaires.",
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
