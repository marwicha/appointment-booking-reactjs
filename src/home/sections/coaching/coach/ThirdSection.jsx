import React from "react";
import { Grid, Container } from "@material-ui/core";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  
  h2: {
    fontFamily: "LEMON MILK Light",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "20px",
    alignItems: "center",
    textAlign: "justify"
  },

  benefice: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "18px",
    alignItems: "center",
    textAlign: "left",
    color: "#182731"
  },

  verticalLine: {
    borderLeft: "3px solid",
    paddingLeft: "20px"
  },

  p: {
    fontFamily: "LEMON MILK",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "12px",
    lineHeight: "30px",
    alignItems: "center",
    textAlign: "justify",
    color: "#182731"

  }
}));

const ThirdSection = () => {

  const classes = useStyles();
  
  return (

    <section className="section">

    <Container maxWidth="md" className="container-icon-formation text-center">
  
    <Grid container spacing={4}>
   

      <Grid sm={6} md={6} xs={12}>
        <div className="pt-8">

        <h4 className={clsx(classes.h2)}> Comment se passent les séances? </h4>
      </div>

      </Grid>


      <Grid sm={6} md={6} xs={12}>
      
      <div className={classes.verticalLine}>

      <p className={classes.p}>
    
     Je vous propose un accompagnement professionnel et personnalisé vous permettant d’atteindre vos objectifs
      et de révéler votre potentiel. 
     
<br></br>
Cette aide peut se faire également dans le but de surmonter ou de résoudre une difficulté. 
      
      </p> 
      
      </div>
    </Grid>
  
  </Grid>
  </Container>
  </section>
 

  );
};

export default ThirdSection;
