import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  introWrapper: {
    position: "relative",
    height: "100%",
    overflow: "hidden",
  },
  intro: {
    padding: "7.5rem 0rem",
    maxWidth: 500,
    [theme.breakpoints.down("sm")]: {
      padding: "2.5rem 0rem",
    },
    zIndex: 5,
  },
  lightWhiteBG: {
    position: "absolute",
    display: "block",
    top: 0,
    bottom: 0,
    left: "calc(50% - 500px)",
    right: "calc(50% - 500px)",
    background: "rgba(255,255,255,0.75)",
    clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",

    [theme.breakpoints.down("xs")]: {
      right: 0,
      left: 0,
      clipPath: "none",
      background: "rgba(255,255,255,0.7)",
    },
  },
}));

const Intro10 = () => {
  const classes = useStyles();

  return (
    <section className="section" id="intro10">
      <div className={classes.introWrapper}>
        <div className="container">
          <div
            className={clsx(
              "relative mx-auto text-center flex-column justify-center items-center",
               classes.intro
            )}
          >
           
            <h1 className="font-medium text-44 text-third m-0">
              IKDO
            </h1>
            <h2 className="font-medium text-44 text-white m-0">
              By Zen Workshop
            </h2>
            <p className="mb-6 max-w-400 mx-auto">
            IKDO - Spa - Centre de Massages depuis 2006.
            </p>
            <div className="flex max-w-400 mx-auto flex-wrap mb-2">
              <div className="text-center mr-8 mb-8">
                <div className="m-0 text-28">032</div>
                <div className="m-0">Days</div>
              </div>
              <div className="text-center mr-8 mb-8">
                <div className="m-0 text-28">19</div>
                <div className="m-0">Hours</div>
              </div>
              <div className="text-center mr-8 mb-8">
                <div className="m-0 text-28">24</div>
                <div className="m-0">Minutes</div>
              </div>
              <div className="text-center mb-8">
                <div className="m-0 text-28">51</div>
                <div className="m-0">Seconds</div>
              </div>
            </div>
            <Button
              variant="contained"
              color="primary"
              className="rounded px-6"
            >
              Practisien Patrick
            </Button>
          </div>
          <div className={classes.lightWhiteBG}></div>
        </div>
      </div>
     
    </section>
  );
};

export default Intro10;
