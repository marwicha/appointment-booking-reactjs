import React, { Component } from "react";
import {
  Dialog, MenuItem,
  TextField, Card,
  Button, Radio, 
  RadioGroup, Select, FormControlLabel,
  FormControl

} from "@material-ui/core";

import SnackBar from '@material-ui/core/SnackBar'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import MomentUtils from '@date-io/moment';
import moment from 'moment'
import fr from 'moment/locale/fr'

import {
  Step,
  Stepper,
  StepLabel,
  StepContent
} from "@material-ui/core"
import axios from "axios";

const API_BASE = "http://localhost:8082/";

class Appointment extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
     prestation: "",
      schedule: [],
      confirmationModalOpen: false,
      appointmentDateSelected: false,
      appointmentMeridiem: 0,
     // appointmentSlot: "",
      //validEmail: true,
      //validPhone: true,
      finished: false,
      smallScreen: window.innerWidth < 768,
      stepIndex: 0
    };

    
    this.renderAppointmentTimes = this.renderAppointmentTimes.bind(this)
    this.renderConfirmationString = this.renderConfirmationString.bind(this)
    this.renderAppointmentConfirmation = this.renderAppointmentConfirmation.bind(this)
    this.handleSetAppointmentMeridiem = this.handleSetAppointmentMeridiem.bind(this)
    this.handleNext = this.handleNext.bind(this)
    this.handlePrev = this.handlePrev.bind(this)
    this.handleSetAppointmentDate = this.handleSetAppointmentDate.bind(this)
    this.handleSetAppointmentSlot = this.handleSetAppointmentSlot.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.checkDisableDate = this.checkDisableDate.bind(this)
  }

  componentWillMount() {
    axios.get(API_BASE + `api/slots/all`).then(response => {
      console.log("response via db: ", response.data);
    });
  }
  handleSetAppointmentDate(date) {
    this.setState({ appointmentDate: date, confirmationTextVisible: true });
  }

  handleSetAppointmentSlot(event) {
     const newValue = event.target.value
     this.setState({
      appointmentSlot: newValue
    })
  }

  handleSetAppointmentMeridiem(event) {
    const newValue = event.target.value
    this.setState({
      appointmentMeridiem: newValue
    })
  }

  handleSubmit() {
    this.setState({ confirmationModalOpen: false });
    const newAppointment = {
      prestation: this.state.prestation,
      slot_date: moment(this.state.appointmentDate).format("YYYY-DD-MM"),
      slot_time: this.state.appointmentSlot
    };
    axios
      .post(API_BASE + "api/appointment/create", newAppointment)
      .then(response =>
        this.setState({
          confirmationSnackbarMessage: "Appointment succesfully added!",
          confirmationSnackbarOpen: true,
          processed: true
        })
      )
      .catch(err => {
        console.log(err);
        return this.setState({
          confirmationSnackbarMessage: "Appointment failed to save.",
          confirmationSnackbarOpen: true
        });
      });
  }
  
  handleNext = () => {
    const { stepIndex } = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2
    });
  };

  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };

  checkDisableDate(day) {
    const dateString = moment(day).format("YYYY-DD-MM");
   return (
     this.state.schedule[dateString] === true ||
     moment(day)
       .startOf("day")
       .diff(moment().startOf("day")) < 0
   );
  }

  handleDBReponse(response) {
    const appointments = response;
    const today = moment().startOf("day"); //start of today 12 am
    const initialSchedule = {};
    initialSchedule[today.format("YYYY-DD-MM")] = true;
    const schedule = !appointments.length ? initialSchedule
      : appointments.reduce((currentSchedule, appointment) => {
          const { slot_date, slot_time } = appointment;
          const dateString = moment(slot_date, "YYYY-DD-MM").format(
            "YYYY-DD-MM"
          );
          
          // eslint-disable-next-line no-unused-expressions
          !currentSchedule[slot_date]
            ? (currentSchedule[dateString] = Array(8).fill(false))
            : null;
          // eslint-disable-next-line no-unused-expressions
          Array.isArray(currentSchedule[dateString])
            ? (currentSchedule[dateString][slot_time] = true)
            : null;

          return currentSchedule;
        }, initialSchedule);

    for (let day in schedule) {
      let slots = schedule[day];
      // eslint-disable-next-line no-unused-expressions
      slots.length ? slots.every(slot => slot === true) ? (schedule[day] = true) : null : null;
    }

    this.setState({
      schedule: schedule
    });
  }
  renderAppointmentConfirmation() {
    const spanStyle = { color: "#00C853" };
    return (
      <section>
        <p>
          Prestation:{" "}
          <span style={spanStyle}>
            {this.state.prestation}
          </span>
        </p>
      
        <p>
          Appointment:{" "}
          <span style={spanStyle}>
            {moment(this.state.appointmentDate).format(
              "dddd[,] MMMM Do[,] YYYY"
            )}
          </span>{" "}
          at{" "}
          <span style={spanStyle}>
            {moment()
              .hour(9)
              .minute(0)
              .add(this.state.appointmentSlot, "hours")
              .format("h:mm a")}
          </span>
        </p>
      </section>
    );
  }

    renderConfirmationString() {
    const spanStyle = {color: '#00bcd4'}
    return this.state.confirmationTextVisible ? <h2 style={{ textAlign: this.state.smallScreen ? 'center' : 'left', color: '#bdbdbd', lineHeight: 1.5, padding: '0 10px', fontFamily: 'Roboto'}}>
      { <span>
        Scheduling a

          <span style={spanStyle}> 1 hour </span>

        appointment {this.state.appointmentDate && <span>
          on <span style={spanStyle}>{moment(this.state.appointmentDate).format('dddd[,] MMMM Do')}</span>
      </span>} {Number.isInteger(this.state.appointmentSlot) && <span>at <span style={spanStyle}>{moment().hour(9).minute(0).add(this.state.appointmentSlot, 'hours').format('h:mm a')}</span></span>}
      </span>}
    </h2> : null
  }
  
  renderAppointmentTimes() {
    if (!this.state.loading) {
      const slots = [...Array(8).keys()]
      return slots.map(slot => {
        const appointmentDateString = moment(this.state.appointmentDate).format('YYYY-DD-MM')
        const t1 = moment().hour(9).minute(0).add(slot, 'hours')
        const t2 = moment().hour(9).minute(0).add(slot + 1, 'hours')
        const scheduleDisabled = this.state.schedule[appointmentDateString] ? this.state.schedule[moment(this.state.appointmentDate).format('YYYY-DD-MM')][slot] : false
        const meridiemDisabled = this.state.appointmentMeridiem ? t1.format('a') === 'am' : t1.format('a') === 'pm'
        return  <FormControlLabel control={<Radio />} value={slot} key={slot}
                                  label={t1.format('h:mm a') + ' - ' + t2.format('h:mm a')} 
                                  style={{marginBottom: 15, display: meridiemDisabled ? 'none' : 'inherit'}}
                                  disabled={scheduleDisabled || meridiemDisabled}
                 />
      })
    } else {
      return null
    }
  }

  renderStepActions(step) {
    const { stepIndex } = this.state;

    return (
      <div style={{ margin: "12px 0" }}>
        <Button
          variant="contained"
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary="true"
          onClick={this.handleNext}
          style={{ marginRight: 12, backgroundColor: "#394d5b", color: "white" }}
        >
        {stepIndex === 2 ? "Valider" : "Suivant"}
        </Button>
       
        {step > 0 && (
          <Button
            
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onClick={this.handlePrev}
          >
          Retour
          </Button>
        )}
      </div>
    );
  }


  render() {
    const {
      finished,
      isLoading,
      smallScreen,
      stepIndex,
      confirmationModalOpen,
      confirmationSnackbarOpen,
      ...data
    } = this.state;

    const contactFormFilled = data.prestation
    console.log(data)

    const DatePickerExampleSimple = () => (
     <div>
      <MuiPickersUtilsProvider utils={MomentUtils}  locale='fr'>
        <DatePicker
        value={data.appointmentDate}
        mode={smallScreen ? "portrait" : "landscape"}
        onChange={(date) => this.handleSetAppointmentDate(date)}
        shouldDisableDate={day => this.checkDisableDate(day)}
        />
        
      </MuiPickersUtilsProvider>
      </div>
    );
    const modalActions = [
      <Button
        label="Cancel"
        primary="false"
        onClick={() => this.setState({ confirmationModalOpen: false })}
      />,
      <Button
        label="Confirm"
        style={{ backgroundColor: "#00C853 !important" }}
        primary="true"
        onClick={() => this.handleSubmit()}
      />
    ];
    return (
      <div>
        <section
          style={{
            maxWidth: !smallScreen ? "80%" : "100%",
            margin: "auto",
            marginTop: !smallScreen ? 20 : 0
          }}
        >
          <Card
            style={{
              padding: "12px 12px 25px 12px",
              height: smallScreen ? "100vh" : null
            }}
          >
            <Stepper
              activeStep={stepIndex}
              orientation="vertical"
              linear="false"
            >
              <Step>
                <StepLabel>
                  Choisir une date de rendez-vous
                </StepLabel>
                <StepContent>
                  {DatePickerExampleSimple()}
                  {this.renderStepActions(0)}
                </StepContent>
              </Step>
              <Step disabled={!data.appointmentDate}>
                <StepLabel>
                  Choisir l'heure de rendez-vous
                </StepLabel>
                <StepContent>
                <FormControl>
                   <Select
                    value={data.appointmentMeridiem}
                    onChange={this.handleSetAppointmentMeridiem }>
                    <MenuItem value={0}>AM</MenuItem>
                    <MenuItem value={1}>PM</MenuItem>
                  </Select>
                  
                  </FormControl>
                  <div> selected : {data.appointmentMeridiem}</div>
                    <FormControl>
                  <RadioGroup
                    name="value"
                    value={data.appointmentSlot }
                    onChange={this.handleSetAppointmentSlot}>
                    {this.renderAppointmentTimes()}
                  </RadioGroup>
                  </FormControl>
                   <div> selected: {data.appointmentSlot}</div>
                  
                </StepContent>
              </Step>
              <Step>
                <StepLabel>
                  Choisir la prestation
                </StepLabel>
                <StepContent>
                  <p>
                    <section>
                    <TextField
                      style={{ display: 'block' }}
                      name="prestation"
                      onChange={(evt, newValue) => this.setState({ prestation: newValue })}/>
                
                      <Button
                        style={{ display: "block", backgroundColor: "#00C853",
                                 marginTop: 20, maxWidth: 100 }}
                        variant="contained"
                        labelPosition="before"
                        primary="true"
                        fullWidth={true}
                        onClick={() =>
                          this.setState({
                            confirmationModalOpen: !this.state
                              .confirmationModalOpen
                          })
                        }
                        disabled={!contactFormFilled || data.processed}
                      >
                      {
                          contactFormFilled
                            ? "Schedule"
                            : "Fill out your information to schedule"
                      }
                      </Button>
                    </section>
                  </p>
                  {this.renderStepActions(2)}
                </StepContent>
              </Step>
            </Stepper>
          </Card>
          <Dialog
            modal={true}
            open={confirmationModalOpen}
            actions={modalActions}
            title="Confirm your appointment"
          >
            {this.renderAppointmentConfirmation()}
          </Dialog>
          <SnackBar
            open={confirmationSnackbarOpen || isLoading}
            message={
              isLoading ? "Loading... " : data.confirmationSnackbarMessage || ""
            }
            autoHideDuration={10000}
            onRequestClose={() =>
              this.setState({ confirmationSnackbarOpen: false })
            }
          />
        </section>
      </div>
    );
  }
}
export default Appointment;