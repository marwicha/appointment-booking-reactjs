import React from "react";
import { Grid, Button } from "@material-ui/core";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  button: {
    marginTop: "2rem !important",
    padding: "1rem 2rem 1rem 2rem",
    fontSize: 15,
    fontFamily: theme.typography.fontFamily,
    backgroundColor: palette.second,
    color: "white",
    borderRadius: "100px"
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
      
    <h1 className="font-normal text-28 text-second mt-10">
      Nos Formations
    </h1>

    <p> Choisir votre formation </p>

    <Grid container spacing={6} justify="center">
    {serviceList.map((item, ind) => (
      <Grid key={ind} item sm={3} md={3} xs={12}>
        <div className="text-center max-w-400 mx-auto">

          <Button className={ classes.button }> 
          {item.title}
          </Button>

        </div>
      </Grid>
    ))}
  </Grid>
  </div>
  </div>
 

  );
};

export default FirstSection;
