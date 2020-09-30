import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  footerSection: {
    marginTop: "2rem",
    background: "#FAFBFF"
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={clsx( classes.footerSection)}>
      <div className="container">
     
          <Grid container lg={12} md={12} sm={12} xs={12}>

          

          <div className={clsx(classes.img, "brand")}>
          <img src="./assets/images/logos/logo.png" alt="" />
         </div>

          </Grid>


          <Grid lg={12} md={12} sm={12} xs={12}>

          <Grid lg={3} md={3} sm={3} xs={12}>
              
          <h1> Accueil </h1>
           
          </Grid>

          <Grid lg={3} md={3} sm={3} xs={12}>
              
          <h1> Formations </h1>
           
          </Grid>

          <Grid lg={3} md={3} sm={3} xs={12}>
              
          <h1> Massages </h1>
           
          </Grid>


        </Grid>
      </div>
    </div>
   
  );
};

export default Footer;
