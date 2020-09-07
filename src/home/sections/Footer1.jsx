import React from "react";
import { Grid, Button, Icon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  footerSection: {
    "& h4:after": {
      content: '" "',
      position: "absolute",
      bottom: -8,
      left: 0,
      height: 2,
      width: 64,
      background: palette.third
    },
    marginTop: "2rem",
    backgroundColor: palette.second
  },
}));

const Footer1 = () => {
  const classes = useStyles();

  return (
    <div className={clsx("bg-light-dark", classes.footerSection)} id="footer1">
      <div className="container">
        <Grid container>
          <Grid item lg={4} md={4} sm={12}>
            <div className="p-8 h-full elevation-z3">
              <h4 className="text-14 mb-6 relative">A propos</h4>
              <p className="text-inherit">
                IKDO By ZEN WORKSHOP
              </p>
              <p className="text-inherit">Coordonnées: </p>
               <p className="text-inherit">Tel : 09 82 22 85 55 ou : 07 86 99 59 40 </p>

<p className="text-inherit"> Heures d'ouverture: </p>
<p className="text-inherit"> Du lundi au samedi de 9h à 21h. Ouvert le dimanche sur deux </p>

<p className="text-inherit">Adresse: </p>
<p className="text-inherit">446 Bis Avenue de Dunkerque 59130 - LAMBERSART </p>
            </div>
          </Grid>
          <Grid item lg={4} md={4} sm={12}>
            <div className="p-8 h-full elevation-z3">
              <h4 className="text-14 mb-6 relative">Prestations</h4>
              <div className="px-4 my-8 flex items-center mx--4">
                <div className="pl-4">
                  <h5 className="m-0 p-0 text-14">Massages</h5>
                </div>
              </div>
              <div className="px-4 mt-8 flex items-center mx--4">
                <div className="pl-4">
                  <h5 className="m-0 p-0 text-14">Somathotérapie</h5>
                 
                </div>
              </div>

              <div className="px-4 mt-8 flex items-center mx--4">
              <div className="pl-4">
                <h5 className="m-0 p-0 text-14">Formations</h5>
               
              </div>
            </div>

            </div>
          </Grid>
          <Grid item lg={4} md={4} sm={12}>
          <div className="p-8 h-full elevation-z3">
          <h4 className="text-14 mb-6 relative">Contact</h4>
          <div className="px-4 my-8 flex items-center mx--4">
            <Icon className="text-secondary">mail</Icon>
            <div className="pl-4">
              <h5 className="m-0 p-0 text-14">Email</h5>
              <p className="m-0 p-0 text-inherit">email@abc.com</p>
            </div>
          </div>
          <div className="px-4 mt-8 flex items-center mx--4">
            <Icon className="text-secondary">location_on</Icon>
            <div className="pl-4">
              <h5 className="m-0 p-0 text-14">Adresse</h5>
              <p className="m-0 p-0 text-inherit">
              446 Avenue de Dunkerque, 59130 Lambersart
              </p>
            </div>
          </div>
        </div>
          </Grid>
        </Grid>
      </div>
    </div>
   
  );
};

export default Footer1;
