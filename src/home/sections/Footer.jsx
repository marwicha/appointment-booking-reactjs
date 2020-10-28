import React from "react";
import { Grid, Divider} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  footerSection: {
    marginTop: "2rem",
    background: "#FAFBFF",
    height: "400px"
  },

  wrapper: {
    position: "relative",
  },

  icon: {
    position: "absolute",
    background: "url('./assets/images/bg.png')"
  },

  p: {
    position: "absolute"
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={clsx( classes.footerSection)}>

      <div className="container">
     
          <Grid container lg={12} md={12} sm={12} xs={12}>

          <div className={clsx(classes.img, "brand m-6 ")}>

          <img src="./assets/images/logos/logo.png" alt="" />

           </div>

          </Grid>

        <Grid container lg={12} md={12} sm={12} xs={12} className="m-6">
          
          <Grid lg={1} md={1} sm={1}>

             <p> Accueil </p>

          </Grid>

            <Grid lg={1} md={1} sm={1}>

            <p> Massages </p>
            
          </Grid>

          <Grid lg={1} md={1} sm={1}>

          <p> Formations </p>
          
          </Grid>

          
        <Grid lg={1} md={1} sm={1}>

        <p> Coaching </p>
        
      </Grid>

      <Grid lg={2} md={2} sm={2}>

          <p> Somathotérapie </p>
          
        </Grid>

        </Grid>

        <Divider />
        
        <Grid container lg={12} md={12} sm={12} xs={12} justifyContent="center" alignItems="center" className="m-6">

          
        <Grid lg={3} md={3} sm={3}>

        <div className={classes.wrapper} >

        <img className={clsx(classes.icon)} src="./assets/images/send.png" alt="" />
        
        <p className={clsx(classes.p, "ml-8 mt-2")}> patrick.caillier@hotmail.fr </p> 

        </div>

        </Grid>

       <Grid lg={3} md={3} sm={3}>

       <img className={clsx(classes.icon)} src="./assets/images/marker.png" alt="" />
       
       <p className={clsx(classes.p, "ml-8 mt-2")}> +33 9 82 22 85 55 </p>
       
     </Grid>

     <Grid lg={4} md={4} sm={4}>
   
     <img className={clsx(classes.icon)} src="./assets/images/phone.png" alt="" />

     <p className={clsx(classes.p, "ml-8 mt-2")}> 446Bis Av. de Dunkerque 59130 Lambersart, France </p>
     
     </Grid>

        </Grid>


      </div>

      
    </div>
   
  );
};

export default Footer;
