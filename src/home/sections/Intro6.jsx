import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import clsx from "clsx";
import { CardMedia } from '@material-ui/core';


const useStyles = makeStyles(({ palette, ...theme }) => ({
  containerHolder: {
    background: `linear-gradient(45deg, ${palette.primary.main} 0%,${palette.primary.light} 100%)`,
  },
  container: {
    paddingTop: "6rem !important",
    paddingBottom: "6rem !important",
  },
}));

const Intro6 = () => {
  const classes = useStyles();

  return (
    <section className="section" id="intro6">
      <div className={classes.containerHolder}>
        <div
          className={clsx(
            "container flex-column justify-center items-center text-white",
            classes.container
          )}
        >
     
        </div>
      </div>
    </section>
  );
};

export default Intro6;
