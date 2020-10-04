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
    marginTop: "1rem !important",
    padding: "1rem 2rem 1rem 2rem",
    fontSize: 12,
    background: `${palette.second} !important`,
    color: "white",
    fontFamily: "LEMON MILK",
    fontStyle: "normal",
    fontWeight: 300,
    borderRadius: "50px",
    alignItems: "center",
    textAlign: "center"
},

  p: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "20px",
    lineHeight: "30px",
    padding: "1rem 1rem 1rem 1rem",
    alignItems: "center",
    textAlign: "left",
    paddingTop: "8rem",
    maxWidth: "400px",
    margin: "0 auto"
  },

  h1: {
    fontFamily: "LEMON MILK",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "32px",
    lineHeight: "21px",
    textAlign: "center",
    color: "#384C5A",
    paddingTop: "2rem"
  },

}));

const Somathoterapie = () => {

  const classes = useStyles();


  return (
    <section className= "section">

      <div className="container text-center">
     
        <Grid container lg={12} md={12} sm={12} xs={12} justifyContent="flex-start" alignItems="flex-start">

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


            <Grid lg={6} md={6} sm={6} xs={12} >
              
            <h1 className={classes.h1} >Somatothérapie</h1>

            <p className={classes.p} >
            
            C’est une pratique qui instaure une relation d’aide par un toucher psycho-corporel.

            <br></br>
            <br></br>

            Le praticien prend en compte vos ressentis corporels et permet de replacer 
            votre corps au centre de votre attention.
            
            Cette approche vous invite à entrer en contact avec ce que vous ressentez, 
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
