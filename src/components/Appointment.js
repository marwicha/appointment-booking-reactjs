/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from "react";
import {
  Dialog, Card,
  Button, Radio, 
  RadioGroup, FormControlLabel,
  FormControl,StepButton, DialogActions,
  DialogContent, Select, MenuItem, Container,
  Grid, Typography, Box, Chip

} from "@material-ui/core";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { makeStyles } from '@material-ui/core/styles';
import TopBar from "../../src/home/sections/TopBar";
import AppointmentService from '../services/appointment.service'

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
   const [prestation, setPrestation] = useState("");
   const [schedule, setSchedule] = useState([]);
   const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
   const [confirmationSnackbarOpen, setConfirmationSnackbarOpen] = useState(false);
   const [appointmentDateSelected, setAppointmentDateSelected] = useState(false);
   const [confirmationTextVisible, setConfirmationTextVisible] = useState(false);

   const [appointmentDate, setAppointmentDate] = useState("");
   const [appointmentSlot, setAppointmentSlot] = useState("");


   const [finished, setFinished] = useState(false);
   const [stepIndex, setStepIndex] = useState(0);
   const [appointments, setAppointments] = useState([]);
   const [smallScreen, setSmallScreen] = useState(window.innerWidth < 768);

    // this.state = {
    //   loading: true,
    //   prestation: "",
    //   schedule: [],
    //   confirmationModalOpen: false,
    //   confirmationSnackbarOpen: false,
    //   appointmentDateSelected: false,
    //   confirmationTextVisible: false,
    //   finished: false,
    //   smallScreen: window.innerWidth < 768,
    //   stepIndex: 0,
    //   appointments :[]
    // };
    
    // this.renderAppointmentTimes = this.renderAppointmentTimes.bind(this)
    // this.renderConfirmationString = this.renderConfirmationString.bind(this)
    // this.renderAppointmentConfirmation = this.renderAppointmentConfirmation.bind(this)
    // this.handleNext = this.handleNext.bind(this)
    // this.handleSetAppointmentDate = this.handleSetAppointmentDate.bind(this)
    // this.handleSetAppointmentSlot = this.handleSetAppointmentSlot.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
    // this.checkDisableDate = this.checkDisableDate.bind(this)
    // this.renderConfirmationString = this.renderConfirmationString.bind(this)
    


  useEffect(() => {
    axios.get(API_BASE + `api/slots/all`).then(response => {
    });
    });

  useEffect(() => {
   
    AppointmentService.getUserAppointments().then(response => {

    setAppointments(response.data);

    })
  })

   const handleNext = () => {
    return (stepIndex < 3) ? this.setStepIndex(stepIndex + 1) : null
  };

  const handleSetAppointmentDate = date => {
    handleNext()
    setAppointmentDate(date)
    setConfirmationTextVisible(true );
  }

  const handleSetAppointmentSlot = slot => {
    handleNext()
    setAppointmentSlot(slot)
  }

const handleChangePrestation = (name, value) => {
  if(value==null)
    return;
  handleNext()
  this.setState({[name]: value })
  }

  const handleDBReponse = response => {
   const appointments = response;
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

    for (let day in schedule) {
      let slots = schedule[day]
      slots.length ? (slots.every(slot => slot === true)) ? schedule[day] = true : null : null
    }

    this.setState({
      schedule,
      loading: false
    });
  }


   const handleSubmit = () => {
    this.setState({ confirmationModalOpen: false });
    const newAppointment = {
      prestation: prestation,
      slot_date: moment(appointmentDate).format("YYYY-DD-MM"),
      slot_time: appointmentSlot
    };

    AppointmentService.createAppointment(newAppointment)
      .then(response =>
        this.setState({
          confirmationSnackbarMessage: "Le rendez-vous est confirmé!",
          confirmationSnackbarOpen: true,
          processed: true
        })
      )
      .catch(err => {
        return this.setState({
          confirmationSnackbarMessage: "Vous devez vous connecter pour prendre un rendez vous.",
          confirmationSnackbarOpen: true
        });
      });

  }

   const checkDisableDate = currentDay => {
    const dateString = moment(currentDay).format('YYYY-DD-MM') 

    return schedule[dateString] === true || moment(currentDay).startOf('day').diff(moment().startOf('day')) < 0 
    || currentDay.day() === 0 || currentDay.day() === 6 || currentDay.week() === 3
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
        return  <FormControlLabel control={<Radio />} value={slot} key={slot}
                                  labelPlacement="end"
                                  label={t1.format('h:mm a') + ' - ' + t2.format('h:mm a')}
                                  disabled={scheduleDisabled}
                 />
      })
    } else {
      return null
    }
  }

  const resize = () => {
    this.setState({ smallScreen: window.innerWidth < 768 })
  }

   const classes = useStyles()
    const {
     ...data
    } = this.state;

    const contactFormFilled = data.appointmentSlot

    const displayAppointmenthis = appointments.map((app, index) =>
    <div key={index}>
      <p>{app.prestation}</p>
    </div>
  );


    const DatePickerExampleSimple = () => (
     <div>
      <MuiPickersUtilsProvider utils={MomentUtils}  locale='fr'>
        <DatePicker
        style={{ marginTop: 20, marginLeft: 20 }}
        value={data.appointmentDate}
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
        onClick={() => this.setState({ confirmationModalOpen: false })}
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
                <StepButton onClick={() => this.setState({ stepIndex: 0 })}>
                  Choisir la prestation
                </StepButton>
                <StepContent>

                <FormControl>
                  <Select
                    fullWidth
                    value={data.prestation}
                    onChange={(event) => handleChangePrestation("prestation", event.target.value)}>
                    <MenuItem value="Massage 9 sens"> Massage 9 sens </MenuItem>
                    <MenuItem value="Méditation"> Méditation </MenuItem>
                  </Select>
                  </FormControl>

                </StepContent>
              </Step>


              <Step>
                 <StepButton onClick={() => this.setState({ stepIndex: 1 })}>
                   Choisir une date de rendez-vous
                </StepButton>
                <StepContent>
                  {DatePickerExampleSimple()}
                  
                </StepContent>
              </Step>
              <Step disabled={!data.appointmentDate}>
                <StepButton  onClick={() => this.setState({ stepIndex: 2 })}>
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
                    value={data.appointmentSlot}
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
                        onClick={() => this.setState({ confirmationModalOpen: !confirmationModalOpen })}
                        disabled={!contactFormFilled || data.processed }
                      >
                      {
                          contactFormFilled && "Valider"
                      }
                      </Button>
              </Step>
             
            </Stepper>
            </Card>
          <Dialog
            modal="true"
            open={confirmationModalOpen}
            title="Confirmer votre rendez vous">
            
            <DialogContent>
             {this.renderAppointmentConfirmation()}  
             </DialogContent>

            <DialogActions>
            {modalActions}
            </DialogActions>
          </Dialog>
         
        </section>
      </div>
    );
}
export default Appointment;