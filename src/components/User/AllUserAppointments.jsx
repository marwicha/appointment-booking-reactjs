import React, { useState, useEffect } from "react";
import {
  Card,
  Typography,
  Container,
  Grid,
  CardContent,
  CardHeader,
  Button,
  Box,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppointmentService from "../../services/appointment.service";
import AuthService from "../../services/auth.service";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  colorWhite: {
    color: "white",
  },

  btn: {
    color: "white",
    backgroundColor: "#4b9fbc",
  },

  p: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "1rem",
    textAlign: "left",
    maxWidth: 500,
  },

  pRD: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "1rem",
    textAlign: "left",
    maxWidth: 500,
    color: "#e62638",
  },
}));

const AllUserAppointments = () => {
  const classes = useStyles();
  const [appointments, setAppointments] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  useEffect(() => {
    AppointmentService.getUserAppointments().then((response) => {
      setAppointments(response);
      console.log(response);
    });
  }, []);

  //change statu of appointment to cancel= true
  const handleUpdateAppointment = async (id, data) => {
    const newData = { ...data, annule: true };
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Êtes-vous sûr de vouloir annuler le rendez vous ?")) {
      AppointmentService.updateAppointment(id, newData).then(() => {
        alert("Rendez vous annulé, remboursement sous quelque jours!");
        AppointmentService.getUserAppointments().then((response) => {
          setAppointments(response);
        });
      });
    }
  };

  const displayHeure = (heure) => {
    switch (heure) {
      case "0":
        return "9h";
      case "1":
        return "10h";
      case "2":
        return "11h";
      case "3":
        return "12h";
      case "4":
        return "13h";
      case "5":
        return "14h";
      case "6":
        return "15h";
      case "7":
        return "16h";
      case "8":
        return "17h";
      default:
        return "date invalide";
    }
  };

  return (
    <Container maxWidth="lg">
      {appointments.length > 0 ? (
        <Grid container spacing={2} justify="flex-start" align="center">
          {appointments.map((app, index) => (
            <Grid item key={index} md={4} xs={12}>
              <Card>
                <CardHeader
                  style={{
                    backgroundColor:
                      app.annule === true ? "#e62638" : "#435f71",
                    color: "white",
                  }}
                  title={
                    displayHeure(app.slots.slot_time) +
                    "    " +
                    app.slots.slot_date
                  }
                />
                <CardContent>
                  {app.annule === true ? (
                    <>
                      <p className={classes.pRD}>Rendez vous annulé</p>
                      <Divider />
                    </>
                  ) : (
                    <>
                      <Button
                        variant="contained"
                        color="third"
                        className={classes.btn}
                        onClick={() => handleUpdateAppointment(app._id, app)}
                      >
                        Annuler le rendez vous
                      </Button>
                      <br></br>
                      <br></br>
                      <Divider />
                    </>
                  )}

                  <p className={classes.p}>
                    La prestation choisie: {app.prestation}
                  </p>

                  <Divider />

                  <p className={classes.p}>
                    Nom du patient: <br></br>
                    {currentUser.name}
                  </p>

                  <p className={classes.p}>
                    Numéro de téléphone: <br></br>
                    {currentUser.phone}
                  </p>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <p> Vous n'avez pas encore pris de rendez vous </p>
      )}
    </Container>
  );
};

export default AllUserAppointments;
