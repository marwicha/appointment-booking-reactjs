import React , { useState, useEffect } from 'react'
import { Box , Card, Typography, Container, Grid, CardContent, CardHeader } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppointmentService from '../../services/appointment.service'


const useStyles = makeStyles(({ palette, ...theme }) => ({
  
}));


const AllUserAppointments = () => {
  
   const [appointments, setAppointments] = useState([]);

    useEffect(() => {	 

    AppointmentService.getUserAppointments().then(response => {	

    setAppointments(response);
    })
  
  }, [])

  const displayHeure = (heure) => { 
     switch (heure) {

      case "0": return '9h';
      case "1": return '10h';
      case "2": return '11h';
      case "3": return '12h';
      case "4": return '13h';
      case "5": return '14h';
      case "6": return '15h';
      case "7": return '16h';
      case "8": return '17h';
      default:
       return "invalide"
    } 
    
  }


  return (
    <section>
    <Container maxWidth="lg">
    <Grid container spacing={2} md={12} xs={12} justify="flex-start" align="center" >
    
    { appointments.map((app, index) => 
        <Grid item key={index} md={3} xs={12}>
        <Card>
            <CardHeader 
              style={{
               backgroundColor: "#dfe5e6",
               color: "black"
              }}
              subheader={app.prestation}
            />

            <CardContent>
           
             <Typography variant="body2" color="textSecondary" component="p" align="left"> Date: {app.slots.slot_date} </Typography>
             <Typography variant="body2" color="textSecondary" component="p" align="left"> Heure: {displayHeure(app.slots.slot_time)} </Typography>
           
            </CardContent>

        </Card>
        </Grid>
        ) }
        </Grid>
        </Container>
        </section>
   ) }


export default AllUserAppointments