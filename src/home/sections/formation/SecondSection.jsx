import React from "react";
import { Grid, Button } from "@material-ui/core";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, ...theme }) => ({

  h2: {
    fontFamily: "LEMON MILK Light"
  },

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

const SecondSection = () => {

  const classes = useStyles();
  
  return (
    <div className="container text-center">
      
    <h1 className="font-bold text-28 text-second mt-15">
      IKDO
    </h1>
    <h2 className={clsx(classes.h2, "text-24 text-second")}>
      Formation
    </h2>
    <div className="container">

        <Grid container spacing={0} justify="center">
            <Grid  sm={6} md={6} xs={12}>
              <div
                className={clsx(
                  "text-center",
                  classes.card
                )}
              >
               
              </div>
            </Grid>

            <Grid  sm={6} md={6} xs={12}>
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
