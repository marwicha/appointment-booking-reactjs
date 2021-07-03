import React from "react";
import { Grid, Button, Container, Box, Typography } from "@material-ui/core";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  img: {
    maxWidth: 150,
    marginBottom: theme.spacing(2),
  },

  title: {
    color: "#4b9fbc",
  },

  btn: {
    color: "white",
    backgroundColor: "#4b9fbc",
  },
}));

const AllServices = () => {
  const classes = useStyles();
  const serviceList = [
    {
      id: "1",
      title: "Somatothérapie",
      imgSrc: "/assets/images/coaching.png",
      link: "/somatotherapie"
    },
    {
      id: "3",
      title: "Formations",
      imgSrc: "/assets/images/formation.png",
      link: "/formations"
    },

    {
      id: "2",
      title: "Massages",
      imgSrc: "/assets/images/massage.png",
      link: "/formations"
    },
  ];

  const getImgSrc = (id, imgSrc, imageClass) => {
    if (id === "2")
      return <img src={imgSrc} className={clsx(imageClass, "mt--6")} alt="" />;
    else if (id === "1")
      return <img src={imgSrc} className={clsx(imageClass, "mt--6")} alt="" />;
    else return <img src={imgSrc} className={imageClass} alt="" />;
  };
  return (
    <section className="section">
      <Box mb={8} textAlign="center">
        <Container maxWidth="sm">
          <Typography
            variant="h4"
            component="span"
            color="primary"
            className="text-fourth"
          >
            IKDO®
          </Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            paragraph={true}
          >
            Services
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" className="container-formations">
        <Box py={5} textAlign="center">
          <Grid container spacing={6} justify="center">
            {serviceList.map((item, ind) => (
              <Grid key={ind} item md={4} xs={12}>
                {getImgSrc(item.id, item.imgSrc, classes.img)}

                <Box mt={3}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.btn}
                  >
                    <NavLink to={item.link}>{item.title}</NavLink>
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default AllServices;
