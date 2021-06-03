import React, { useState, useEffect } from "react";
import AdminService from "../../services/admin.service";
import AppointmentService from "../../services/appointment.service";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridDay from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

import { Container } from "@material-ui/core";

const RendezVous = () => {
  const [calendarEvents, setCalendarEvents] = useState([
    {
      id: "",
      title: "",
      start: "",
      userName: "",
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
            title: "PRESTATION1 " + appointments[i].prestation,
            start:
              appointments[i].slots.slot_date +
              displayHeure(appointments[i].slots.slot_time),
            userName: appointments[i].user.name,
          });
        }
        setCalendarEvents(tmpAppointment);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleEventClick = (clickInfo) => {
    if (
      // eslint-disable-next-line no-restricted-globals
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      AppointmentService.deleteAppointment(clickInfo.event.id).then(() => {
        clickInfo.event.remove();
      });
    }
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
            plugins={[dayGridPlugin, timeGridDay, listPlugin]}
            events={calendarEvents}
            eventClick={handleEventClick}
          />
        </div>
      </div>
    </Container>
  );
};
export default RendezVous;
