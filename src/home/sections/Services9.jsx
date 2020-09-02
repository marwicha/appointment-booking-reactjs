import React from "react";
import { Grid, Button } from "@material-ui/core";

const Services9 = () => {
  const serviceList = [
    {
      title: "Expert Teachers",
    },
    {
      title: "Our Courses"
    },
    {
      title: "Unlimited Access"
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <Grid container spacing={6} justify="space-between">
          {serviceList.map((item, ind) => (
            <Grid key={ind} item sm={4} xs={12}>
              <div className="text-center max-w-252 mx-auto">
                
                <h5 className="mt-8 font-medium">{item.title}</h5>
                <p className="max-w-400 mb-6">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor
                </p>
                <Button variant="text" color="primary">
                  Read More
                </Button>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default Services9;
