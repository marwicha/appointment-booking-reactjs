import React from "react";
import { Grid, Card } from "@material-ui/core";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, ...theme }) => ({

  container: {
     height: "600px"
  },

  h1: {
    fontFamily: "LEMON MILK",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    color: "#182731",
    lineHeight: "30px",
    width: "560px",
    margin: "0 auto"

  },

  h2: {
    fontFamily: "LEMON MILK Light",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "20px",
    color: "#182731"
  },

  button: {
    marginTop: "2rem !important",
    padding: "1rem 2rem 1rem 2rem",
    fontSize: 15,
    fontFamily: theme.typography.fontFamily,
    backgroundColor: palette.second,
    color: "white",
    borderRadius: "100px"
  },

  icon: {
    marginLeft: "34rem",
    marginTop: "2rem"
  }
}));

const SecondSection = () => {

  const classes = useStyles();
  
  return (
    <div className={clsx(classes.container, "container")}>
      
    <h1 className="font-bold text-28 text-center text-second mt-15">
      IKDO
    </h1>
    <h2 className={clsx(classes.h2, "text-center text-26 text-second")}>
      Formation
    </h2>

    <img src='/assets/images/formations/formation.png' alt="" className={classes.icon} />

    <div className="mt-30">

        <Grid container spacing={3}>

        <Grid  sm={1} md={1} xs={12}>
        </Grid>

            <Grid  lg={6} xl={6} sm={5} md={5} xs={12}>
             
             <h1 className={classes.h1}> IKDO EST AUSSI UN CENTRE DE FORMATIONS </h1>
             <h1 className={classes.h1}>ET D'ATELIERS D'INITIATIONS: </h1>
             <h2 className={classes.h2}> Pour acquérir des notions en Toucher-Massage® Ikdo </h2>

              <p>Ikdo est doté d’un centre de formation qui a pour but de vous faire acquérir les notions de bases en toucher-massage®,
               et sur les autres techniques associées aux autres sens tels que la vue, 
              l'utilisation des huiles essentielles et la respiration (odorat), utilisation des bols chantants (ouïe).</p>
               
            </Grid>

            <Grid  sm={4} md={4} xs={12}>
              <div className="mb-6 ml-1 relative">
               <img src="/assets/images/formations/9sens.png" alt="" />
              </div>
           
            </Grid>

        </Grid>
      </div>
      

      
  </div>
 

  );
};

export default SecondSection;
