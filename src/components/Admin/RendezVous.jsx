import React, { useState, useEffect } from "react";
import axios from "axios";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridDay from "@fullcalendar/timegrid";

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

import { Container } from "@material-ui/core";

const RendezVous = () => {
  const [calendarEvents, setCalendarEvents] = useState([
    {
      title: "",
      start: "",
    },
  ]);

  useEffect(() => {
    axios
      .get("http://localhost:8082/getAll")
      .then((response) => {
        console.log(response.data);
        let appointments = response.data;

        let tmpAppointment = [];
        for (let i = 0; i < appointments.length; i++) {
          tmpAppointment.push({
            title: appointments[i].prestation,
            start: appointments[i].slots.slot_date,
          });

          setCalendarEvents(tmpAppointment);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container maxWidth="md">
      <div className="demo-app">
        <div className="demo-app-top"></div>
        <div className="demo-app-calendar">
          <FullCalendar
            defaultView="timeGridDay"
            header={{
              left: "prev,next Aujourd'hui",
              center: "title",
              right: "dayGridMonth,timeGridDay,listWeek",
            }}
            plugins={[dayGridPlugin, timeGridDay]}
            events={calendarEvents}
          />
        </div>
      </div>
    </Container>
  );
};
export default RendezVous;
