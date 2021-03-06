import React, { useState, useEffect } from "react";

import ReactDOM from "react-dom";
import AdminService from "../../services/admin.service";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridDay from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

import { makeStyles } from "@material-ui/core/styles";
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

import { Container } from "@material-ui/core";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  colorEvent: {
    backgroundColor: "#e62638",
    color: "white",
  },
}));

const RendezVous = () => {
  const [calendarEvents, setCalendarEvents] = useState([
    {
      id: "",
      title: "",
      start: "",
      description: "",
      user: { name: "", email: "", phone: "" },
      annule: "",
    },
  ]);

  const displayHeure = (heure) => {
    switch (heure) {
      case "0":
        return "T09:00:00";
      case "1":
        return "T10:00:00";
      case "2":
        return "T11:00:00";
      case "3":
        return "T12:00:00";
      case "4":
        return "T13:00:00";
      case "5":
        return "T14:00:00";
      case "6":
        return "T15:00:00";
      case "7":
        return "T16:00:00";
      case "8":
        return "T17:00:00";
      default:
        return "date invalide";
    }
  };

  useEffect(() => {
    AdminService.getAllAppointments()
      .then((response) => {
        let appointments = response;

        let tmpAppointment = [];
        for (let i = 0; i < appointments.length; i++) {
          tmpAppointment.push({
            id: appointments[i]._id,
            title: appointments[i].prestation,
            start:
              appointments[i].slots.slot_date +
              displayHeure(appointments[i].slots.slot_time),
            user: {
              name: appointments[i].user !== null && appointments[i].user.name,
              email:
                appointments[i].user !== null && appointments[i].user.email,
              phone:
                appointments[i].user !== null && appointments[i].user.phone,
            },
            annule: !!appointments[i].annule && appointments[i].annule,
          });
        }
        setCalendarEvents(tmpAppointment);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  // DELETE EVENT
  // const handleEventClick = (clickInfo) => {
  //   if (
  //     // eslint-disable-next-line no-restricted-globals
  //     confirm(
  //       `Êtes-vous sûr de vouloir supprimer le rendez vous '${clickInfo.event.title}', son numéro de telephone pour annuler:
  //       ${clickInfo.event.extendedProps.user.phone}`
  //     )
  //   ) {
  //     AppointmentService.deleteAppointment(clickInfo.event.id).then(() => {
  //       clickInfo.event.remove();
  //     });
  //   }
  // };

  // UPDATE EVENT TO SET CANCELLED TO TRUE
  const handleEventClick = (clickInfo) => {
    const newData = {
      ...calendarEvents,
      annule: true,
    };
    if (clickInfo.event.extendedProps.annule === false)
      if (
        // eslint-disable-next-line no-restricted-globals
        confirm("Êtes-vous sûr de vouloir annuler le rendez vous")
      ) {
        AdminService.updateAppointmentByAdmin(clickInfo.event.id, newData).then(
          (response) => {
            alert("Rendez vous annulé avec succés");
            AdminService.getAllAppointments().then((response) => {
              let appointments = response;

              let tmpAppointment = [];
              for (let i = 0; i < appointments.length; i++) {
                tmpAppointment.push({
                  id: appointments[i]._id,
                  title: appointments[i].prestation,
                  start:
                    appointments[i].slots.slot_date +
                    displayHeure(appointments[i].slots.slot_time),
                  user: {
                    name: appointments[i].user && appointments[i].user.name,
                    email: appointments[i].user && appointments[i].user.email,
                    phone: appointments[i].user && appointments[i].user.phone,
                  },
                  annule: !!appointments[i].annule && appointments[i].annule,
                });
              }
              setCalendarEvents(tmpAppointment);
            });
          }
        );
      }
  };

  const renderEventContent = ({ event, el }) => {
    const content = event.extendedProps.user && (
      <div
        style={{
          backgroundColor:
            event.extendedProps.annule === true ? "#dd7c5d" : "#ffffff",
          color: event.extendedProps.annule === true ? "white" : "black",
        }}
      >
        {event.title}
        {event.extendedProps.user && (
          <>
            <div>{event.extendedProps.user.name} </div>
            <div>{event.extendedProps.user.email} </div>
            <div>{event.extendedProps.user.phone} </div>
          </>
        )}
        <div>{event.extendedProps.annule === true ? "annulé" : " "} </div>
      </div>
    );
    ReactDOM.render(content, el);
    return el;
  };

  return (
    <Container maxWidth="lg">
      <div className="demo-app">
        <div className="demo-app-calendar">
          <FullCalendar
            defaultView="dayGridMonth"
            locale="fr"
            header={{
              left: "prev,next",
              center: "title",
              right: "dayGridMonth,listMonth",
            }}
            views={{
              dayGridMonth: { buttonText: "Mois" },
              listMonth: { buttonText: "Détail mois" },
            }}
            plugins={[dayGridPlugin, listPlugin]}
            events={calendarEvents}
            eventRender={renderEventContent}
            eventClick={handleEventClick}
          />
        </div>
      </div>
    </Container>
  );
};
export default RendezVous;
