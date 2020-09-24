import React from "react";
import { Grid, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({

  center: {
   justifyContent: "center",
   alignItems: "center",
   height: "127px",
   position: "relative",
   top: "0",
   left: "0",
   background: "#FAFBFF",
   margin: "0 auto",
  textAlign: "center"
  },

  avatar: {
    position: "absolute",
    bottom: "60%",
    left: "40%",
    border: "2px solid #394d5b"
  },

  h1: {
    fontFamily: "LEMON MILK",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "26px",
    lineHeight: "21px",
    alignItems: "center",
    textAlign: "center",
    position: "absolute",
    bottom: "18%",
    left: "38%",
    color: "#384C5A"
  },

  h2: {
    fontFamily: "LEMON MILK Light",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "26px",
    lineHeight: "21px",
    alignItems: "center",
    textAlign: "center",
    position: "absolute",
    bottom: "18%",
    left: "49%",
    color: "#384C5A"
  },
  
  p :{
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "30px",
    textAlign: "left"
  }

}));

const IntroPatrick = () => {
  const classes = useStyles();

  return (
    <section className= "section">

      <div className="container-intro-patrick text-center">
                <div className={clsx( classes.center , "text-center" )}>

                  <Avatar
                    src="/assets/images/patrick.png"
                    className={clsx ("h-160 w-160", classes.avatar)}
                  ></Avatar>

                  <h1 className={classes.h1}> PATRICK </h1>
                  
                  <h1 className={classes.h2}> CAILLER </h1>
            
                </div>

                <Grid container spacing={0} justify="space-around" alignItems="flex-start">
                
                  <Grid lg={5} md={5} sm={5} xs={12}>
                   
                  <p className={clsx( classes.p)}>
                      En 2000, lors d’un voyage aux Etats-Unis, Patrick découvre la petite ville de Sedona dont la grande particularité réside, selon ses habitants, dans son grand nombre de «Vortex », points de concentration d’énergie terrestre influençant la vie spirituelle de chacun.

                      Les falaises au camaïeu de rouge, ocre et brun contrastent avec le vert d’une forêt luxuriante. Les tribus indiennes Hopi, Sinagua et Yavapai y célébraient leurs cultes, notamment à travers le fameux massage-bien-être aux pierres chaudes.
                      
                      La beauté des lieux et le sentiment de sérénité qui s’en dégagent attirent depuis longtemps les amateurs de philosophie « New Age »                       
                      </p>
                      
                  </Grid>

                  <Grid lg={5} md={5} sm={5} xs={12}>
                   
                      <p className={clsx( classes.p)}>

                      qui viennent se ressourcer à Sedona et faire le plein d’ondes positives.

                      Après un court séjour dans l'océan indien il découvre également les techniques de bien-être ayurvédiques.
                      
                      C’est une véritable révélation pour Patrick qui, après avoir apprivoisé les massages-bien-être des quatre coins du monde, décide de faire bénéficier les "gens du Nord" de ces techniques de bien-être. C’est en 2006 que IKDO voit le jour !
                      
                      Patrick CAILLIER cherche ainsi, grâce à son savoir-faire, son expérience, ses formations, à donner, à transmettre, à travers ses mains tous les bienfaits du toucher-massage®.
                      </p>
                      
                  </Grid>
              </Grid>
               
      </div>
    </section>
  );
};

export default IntroPatrick;
