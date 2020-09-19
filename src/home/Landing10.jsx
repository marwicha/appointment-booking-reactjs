import React from "react";

import Intro10 from "./sections/Intro10";
import Blog1 from "./sections/Blog1";
import Conference1 from "./sections/Conference1";
import EventSchedule1 from "./sections/EventSchedule1";
import Massages from "./sections/Massages";
import EventDetails1 from "./sections/EventDetails1";
import Pricing3 from "./sections/Pricing3";
import Testimonial9 from "./sections/Testimonial9";
import Subscription4 from "./sections/Subscription4";

const Landing10 = () => {
  return (
    <div className="landing">
      <Intro10 />
      <Conference1 />
      <Massages />
      <EventSchedule1 />
      <EventDetails1 />
      <Pricing3 />
      <Testimonial9 />
      <Blog1 />
      <Subscription4 />
    </div>
  );
};

export default Landing10;
