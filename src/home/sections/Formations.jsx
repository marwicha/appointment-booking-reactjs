import React from "react"; 
import { Grid, Typography, Button, Box, Container} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';


const useStyles = makeStyles(({ palette, ...theme }) => ({

  img: {
    maxWidth: 200,
    marginBottom: theme.spacing(2)
  },

  title: {
    color: "#4b9fbc"
  },

  btn: {
    color: "white",
    backgroundColor: "#4b9fbc"
  }

}));

const Massages = () => {
  const classes = useStyles();

  const formationsList = [
    {
      title: "Massage chaise assise",
      imgUrl: "/assets/images/logos/e.png",
      text: "Devenez praticien en massage sur chaise assise Amma."

    },
    {
      title: "Massage 9 sens",
      imgUrl: "/assets/images/logos/a.png",
      text: "Apprenez le massage pour les entreprises et les particuliers."
    },

    {
      title: "Meditation pleine consciense",
      imgUrl: "/assets/images/logos/z.png",
      text: "Retrouver du sens et de l'énergie pour entreprendre."
    },
  ];

  return (
    <section className="section">

     <Box mb={8} textAlign="center">
        <Container maxWidth="sm">
         
          <Typography variant="h4" component="span" color="primary" className="text-fourth"> Zen workshop </Typography>
          <Typography variant="subtitle1" color="textSecondary" paragraph={true}>Centre de formation</Typography>
        </Container>
   </Box>
    <Container maxWidth="lg" className="container-formations">

    <Box py={5} textAlign="center">


    <Grid container spacing={6}>
    {formationsList.map((item) => (

    <Grid item xs={12} md={4}>

    <Box p={3} pb={4}>
    
    <img  src={item.imgUrl} alt="" className={classes.img} />
    
    <Typography variant="subtitle1" component="h6" gutterBottom={true} className={classes.title}>{item.title}</Typography>
    <Typography variant="body2" component="p" gutterBottom={true}> {item.text}</Typography>
    

       <Box mt={3}>
            <Button variant="contained" color="primary" className={classes.btn} >
              <NavLink to="/Formations"> 
                 En savoir plus 
              </NavLink>
            </Button> 
        </Box>

  </Box>
</Grid>
  ))}
  </Grid>
  </Box>
  </Container>
  
    </section>
  );
};

export default Massages;
