import React from "react";
import {
  Grid,
  Avatar,
  Button,
  Container,
  Box,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  container: {
    position: "relative",
    textAlign: "center",
  },

  containerImg: {
    width: "100%",
    backgroundRepeat: "no-repeat",
  },

  contentText: {
    position: "absolute",
    left: "5%",
    top: "24%",
    maxWidth: "36em",

    [theme.breakpoints.down("xs")]: {
      width: "40%",
      height: "49%",
      overflow: "hidden",
      /* white-space: nowrap; */
      textOverflow: "ellipsis",
    },

    [theme.breakpoints.down("sm")]: {
      width: "40%",
      height: "49%",
      overflow: "hidden",
      /* white-space: nowrap; */
      textOverflow: "ellipsis",
    },

    [theme.breakpoints.down("md")]: {
      width: "40%",
      height: "49%",
      overflow: "hidden",
      /* white-space: nowrap; */
      textOverflow: "ellipsis",
    },
  },

  containerAvatar: {
    position: "absolute",
    top: "0%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },

  containerName: {
    position: "absolute",
    top: "15%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    [theme.breakpoints.down("xs")]: {
      top: "38%",
    },

    [theme.breakpoints.down("sm")]: {
      top: "32%",
    },

    [theme.breakpoints.down("md")]: {
      top: "32%",
    },
  },

  avatar: {
    width: theme.spacing(14),
    height: theme.spacing(14),

    [theme.breakpoints.down("xs")]: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },

    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
  },

  typo: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },

  p: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "1rem",
    lineHeight: "30px",
    textAlign: "left",
  },

  buttonAction: {
    position: "absolute",
    top: "83%",
    left: "13%",
    transform: "translate(-50%, -50%)",
  },
}));

const IntroPatrick = () => {
  const classes = useStyles();

  return (
    <>
      <section className="section">
        <Container maxWidth="lg" className={classes.container}>
          <img
            src="./assets/images/bgPatrick.png"
            alt=""
            className={classes.containerImg}
          />

          <Box textAlign="center" className={classes.containerAvatar}>
            <Avatar
              alt=""
              src="/assets/images/patrick.png"
              className={classes.avatar}
            />
          </Box>

          <Box textAlign="center" className={classes.containerName}>
            <Typography className={classes.typo} variant="h4" component="span">
              {" "}
              PATRICK{" "}
            </Typography>
            <Typography
              className={classes.typo}
              variant="h4"
              color="textSecondary"
              component="span"
            >
              {" "}
              CAILLIER{" "}
            </Typography>
          </Box>

          <Box className={classes.contentText} align="left">
            <p className={classes.p}>
              En 1997 j’ai vécu de l’intérieur ce qu’on appelle un burn-out,
              après un épuisement total physique et intellectuel j’avais du mal
              à cette époque à assumer mon corps. Je ressentais de l’aversion
              envers mon physique et ma personne ; j’avais parallèlement des
              soucis d’addictions (tabac alcool) pour compenser mon mal être.
              Pour sortir de ces problèmes j’ai du me faire accompagner par de
              nombreux thérapeutes..
            </p>
          </Box>

          <Button className={classes.buttonAction} size="small">
            {" "}
            En savoir plus
          </Button>
        </Container>
      </section>
    </>
  );
};

export default IntroPatrick;
