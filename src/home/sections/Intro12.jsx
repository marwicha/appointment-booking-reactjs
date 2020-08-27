import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, IconButton, Icon, CardMedia} from "@material-ui/core";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  introWrapper: {
    padding: "5rem 0rem",
    backgroundImage: 'url("/assets/images/abstract-bg-1.png")',
    backgroundPosition: "top",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  },
}));

const Intro12 = () => {
  const classes = useStyles();

  return (
    <section className="section" id="intro12">
      <div className={classes.introWrapper}>
        <div className="container">
          <div className="max-w-700 mx-auto text-center">
          

          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro12;
