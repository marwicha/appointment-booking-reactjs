import React from "react";
import { Grid, Box, Container } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  button: {
    marginTop: "2rem !important",
    padding: "1rem 2rem 1rem 2rem",
    fontSize: 15,
    fontFamily: theme.typography.fontFamily,
    backgroundColor: "white",
    borderRadius: "100px",
  },

  h5: {
    fontFamily: "LEMON MILK",
    fontSize: "16px",
    width: "100%",
  },

  paragraph: {
    color: "#434343",
    fontFamily: "Lato Medium",
    fontSize: "14px",
    width: "100%",
    //flexDirection: "column",
    //justifyContent: "center"
  },

  Container: {
    display: "flex",
    flexDirection: "row",
    //height: "100px",
    padding: "10px 0",
  },

  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));

const FourthSection = () => {
  const classes = useStyles();

  const imgList = [
    {
      title: "",
      link: "/assets/images/formations/1.png",
      description:
        "La pleine conscience est une approche méditative qui consiste à vivre pleinement l’instant présent",
    },

    {
      title: "",
      link: "/assets/images/formations/2.png",
      description: "",
    },

    {
      title: "",
      link: "/assets/images/formations/3.png",
      description: "",
    },

    {
      title: "",
      link: "/assets/images/formations/4.png",
      description: "",
    },
  ];

  return (
    <section className="section">
      <Container maxWidth="lg">
        <Box textAlign="center">
          <Grid container justify="space-between" alignItems="center">
            {imgList.map((item) => (
              <Grid key item md={2} xs={12}>
                <div className={classes.imgShadow}>
                  <img src={item.link} alt="" />

                  <h6 className="mt-3"> {item.title} </h6>
                </div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default FourthSection;
