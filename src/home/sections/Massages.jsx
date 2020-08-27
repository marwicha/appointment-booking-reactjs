import React from "react";
import { Grid, Avatar, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  card: {
    border: "1px solid transparent",
    transition: "all 250ms ease-in-out"
  },
  button: {
    fontSize: 14,
    fontFamily: theme.typography.fontFamily
  },
  center: {
   display: "flex",
   justifyContent: "center",
   alignItems: "center",
   height: "100px",
   fontSize: "14px"
  },

  imgStoneLeft: {
    position: "absolute",
    width: "500px",
    height: "515px",
    left: "-258px",
    top: "1069px",
    overflow: "visible",
    opacity: "1"
  },

  imgStoneRight: {
    position: "absolute",
    width: "450px",
    height: "428px",
    right: "-274px",
    top: "1674px",
    overflow: "visible",
    opacity: "1"
  }

}));

const Massages = () => {
  const classes = useStyles();
  const massagesList = [
    {
      name: "Massage assise",
      imgUrl: "/assets/images/massage-assis.png",
      buttonTitle: "SAVOIR PLUS"
    },
    {
      name: "Massage 9 sens",
      imgUrl: "/assets/images/massage-9sens.png",
      buttonTitle: "SAVOIR PLUS"
    },
  ];

  return (
    <section className= "section">

      <div className="container text-center">
      
      <h1 className="font-normal font-bold text-32 text-third">
        IKDO
      </h1>
      <p className="max-w-500 mx-auto text-18 mt-4">
        Massages et Somatothérapie
      </p>

      <div className="container">

      <img className={classes.imgStoneLeft} src="assets/images/logos/stone_left.png" 
      srcset="assets/images/logos/stone_left.png 1x, assets/images/logos/stone_1162727_1920_ca@2x.png 2x" alt=""/>


      <img className={classes.imgStoneRight} src="assets/images/logos/stone_right.png" 
      srcset="assets/images/logos/stone_right.png 1x, assets/images/logos/stone_1162727_1920_ca@2x.png 2x" alt=""/>

        <Grid container spacing={0} justify="center">
          {massagesList.map((item, ind) => (
            <Grid key={ind} item sm={4} xs={12}>
              <div
                className={clsx(
                  "text-center max-w-500",
                  classes.card
                )}
              >
                <div className="mb-6 ml-1 relative">
                  <Avatar
                    src={item.imgUrl}
                    className="h-260 w-260 inline-block"
                  ></Avatar>
                  
                </div>
                <h5 className="m-0 font-medium text-20">{item.name}</h5>
                <p className="font-light text-12 max-w-150 mx-auto">
                    text text text text text text text text
                </p>
                <div className={classes.center}>
                 <Box className="p-4 bg-button-savoirplus" size="large"> 
                 {item.buttonTitle}
                 </Box>

                 </div>
                
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
      
      </div>
    </section>
  );
};

export default Massages;
