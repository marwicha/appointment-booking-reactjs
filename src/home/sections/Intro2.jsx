import React from "react";
import Icon from "@material-ui/core/Icon";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import Slider from "../../components/Slider"
import Images from "../../home/common/images"

const useStyles = makeStyles(({ palette, ...theme }) => ({
  intro: {
    padding: "80px 0 0 !important",
    overflow: "visible !important",

    [theme.breakpoints.down("sm")]: {
      padding: "100px 0 0 !important",
    },
  },
  title: {
    textShadow: "0 4px 4px rgba(0, 0, 0, 0.22)",
  },
}));

const Intro2 = () => {
  const classes = useStyles();

  return (
    <section
      className={clsx("section text-white", classes.intro)}
      id="intro2"
    >
      <div className="container">
      <Slider images={Images} />
      </div>
    </section>
  );
};

export default Intro2;
