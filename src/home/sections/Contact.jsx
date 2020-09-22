import React from "react";
import { Grid, TextField, Button, Icon} from "@material-ui/core";
import ContactMap1 from "./ContactMap1";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  button: {
    fontSize: 14,
    fontFamily: theme.typography.fontFamily,
    backgroundColor: `${palette.second}`,
    color: "white"
  },

  icon: {
    background :"#EBF0FF",
    borderRadius: "60px",
    marginRight: "8px",
    marginBottom: "-7px"
  }

}));

const Contact = () => {

  const classes = useStyles();
  
  return (
    <section className="section" id="contact">
      <div className="container text-center">
        <h1 className="mt-0 mb-5 font-bold text-26 mx-auto">
          Contactez
        </h1>
        <h1 className="mt-0 mb-16 font-light text-26 mx-auto">
        nous
      </h1>
        <Grid md={12} sm={12} xs={12} container spacing={3} justify="center" alignItems="center">

        <Grid  md={4} sm={4} xs={12}>

          <div>
          <form>
            <TextField
              color="second"
              className="mb-4"
              label="Prénom"
              size="small"
              variant="outlined"
              fullWidth
            />
            <TextField
              className="mb-4"
              label="Email"
              size="small"
              variant="outlined"
              fullWidth
            />
            <TextField
              className="mb-4"
              label="Message"
              size="small"
              multiline
              rows={8}
              variant="outlined"
              fullWidth
            />

            <Button className={clsx(
              "p-4 w-full",
              classes.button
            )}> 
              Envoyer
            </Button>

          </form>
        </div>
</Grid>


          <Grid  md={4} sm={4} xs={12}>
           
          <div>
          
          <form>
            <p
              className="mb-25"
              fullWidth
              text-left
            >
            <Icon size="3x" color="second" className={classes.icon}>
            email
          </Icon>

            patrick.caillier@hotmail.fr
            </p>

            <p
              className="mb-25"
              fullWidth
              text-left
            >
          <Icon size="3x" color="second" className={classes.icon}>
            phone
          </Icon>

          +33 9 82 22 85 55

            </p>
            <p
              className="mb-25"
              fullWidth
              text-left
            >
            <Icon size="3x" color="second" className={classes.icon}>
            map-marker-alt
          </Icon>

            446Bis Av. de Dunkerque 59130 Lambersart, France

            </p>
            
            </form>

            </div>



          </Grid>
        </Grid>


           <ContactMap1
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div className="h-full" />}
            containerElement={<div className="h-full" />}
            mapElement={<div className="h-full" />}
          />

      </div>
    </section>
  );
};

export default Contact;
