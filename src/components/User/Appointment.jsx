/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from "react";
import {
  Dialog,
  Card,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  StepButton,
  DialogActions,
  DialogContent,
  Select,
  MenuItem,
  CardHeader,
  Step,
  Stepper,
  StepContent,
  InputLabel,
} from "@material-ui/core";

import Snackbar from "@material-ui/core/Snackbar";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

//services
import AppointmentService from "../../services/appointment.service";
import AuthService from "../../services/auth.service";
import PrestationService from "../../services/prestation.service";
import SlotService from "../../services/slot.service";

import MomentUtils from "@date-io/moment";
import moment from "moment";
import fr from "moment/locale/fr";

import { makeStyles } from "@material-ui/core/styles";
//Stripe js
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
//component
import Payement from "./Payment";

const stripePromise = loadStripe(
  "pk_test_51Iv0X0Idt2OtpHpwAsbJ5pQv2QCWfpaR9FS8aaxvgXb5DhfEXXbRVC1H4GMr7HaVL4pki2jjpTYbeIuEPyPpK3cJ00ygUHxsGY"
);

const useStyles = makeStyles(({ palette, ...theme }) => ({}));

const Appointment = (props) => {
  const classes = useStyles();

  const [schedule, setSchedule] = useState([]);
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [confirmationSnackbarOpen, setConfirmationSnackbarOpen] =
    useState(false);
  const [confirmationSnackbarMessage, setConfirmationSnackbarMessage] =
    useState(false);

  const [confirmationTextVisible, setConfirmationTextVisible] = useState(false);

  const [appointmentDate, setAppointmentDate] = useState(new Date());
  const [appointmentSlot, setAppointmentSlot] = useState("");
  const [prestation, setPrestation] = useState({ name: "", price: "" });

  const [stepIndex, setStepIndex] = useState(0);
  const [smallScreen, setSmallScreen] = useState(window.innerWidth < 768);
  const [processed, setProcessed] = useState(false);

  const [currentUser, setCurrentUser] = useState("");

  const [bookedAppointments, setBookedAppointments] = useState([]); //to track booked appointments
  const [bookedDatesObject, setBookedDatesObject] = useState({}); //tracks dates coupled to their slots
  const [fullDays, setFullDays] = useState([]); //to track full days

  const [prestations, setPrestations] = useState([]);
  const [payed, setPayed] = useState(false);

  const handleCallback = (childData) => {
    setPayed(childData);
  };

  useEffect(() => {
    SlotService.getAllTimeSlots().then((response) => {});
  }, []);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  useEffect(() => {
    PrestationService.getAllPrestations().then((response) => {
      setPrestations(response);
    });
  }, []);

  useEffect(() => {
    const saveResults = async () => {
      const appointmentData = await AppointmentService.getAllAppointments();

      setBookedAppointments({ appointmentData });

      let bookedDates = [];
      let bookedDatesObj = {};
      let bookedSlots = [];

      appointmentData.map((appointment) => {
        return (
          !bookedDates.includes(appointment.slots.slot_date) &&
          appointment.annule === false &&
          (bookedDates.push(appointment.slots.slot_date),
          bookedSlots.push(appointment.slots.slot_time))
        );
      });

      bookedDates.map((bookedDate) => {
        let newArray = [];

        appointmentData.map((appointment) => {
          return (
            appointment.slots.slot_date === bookedDate &&
            appointment.annule === false &&
            newArray.push(appointment.slots.slot_time)
          );
        });

        return (bookedDatesObj[bookedDate] = newArray);
      });

      for (let bookedDay in bookedDatesObj) {
        let obj = bookedDatesObj[bookedDay];

        obj.length === 8 && setFullDays([...fullDays, bookedDay]);
      }
      setBookedDatesObject(bookedDatesObj);
      return { appointmentData };
    };

    saveResults()
      .then((result) => {
        handleFetch(result);
      })
      .catch((err) => console.log(err));
  }, [fullDays]);

  const handleNext = () => {
    return stepIndex < 4 ? setStepIndex(stepIndex + 1) : null;
  };

  const handleSetAppointmentDate = (date) => {
    handleNext();
    setAppointmentDate(date);
    setConfirmationTextVisible(true);
  };

  const handleSetAppointmentSlot = (slot) => {
    handleNext();
    setAppointmentSlot(slot);
  };

  const handleFetch = (response) => {
    const { appointments } = response;
    const initSchedule = {};
    const today = moment().startOf("day");
    initSchedule[today.format("DD-MM-YYYY")] = true;
    const schedule = !appointments.length
      ? initSchedule
      : appointments.reduce((currentSchedule, appointment) => {
          const { date, slot } = appointment;
          const dateString = moment(date, "DD-MM-YYYY").format("DD-MM-YYYY");
          !currentSchedule[date]
            ? (currentSchedule[dateString] = Array(8).fill(false))
            : null;
          Array.isArray(currentSchedule[dateString])
            ? (currentSchedule[dateString][slot] = true)
            : null;
          return currentSchedule;
        }, initSchedule);

    //Imperative x 100, but no regrets
    for (let day in schedule) {
      let slots = schedule[day];
      slots.length
        ? slots.every((slot) => slot === true)
          ? (schedule[day] = true)
          : null
        : null;
    }

    setSchedule(schedule);
  };

  const handleSubmit = () => {
    setConfirmationModalOpen(false);
    const newAppointment = {
      prestation: prestation.name,
      slot_date: moment(appointmentDate).format("YYYY-MM-DD"),
      slot_time: appointmentSlot,
    };

    AppointmentService.createAppointment(newAppointment)
      .then((response) => {
        setConfirmationSnackbarMessage("Le rendez-vous est confirmé!");
        setConfirmationSnackbarOpen(true);
        setProcessed(true);
      })
      .catch((err) => {
        setConfirmationSnackbarMessage(
          "Une erreur est survenue, veuillez contacter l'administrateur"
        );
        setConfirmationSnackbarOpen(true);
      });
  };

  const checkDisableDate = (currentDay) => {
    const dateString = moment(currentDay).format("YYYY-MM-DD");

    return (
      schedule[dateString] === true ||
      moment(currentDay).startOf("day").diff(moment().startOf("day")) < 0 ||
      currentDay.day() === 0 ||
      currentDay.day() === 6 ||
      currentDay.week() === 3 ||
      fullDays.includes(dateString)
    );
  };

  const renderAppointmentConfirmation = () => {
    const spanStyle = { color: "green" };
    return (
      <section>
        <p>
          Prestation choisie: <span style={spanStyle}>{prestation.name}</span>
        </p>
        <p>
          Rendez vous:
          <span style={spanStyle}>
            {moment(appointmentDate).format("dddd[,] MMMM Do[,] YYYY")}
          </span>
          à
          <span style={spanStyle}>
            {moment()
              .hour(9)
              .minute(0)
              .add(appointmentSlot, "hours")
              .format("h:mm a")}
          </span>
        </p>
      </section>
    );
  };

  const renderConfirmationString = () => {
    const spanStyle = { color: "green" };
    return confirmationTextVisible ? (
      <h2
        style={{
          textAlign: smallScreen ? "center" : "left",
          color: "#bdbdbd",
          lineHeight: 1.5,
          padding: "0 10px",
          fontFamily: "Roboto",
        }}
      >
        {
          <span>
            prise de rendez-vous d'une
            <span style={spanStyle}> 1 heure </span>
            de rendez-vous
            {appointmentDate && (
              <span>
                le
                <span style={spanStyle}>
                  {moment(appointmentDate).format("dddd[,] MMMM Do")}
                </span>
              </span>
            )}
            {Number.isInteger(appointmentSlot) && (
              <span>
                à
                <span style={spanStyle}>
                  {moment()
                    .hour(9)
                    .minute(0)
                    .add(appointmentSlot, "hours")
                    .format("h:mm a")}
                </span>
              </span>
            )}
          </span>
        }
      </h2>
    ) : null;
  };

  const renderAppointmentTimes = () => {
    const slots = [...Array(9).keys()];
    delete slots[3];

    return slots.map((slot) => {
      const appointmentDateString =
        moment(appointmentDate).format("YYYY-MM-DD");

      const t1 = moment().hour(9).minute(0).add(slot, "hours");
      const t2 = moment()
        .hour(9)
        .minute(0)
        .add(slot + 1, "hours");

      const scheduleDisabled = schedule[appointmentDateString]
        ? schedule[moment(appointmentDate).format("YYYY-MM-DD")][slot]
        : false;

      let slotFilled;
      for (let bookedDay in bookedDatesObject) {
        let obj = bookedDatesObject[bookedDay];
        bookedDay === appointmentDateString &&
          (slotFilled = Object.values(obj).map(Number).includes(slot));
      }

      return (
        <FormControlLabel
          control={<Radio />}
          value={slot}
          key={slot}
          labelPlacement="end"
          label={t1.format("h:mm a") + " - " + t2.format("h:mm a")}
          disabled={scheduleDisabled || slotFilled}
        />
      );
    });
  };

  const contactFormFilled = appointmentSlot;

  const DatePickerExampleSimple = () => (
    <div>
      <MuiPickersUtilsProvider utils={MomentUtils} locale="fr">
        <DatePicker
          style={{ marginTop: 20, marginLeft: 20 }}
          value={appointmentDate}
          mode={smallScreen ? "portrait" : "landscape"}
          onChange={(date) => handleSetAppointmentDate(date)}
          shouldDisableDate={(day) => checkDisableDate(day)}
          minDate={new Date()}
          variant="dialog"
        />
      </MuiPickersUtilsProvider>
    </div>
  );

  const modalActions = [
    <Button primary="false" onClick={() => setConfirmationModalOpen(false)}>
      Annuler
    </Button>,
    <Button
      style={{ backgroundColor: "#00C853 !important" }}
      primary="true"
      onClick={() => handleSubmit()}
    >
      Confirmer
    </Button>,
  ];

  return (
    <div
      style={{
        width: !smallScreen ? "80%" : "100%",
        margin: "auto",
        marginTop: 0,
      }}
    >
      {renderConfirmationString()}
      <Card
        style={{
          padding: "20px 10px 25px 10px",
          height: smallScreen ? "100vh" : null,
        }}
      >
        <CardHeader
          className="colorHeaderCard"
          subheader="Prendre un rendez vous"
        />
        <Stepper activeStep={stepIndex} linear="false" orientation="vertical">
          <Step>
            <StepButton onClick={() => setStepIndex(0)}>
              Cliquez pour choisir une prestation
            </StepButton>

            <StepContent>
              <FormControl>
                <Select
                  onChange={(event) => {
                    const newPrestationObj = {
                      name: event.target.value.name,
                      price: event.target.value.price,
                    };
                    setPrestation(newPrestationObj);
                    handleNext();
                  }}
                >
                  {prestations.map((prestation, index) => {
                    return (
                      <MenuItem key={index} value={prestation}>
                        {prestation.name} - {prestation.price + " eur"}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </StepContent>
          </Step>

          <Step>
            <StepButton onClick={() => setStepIndex(1)}>
              Choisir votre date de rendez-vous
            </StepButton>
            <StepContent>{DatePickerExampleSimple()}</StepContent>
          </Step>
          <Step disabled={!appointmentDate}>
            <StepButton onClick={() => setStepIndex(2)}>
              Choisir une heure disponible
            </StepButton>
            <StepContent>
              <FormControl component="fieldset">
                <RadioGroup
                  style={{
                    marginTop: 15,
                    marginLeft: 15,
                  }}
                  name="appointmentTimes"
                  value={appointmentSlot}
                  onChange={(evt, val) => handleSetAppointmentSlot(val)}
                >
                  {renderAppointmentTimes()}
                </RadioGroup>
              </FormControl>
            </StepContent>
          </Step>
          <Step>
            <StepButton onClick={() => setStepIndex(3)}>
              Payement de la pretation
            </StepButton>
            <StepContent>
              <Elements stripe={stripePromise}>
                <Payement
                  amount={prestation.price}
                  name={currentUser.name}
                  email={currentUser.email}
                  phone={currentUser.phone}
                  parentCallback={handleCallback}
                />
              </Elements>
            </StepContent>
          </Step>

          <Step>
            <Button
              style={{
                display: "block",
                backgroundColor: "#f5f5f8",
                marginTop: 20,
                maxWidth: 100,
              }}
              variant="contained"
              fullWidth="true"
              onClick={() => setConfirmationModalOpen(!confirmationModalOpen)}
              disabled={!contactFormFilled || processed || payed === false}
            >
              {contactFormFilled && "Valider"}
            </Button>
          </Step>
        </Stepper>
      </Card>

      <Dialog
        modal="true"
        open={confirmationModalOpen}
        title="Vous confirmer votre rendez vous ?"
      >
        <DialogContent>{renderAppointmentConfirmation()}</DialogContent>

        <DialogActions>{modalActions}</DialogActions>
      </Dialog>

      <Snackbar
        open={confirmationSnackbarOpen}
        message={confirmationSnackbarMessage || ""}
        autoHideDuration={10000}
        onClose={() => setConfirmationSnackbarOpen(false)}
      />
    </div>
  );
};
export default Appointment;
