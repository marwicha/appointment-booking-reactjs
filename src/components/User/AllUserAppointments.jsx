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
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppointmentService from "../../services/appointment.service";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  btn: {
    color: "white",
    backgroundColor: "#4b9fbc",
  },
}));

const AllUserAppointments = () => {
  const classes = useStyles();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    AppointmentService.getUserAppointments().then((response) => {
      setAppointments(response);
    });
  }, []);

  const deleteAppoint = (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Etes vous sûre de vouloir supprimer ce rendez-vous ?")) {
      AppointmentService.deleteAppointment(id).then(() => {
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
        <Grid
          container
          spacing={2}
          justify="flex-start"
          align="center"
        >
          {appointments.map((app, index) => (
            <Grid item key={index} md={4} xs={12}>
              <Card>
                <CardHeader
                  style={{
                    backgroundColor: "#dfe5e6",
                    color: "black",
                  }}
                  subheader={app.prestation}
                />

                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    align="left"
                  >
                    Date: {app.slots.slot_date}
                  </Typography>
                  <br></br>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    align="left"
                  >
                    Heure: {displayHeure(app.slots.slot_time)}
                  </Typography>
                  <br></br>
                </CardContent>
                <Box align="center">
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.btn}
                    onClick={() => deleteAppoint(app._id)}
                  >
                    Annuler
                  </Button>
                </Box>
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
