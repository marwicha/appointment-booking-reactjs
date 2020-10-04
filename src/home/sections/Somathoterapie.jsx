import React from "react";
import { Grid, Avatar, Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  card: {
    border: "1px solid transparent",
    transition: "all 250ms ease-in-out"
  },

  button: {
    margin: "0 1rem 1rem 0 !important",
    padding: "1rem 2rem 1rem 2rem",
    fontSize: 10,
    background: `${palette.second} !important`,
    color: "white",
    fontFamily: "LEMON MILK",
    fontStyle: "normal",
    fontWeight: 300,
    borderRadius: "50px",
    alignItems: "center",
    textAlign: "center"
},

  center: {
   justifyContent: "center",
   alignItems: "center",
   height: "100px",
   fontSize: "14px"
  },

  p: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "30px",
    textAlign: "left",
    padding: "1rem 1rem 1rem 1rem"
  },

  h1: {
    fontFamily: "LEMON MILK",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "26px",
    lineHeight: "21px",
    alignItems: "center",
    textAlign: "center",
    color: "#384C5A"
  },

}));

const Somathoterapie = () => {

  const classes = useStyles();


  return (
    <section className= "section">

      <div className="container text-center">
     
        <Grid container lg={12} md={12} sm={12} xs={12} spacing={0} justify="center" alignItems="center">

            <Grid lg={6} md={6} sm={6} xs={12}>
              <div
                className={clsx(
                  "text-center",
                  classes.card
                )}
              >
                
                  <img
                    src="./assets/images/somato.png"
                    className="full-h full-w"
                    alt=""
                  />
                  
                
              </div>
            </Grid>


            <Grid lg={6} md={6} sm={6} xs={12}>
              
            <h1 className={classes.h1}>Somatothérapie</h1>

            <p className={classes.p}>C’est une pratique qui instaure une relation d’aide par un toucher psycho-corporel.

            Le praticien prend en compte vos ressentis corporels et permet de replacer 
            votre corps au centre de votre attention. Cette approche vous invite à entrer en contact avec ce que vous ressentez, 
            avec votre vécu corporel et intérieur de la situation que vous vivez.

            </p>

            <Button className={classes.button}> En savoir plus</Button>
            </Grid>


        
        </Grid>
      </div>
      
    </section>
  );
};

export default Somathoterapie;
