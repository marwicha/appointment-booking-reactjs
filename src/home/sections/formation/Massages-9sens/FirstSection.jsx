import React from "react";
import { Grid, Button } from "@material-ui/core";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  button: {
    marginTop: "1rem !important",
    padding: "1rem 2rem 1rem 2rem",
    fontSize: 14,
    backgroundColor: palette.second,
    color: "white",
    fontFamily: "LEMON MILK",
    fontStyle: "normal",
    fontWeight: 300,
    borderRadius: "50px",
    alignItems: "center",
    textAlign: "center"
  },

  containerTabs: {
    background: "#EBF0FF",
    paddingTop: "1rem",
    margin: "0 auto"
  },

  h1: {
   fontFamily: "LEMON MILK",
   fontStyle: "normal",
   fontWeight: "normal",
   fontSize: "26px",
   alignItems: "center",
   textAlign: "center"
}
}));

const FirstSection = () => {

  const classes = useStyles();
  const serviceList = [
    {
      title: "Massage des 9 sens"
    },
    {
      title: "Massage sur chaise assise"
    },
    {
      title: "Méditation pleine consciense"
    },
  ];
  
  return (
  
    <div className="section-intro-formations">
    <div className="container-formation text-center">
      
    <h1 className={classes.h1}>
      Nos Formations
    </h1>

    <p className="pb-8"> Choisir votre formation </p>

    <div className={clsx(classes.containerTabs)}>
    <Grid container spacing={6} justify="center">
    {serviceList.map((item, ind) => (
      <Grid key={ind} item sm={3} md={3} xs={12}>
        <div className="text-center">

          <Button className={ classes.button }> 
          {item.title}
          </Button>

        </div>
      </Grid>
    ))}
  </Grid>
  </div>
  </div>
  </div>
 

  );
};

export default FirstSection;
