import React from "react"; 
import { Grid, Typography, Divider, CardContent, Button} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import clsx from "clsx";


const useStyles = makeStyles(({ palette, ...theme }) => ({
  button: {
    fontSize: 14,
    fontFamily: theme.typography.fontFamily,
    borderRadius: "0 50px",
    background: `${palette.second} !important`,
    color: "white !important",
    width: "163px",
    height: "60px",
    textAlign: "left"
  },

  center: {
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
    margin: `${theme.spacing.unit * 6}px 0`
  },

  avatar: {
    display: "inline-block",
    "&:not(:first-of-type)": {
      marginLeft: -theme.spacing.unit
    }
  },

  textContainer: {
    width: "100%",
    marginBottom: "20px",
    position: "relative",
    justifyContent: "center",
    textAlign: "left",
  },


  p: {
    fontFamily: "LEMON MILK",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "0.90rem",
    lineHeight: "1.66",
    textAlign: "left",
    margin: "0 auto"
  }

}));

const Massages = () => {
  const classes = useStyles();

  const formationsList = [
    {
      title: "Massage",
      title2: "Chaise assise",
      imgUrl: "/assets/images/logos/e.png",
      text: "Devenez praticien en massage sur chaise assise Amma. ",
      buttonTitle: "En savoir plus"

    },
    {
      title: "Massage",
      title2: "9 Sens",
      imgUrl: "/assets/images/logos/a.png",
      text: "Apprenez le massage des 9 sens pour les professionnelles et les particuliers.",
      buttonTitle: "En savoir plus"
    },

    {
      title: "Meditation",
      title2: "Pleine consciense",
      imgUrl: "/assets/images/logos/z.png",
      text: "Retrouver du sens et de l'énergie pour entreprendre.",
      buttonTitle: "En savoir plus"
    },
  ];

  return (
    <section className="section">
    <div className="container text-center">
   
    <div className="container-formations">

    <h1 className="font-bold text-32 text-fourth pt-7">
    Zen workshop
  </h1>
  <p className="mx-auto text-18 pb-7">
    Formations
  </p>
  

    <Grid container spacing={0} justify="center" alignItems="center">
    {formationsList.map((item) => (

    <Grid sm={3} xs={12}>
    <div className={classes.card}>

    <img
     src={item.imgUrl}
     className="h-200 w-200"
     alt=""
    />

    <CardContent className={classes.content}>
       
     <h5 className={classes.titleText}>
     {item.title}
      </h5>

     <h5 className={classes.titleText}>
      {item.title2}
      </h5>

      <p className={clsx(classes.p, "max-w-210 mt-5")}>
     {item.text}
     </p>
    
      <Divider className={classes.divider} light />

      <div className={classes.center}>

      <Button  className={clsx(
        "p-4",
        classes.button

      )} size="large"> 

      <NavLink to="/Formations"> 
        En savoir plus 
      </NavLink>

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
