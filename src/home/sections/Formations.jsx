import React from "react"; 
import { Grid, Avatar, Box, Typography, Divider, CardContent, Button} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  button: {
    fontSize: 14,
    fontFamily: theme.typography.fontFamily,
    backgroundColor: `${palette.second}`,
    color: "white"
  },
  center: {
   display: "flex",
   flexWrap: "wrap",
   justifyContent: "center",
   alignItems: "center",
   fontSize: "14px"
  },

  card: {
    maxWidth: "500px",
    cursor: "pointer"
  },

  content: {
    textAlign: "center",
    padding: theme.spacing.unit * 2,
  },

  divider: {
    margin: `${theme.spacing.unit * 3}px 0`
  },
  avatar: {
    display: "inline-block",
    "&:not(:first-of-type)": {
      marginLeft: -theme.spacing.unit
    }
  },
  Icon1: {
    color: palette.third,
    fontSize:"35px",
    alignSelf:"center"
  },
  Icon2: {
    color: palette.fourth,
    fontSize:"35px"
  },
  Icon3: {
    color: palette.second,
    fontSize:"35px"
  },
  textContainer: {
    display: "flex",
    width: "100%",
    marginBottom: "10px",
    position: "relative"
  },

  icon: {
    position: "inline-block",
    padding: "3px",
    minWidth: "50px",
    textAlign: "center"
  },

  titleText: {
  position: "inline-block",
  width: "100%",
  padding: "10px",
  outline: "none"
  }
}));

const Massages = () => {
  const classes = useStyles();

  const formationsList = [
    {
      title: "Massage sur chaise assise",
      imgUrl: "/assets/images/logos/e.png",
      text: "Différents type de massages adapté au besoin de la  personne massée et des consigne sanitaire.",
      buttonTitle: "SAVOIR PLUS",
      color: classes.Icon1

    },
    {
      title: "Massage des 9 sens",
      imgUrl: "/assets/images/logos/a.png",
      text: "Différents type de massages adapté au besoin de la  personne massée et des consigne sanitaire.",
      buttonTitle: "SAVOIR PLUS",
      color: classes.Icon2
    },

    {
      title: "Meditation pleine consciense",
      imgUrl: "/assets/images/logos/z.png",
      text: "Différents type de massages adapté au besoin de la  personne massée et des consigne sanitaire.",
      buttonTitle: "SAVOIR PLUS",
      color: classes.Icon3
    },
  ];

  return (
    <section className="section">
    <div className="container text-center">
    <h1 className="font-bold text-32 text-error">
      IKDO
    </h1>
    <p className="mx-auto text-18 pb-7">
      Formations
    </p>

    <div className="container-formations">

    <Grid container spacing={0}  justify="center">
    {formationsList.map((item) => (

    <Grid sm={3} xs={12}>
    <div className={classes.card}>

    <img
    src={item.imgUrl}
    className="h-200 w-200 mt--3"
    alt=""
  />
    <CardContent className={classes.content}>
    <div className={classes.textContainer}>
       
     <h5 className={classes.titleText}>
      {item.title}
      </h5>
    </div>
      <div>
      <Typography
        variant={"caption"}
      >
     {item.text}

      </Typography>
      </div>
      <Divider className={classes.divider} light />
      <div className={classes.center}>
      <Button  className={clsx(
        "p-4",
        classes.button
      )} size="large"> 
      Savoir plus
      </Button>
      </div>
    </CardContent>
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
