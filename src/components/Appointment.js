/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import {
  Dialog, Card,
  Button, Radio, 
  RadioGroup, FormControlLabel,
  FormControl,StepButton, DialogActions,
  DialogContent, Select, MenuItem

} from "@material-ui/core";
import TopBar from "../../src/home/sections/TopBar";
import AppointmentService from '../services/appointment.service'

import SnackBar from '@material-ui/core/SnackBar'
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

class Appointment extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      prestation: "",
      schedule: [],
      confirmationModalOpen: false,
      confirmationSnackbarOpen: false,
      appointmentDateSelected: false,
      confirmationTextVisible: false,
      finished: false,
      smallScreen: window.innerWidth < 768,
      stepIndex: 0
    };
    
    this.renderAppointmentTimes = this.renderAppointmentTimes.bind(this)
    this.renderConfirmationString = this.renderConfirmationString.bind(this)
    this.renderAppointmentConfirmation = this.renderAppointmentConfirmation.bind(this)
    this.handleNext = this.handleNext.bind(this)
    this.handleSetAppointmentDate = this.handleSetAppointmentDate.bind(this)
    this.handleSetAppointmentSlot = this.handleSetAppointmentSlot.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.checkDisableDate = this.checkDisableDate.bind(this)
    this.renderConfirmationString = this.renderConfirmationString.bind(this)
  }

  componentWillMount() {
    axios.get(API_BASE + `api/slots/all`).then(response => {
      console.log("response via db: ", response.data);
    });
  }

   handleNext = () => {
    const { stepIndex } = this.state
    return (stepIndex < 3) ? this.setState({ stepIndex: stepIndex + 1}) : null
  };

  handleSetAppointmentDate(date) {
    this.handleNext()
    this.setState({ appointmentDate: date, confirmationTextVisible: true });
  }

  handleSetAppointmentSlot(slot) {
     this.handleNext()
    this.setState({ appointmentSlot: slot })
  }

handleChangePrestation(name, value) {
  if(value==null)
    return;
  this.handleNext()
  this.setState({[name]: value })
  }

  handleDBReponse(response) {
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


   handleSubmit() {
    this.setState({ confirmationModalOpen: false });
    const newAppointment = {
      prestation: this.state.prestation,
      slot_date: moment(this.state.appointmentDate).format("YYYY-DD-MM"),
      slot_time: this.state.appointmentSlot
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
        console.log(err);
        return this.setState({
          confirmationSnackbarMessage: "Vous devez vous connecter pour prendre un rendez vous.",
          confirmationSnackbarOpen: true
        });
      });
  }

   checkDisableDate(currentDay) {
    const dateString = moment(currentDay).format('YYYY-DD-MM') 

    return this.state.schedule[dateString] === true || moment(currentDay).startOf('day').diff(moment().startOf('day')) < 0 
    || currentDay.day() === 0 || currentDay.day() === 6 || currentDay.week() === 3
  }

  renderAppointmentConfirmation() {
    const spanStyle = { color: 'green' }
    return <section>
      <p> Prestation choisie: <span style={spanStyle}>{this.state.prestation}</span></p>
      <p> Rendez vous: <span style={spanStyle}>{moment(this.state.appointmentDate).format('dddd[,] MMMM Do[,] YYYY')} </span> 
       à <span style={spanStyle}>{moment().hour(9).minute(0).add(this.state.appointmentSlot, 'hours').format('h:mm a')}</span></p>
    </section>
  }

  renderConfirmationString() {
    const spanStyle = {color: 'green'}
    return this.state.confirmationTextVisible ?
     <h2 style={{ textAlign: this.state.smallScreen ? 'center' : 'left', color: '#bdbdbd', lineHeight: 1.5, padding: '0 10px', fontFamily: 'Roboto'}}>
      { <span>
        prise de rendez-vous d'une

        <span style={spanStyle}> 1 heure </span>

        de rendez-vous {this.state.appointmentDate && <span>
          le <span style={spanStyle}>{moment(this.state.appointmentDate).format('dddd[,] MMMM Do')}</span>
      </span>} {Number.isInteger(this.state.appointmentSlot) && 
        
        <span> à <span style={spanStyle}>{moment().hour(9).minute(0).add(this.state.appointmentSlot, 'hours').format('h:mm a')}</span></span>}
      </span>}
    </h2> : null
  }
  
  renderAppointmentTimes() {
    if (this.state.loading) {
      const slots = [...Array(8).keys()]
     
      return slots.map(slot => {
        const appointmentDateString = moment(this.state.appointmentDate).format('YYYY-DD-MM')
        const t1 = moment().hour(9).minute(0).add(slot, 'hours')
        const t2 = moment().hour(9).minute(0).add(slot + 1, 'hours')
        const scheduleDisabled = this.state.schedule[appointmentDateString] ? this.state.schedule[moment(this.state.appointmentDate).format('YYYY-DD-MM')][slot] : false
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

  resize() {
    this.setState({ smallScreen: window.innerWidth < 768 })
  }

  render() {
    const {
     stepIndex, loading, navOpen, smallScreen, confirmationModalOpen, confirmationSnackbarOpen, ...data
    } = this.state;

    const contactFormFilled = data.appointmentSlot

    const DatePickerExampleSimple = () => (
     <div>
      <MuiPickersUtilsProvider utils={MomentUtils}  locale='fr'>
        <DatePicker
        style={{ marginTop: 20, marginLeft: 20 }}
        value={data.appointmentDate}
        mode={smallScreen ? "portrait" : "landscape"}
        onChange={(date) => this.handleSetAppointmentDate(date)}
        shouldDisableDate={day => this.checkDisableDate(day) }
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
        onClick={() => this.handleSubmit()}
      >
       Confirmer </Button>
      
    ];
    return (
       <div>
      <TopBar />
        <section className= "section"
          style={{
            maxWidth: !smallScreen ? '80%' : '100%',
            margin: 'auto',
            marginTop: !smallScreen ? 20 : 0,
          }}
        >
        {this.renderConfirmationString()}
          <Card
           style={{
              padding: '10px 10px 25px 10px',
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
                    onChange={(event) => this.handleChangePrestation("prestation", event.target.value)}>
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
                    onChange={(evt, val) => this.handleSetAppointmentSlot(val)}
                    >
                    {this.renderAppointmentTimes()}
                  </RadioGroup>
                  </FormControl>
                   
                </StepContent>
                
                      <Button
                        style={{ display: "block", backgroundColor: "#f5f5f8",
                                 marginTop: 20, maxWidth: 100 }}
                        variant="contained"
                        fullWidth="true"
                        onClick={() => this.setState({ confirmationModalOpen: !this.state.confirmationModalOpen })}
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
          <SnackBar
            open={confirmationSnackbarOpen}
            message={data.confirmationSnackbarMessage || ''}
            autoHideDuration={10000}
            onClose={() => this.setState({ confirmationSnackbarOpen: false })} 
          />
        </section>
      </div>
    );
  }
}
export default Appointment;