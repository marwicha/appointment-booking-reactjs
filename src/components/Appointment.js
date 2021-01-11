/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from "react";
import {
  Dialog, Card,
  Button, Radio, 
  RadioGroup, FormControlLabel,
  FormControl,StepButton, DialogActions,
  DialogContent, Select, MenuItem, Container,
  Grid, Typography, Box, Chip, InputLabel

} from "@material-ui/core";
import SnackBar from '@material-ui/core/SnackBar'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { makeStyles } from '@material-ui/core/styles';
import TopBar from "../../src/home/sections/TopBar";
import AppointmentService from '../services/appointment.service'
import AuthService from "../services/auth.service";
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import MomentUtils from '@date-io/moment';
import moment from 'moment'
import fr from 'moment/locale/fr'

import {
  Step,
  Stepper,
  StepContent
} from "@material-ui/core"
import axios from "axios";

const API_BASE = "http://localhost:8082/";

const useStyles = makeStyles(({ palette, ...theme }) => ({

}))

 const Appointment = (props) => {
 
   const [loading, setLoading] = useState(true);
   const [schedule, setSchedule] = useState([]);
   const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
   const [confirmationSnackbarOpen, setConfirmationSnackbarOpen] = useState(false);
   const [confirmationSnackbarMessage, setConfirmationSnackbarMessage] = useState(false);
   const [confirmationTextVisible, setConfirmationTextVisible] = useState(false);

   const [appointmentDate, setAppointmentDate] = useState(new Date());
   const [appointmentSlot, setAppointmentSlot] = useState("");
   const [prestation, setPrestation] = useState("");

   const [stepIndex, setStepIndex] = useState(0);
   const [appointments, setAppointments] = useState([]);
   const [smallScreen, setSmallScreen] = useState(window.innerWidth < 768);
   const [processed, setProcessed] = useState(false);

   const [currentUser, setCurrentUser] = useState("")

   const [bookedAppointments, setBookedAppointments] = useState([]) //to track booked appointments
   const [bookedDatesObject, setBookedDatesObject] = useState({}) //tracks dates coupled to their slots
   const [fullDays, setFullDays] = useState([]) //to track full days
 

  useEffect(() => {
    axios.get(API_BASE + `api/slots/all`).then(response => {
    });
    }, []);

  useEffect( () => {
   const user = AuthService.getCurrentUser();

   console.log(user)
    if(user) {
       setCurrentUser(user)
    }
    
  }, [])

  useEffect(() => {	 

    AppointmentService.getUserAppointments().then(response => {	

    setAppointments(response);

    })
  }, [appointments])


  useEffect(() => {

    const saveResults = async() => {

      const appointments = await AppointmentService.getAllAppointments()
      const appointmentData = appointments;
      console.log(appointments)
      setBookedAppointments({appointmentData});

      //added logic to exclude booked slots and fully booked dates.

      let bookedDates=[];
      let bookedDatesObj = {};
      let bookedSlots = []

      appointmentData.map(appointment=> {

        return (!bookedDates.includes(appointment.slots.slot_date)) 

        && (bookedDates.push(appointment.slots.slot_date),
            bookedSlots.push(appointment.slots.slot_time))
          })

      bookedDates.map(bookedDate => {

        let newArray=[]

        appointmentData.map(appointment => { return (appointment.slots.slot_date === bookedDate) && newArray.push(appointment.slots.slot_time)})

        return bookedDatesObj[bookedDate] = newArray
      })

      for (let bookedDay in bookedDatesObj) {
        
        let obj = bookedDatesObj[bookedDay];
        (obj.length === 8) && setFullDays([...fullDays, bookedDay])
      }
      setBookedDatesObject(bookedDatesObj) 
      console.log(appointmentData)
      return {appointmentData};
    }

     saveResults()
    .then(result => {handleFetch(result)})
    .catch(err=> handleFetchError(err));

  })
  
   const handleNext = () => {
    return (stepIndex < 3) ? setStepIndex(stepIndex + 1) : null
  };

  const handleSetAppointmentDate = date => {
    handleNext()
    setAppointmentDate(date)
    setConfirmationTextVisible(true);
  }

  const handleSetAppointmentSlot = slot => {
    handleNext()
    setAppointmentSlot(slot)
  }

 const handleChangePrestation = (prestation) => {
    handleNext()
    setPrestation(prestation)
  }

  
  const handleFetch = (response) => {
    const { appointments } = response
    const initSchedule = {}
    const today = moment().startOf('day')
    initSchedule[today.format('YYYY-DD-MM')] = true
    const schedule = !appointments.length ? initSchedule : appointments.reduce((currentSchedule, appointment) => {
      const { date, slot } = appointment
      const dateString = moment(date, 'YYYY-DD-MM').format('YYYY-DD-MM')
      !currentSchedule[date] ? currentSchedule[dateString] = Array(8).fill(false) : null
      Array.isArray(currentSchedule[dateString]) ?
        currentSchedule[dateString][slot] = true : null
      return currentSchedule
    }, initSchedule)

    //Imperative x 100, but no regrets
    for (let day in schedule) {
      let slots = schedule[day]
      slots.length ? (slots.every(slot => slot === true)) ? schedule[day] = true : null : null
    }

    setSchedule(schedule)
    setLoading(false)
  }

  const handleFetchError = (err) => {
    console.log(err)
    setConfirmationSnackbarMessage("Error fetching data")
    setConfirmationSnackbarOpen(true)
  }


   const handleSubmit = () => {
    setConfirmationModalOpen(false)
    const newAppointment = {
      prestation: prestation,
      slot_date: moment(appointmentDate).format("YYYY-DD-MM"),
      slot_time: appointmentSlot
    };

    AppointmentService.createAppointment(newAppointment)
      .then(response => {
        setConfirmationSnackbarMessage("Le rendez-vous est confirmé!")
        setConfirmationSnackbarOpen(true);
        setProcessed(true);
      })
      .catch(err => {
        setConfirmationSnackbarMessage("Vous devez vous connecter afin de prendre un rendez vous")
        setConfirmationSnackbarOpen(true)
      });
  }



   const checkDisableDate = currentDay => {
    const dateString = moment(currentDay).format('YYYY-DD-MM') 

    return schedule[dateString] === true || moment(currentDay).startOf('day').diff(moment().startOf('day')) < 0 
    || currentDay.day() === 0 || currentDay.day() === 6 || currentDay.week() === 3 || fullDays.includes(dateString);
  }

  const renderAppointmentConfirmation = () => {
    const spanStyle = { color: 'green' }
    return <section>
      <p> Prestation choisie: <span style={spanStyle}>{prestation}</span></p>
      <p> Rendez vous: <span style={spanStyle}>{moment(appointmentDate).format('dddd[,] MMMM Do[,] YYYY')} </span> 
       à <span style={spanStyle}>{moment().hour(9).minute(0).add(appointmentSlot, 'hours').format('h:mm a')}</span></p>
    </section>
  }

  const renderConfirmationString = () => {
    const spanStyle = {color: 'green'}
    return confirmationTextVisible ?
     <h2 style={{ textAlign: smallScreen ? 'center' : 'left', color: '#bdbdbd', lineHeight: 1.5, padding: '0 10px', fontFamily: 'Roboto'}}>
      { <span>
        prise de rendez-vous d'une

        <span style={spanStyle}> 1 heure </span>

        de rendez-vous {appointmentDate && <span>
          le <span style={spanStyle}>{moment(appointmentDate).format('dddd[,] MMMM Do')}</span>
      </span>} {Number.isInteger(appointmentSlot) && 
        
        <span> à <span style={spanStyle}>{moment().hour(9).minute(0).add(appointmentSlot, 'hours').format('h:mm a')}</span></span>}
      </span>}
    </h2> : null
  }


   const renderAppointmentTimes = () => {
    if (loading) {
      const slots = [...Array(8).keys()]
      return slots.map(slot => {
        const appointmentDateString = moment(appointmentDate).format('YYYY-DD-MM')
        const t1 = moment().hour(9).minute(0).add(slot, 'hours')
        const t2 = moment().hour(9).minute(0).add(slot + 1, 'hours')
        const scheduleDisabled = schedule[appointmentDateString] ? schedule[moment(appointmentDate).format('YYYY-DD-MM')][slot] : false
       
        let slotFilled;   
        for (let bookedDay in bookedDatesObject) {
          let obj = bookedDatesObject[bookedDay];
          (bookedDay === appointmentDateString) 
          && (slotFilled = 
            Object.values(obj).map(Number).includes(slot));
        }

        return <FormControlLabel control={<Radio />} value={slot} key={slot}
                                  labelPlacement="end"
                                  label={t1.format('h:mm a') + ' - ' + t2.format('h:mm a')}
                                  disabled={scheduleDisabled || slotFilled }/>

      })
    } else {
      return null
    }
  }

    const classes = useStyles()

    const contactFormFilled = appointmentSlot

    const displayUserAppointments = appointments.map((app, index) =>
    <div key={index}>
      <p> {app.prestation} </p>
      <p> {app.slots.slot_date} </p>
    </div>
  );

    const DatePickerExampleSimple = () => (
     <div>
      <MuiPickersUtilsProvider utils={MomentUtils}  locale='fr'>
        <DatePicker
        style={{ marginTop: 20, marginLeft: 20 }}
        value={appointmentDate}
        mode={smallScreen ? "portrait" : "landscape"}
        onChange={(date) => handleSetAppointmentDate(date)}
        shouldDisableDate={day => checkDisableDate(day) }
        variant="dialog"
        />
        
      </MuiPickersUtilsProvider>
      </div>
    );
    const modalActions = [
      
      <Button
        primary="false"
        onClick={() => setConfirmationModalOpen(false) }
      > Annuler </Button>,
      <Button
        style={{ backgroundColor: "#00C853 !important" }}
        primary="true"
        onClick={() => handleSubmit()}
      >
       Confirmer </Button>
      
    ];
    return (
      <div>
      <TopBar />
        <section className= "section"
          style={{
            maxWidth: !smallScreen ? '50%' : '100%',
            margin: 'auto',
            marginTop: !smallScreen ? 20 : 0,
          }}
        >
        {renderConfirmationString()}
          <Card
           style={{
              padding: '70px 10px 25px 10px',
              height: smallScreen ? '100vh' : null
            }}
          >
            <Stepper
             activeStep={stepIndex}
              linear="false"
              orientation="vertical"
            >

             <Step disabled={loading}>
                <StepButton onClick={() => setStepIndex(0)}>
                  Choisir la prestation
                </StepButton>
                <StepContent>

                <FormControl>
                
                  <Select
                    fullWidth
                    value={prestation}
                    onChange={(event) => handleChangePrestation(event.target.value)}
                    >

                    <MenuItem selected value="Massage 9 sens"> Massage 9 sens </MenuItem>
                    <MenuItem value="Méditation"> Méditation </MenuItem>
                  </Select>
                  </FormControl>

                </StepContent>
              </Step>


              <Step>
                 <StepButton onClick={() => setStepIndex(1)}>
                   Choisir une date de rendez-vous
                </StepButton>
                <StepContent>
                  {DatePickerExampleSimple()}
                  
                </StepContent>
              </Step>
              <Step disabled={!appointmentDate}>
                <StepButton  onClick={() => setStepIndex(2)}>
                   Choisir l'heure de rendez-vous
                </StepButton>
                <StepContent>
                <FormControl component="fieldset">
                  <RadioGroup
                    style={{
                      marginTop: 15,
                      marginLeft: 15
                    }}
                    name="appointmentTimes"
                    value={appointmentSlot}
                    onChange={(evt, val) => handleSetAppointmentSlot(val)}
                    >
                    {renderAppointmentTimes()}
                  </RadioGroup>
                  </FormControl>
                   
                </StepContent>
                
                      <Button
                        style={{ display: "block", backgroundColor: "#f5f5f8",
                                 marginTop: 20, maxWidth: 100 }}
                        variant="contained"
                        fullWidth="true"
                        onClick={() => setConfirmationModalOpen(!confirmationModalOpen)}
                        disabled={!contactFormFilled || processed }
                      >
                      {
                          contactFormFilled && "Valider"
                      }
                      </Button>
              </Step>
             
            </Stepper>
            </Card>

            { currentUser && 
            <div>
             Vos rendez vous:
            {displayUserAppointments} 
            </div>
            }

          <Dialog
            modal="true"
            open={confirmationModalOpen}
            title="Vous confirmer votre rendez vous ?">
            
            <DialogContent>
             {renderAppointmentConfirmation()}  
             </DialogContent>

            <DialogActions>
            {modalActions}
            </DialogActions>
          </Dialog>

           <SnackBar	
            open={confirmationSnackbarOpen}	
            message={confirmationSnackbarMessage || ''}	
            autoHideDuration={10000}	
            onClose={() => setConfirmationSnackbarOpen(false)} 	
          />

        </section>
      </div>
    );
}
export default Appointment;