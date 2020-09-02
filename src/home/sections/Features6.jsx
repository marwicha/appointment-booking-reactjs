import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  iconWrapper: {
    "&:after": {
      content: '" "',
      position: "absolute",
      top: -12,
      left: -4,
      height: 88,
      width: 88,
      background: "rgba(var(--primary), 0.1)",
      transform: "rotate(30deg)",
      borderRadius: 12,
      zIndex: -1,
    },
  },
}));

const Features6 = () => {
  const classes = useStyles();
  const featureList = [
    {
      title: "SSD",
    },
    {
      title: "19 inch OLED Display",
    },
    {
      title: "12 GB Ram",
    },
    {
      title: "Fingerprint Scanner",
    },
    {
      title: "6 Hrs. Battery Backup ",
    },
    {
      title: "Core i9",
    },
    {
      title: "12MP Camera",
    },
    {
      title: "Metallic Finish",
    },
  ];

  return (
    <section className="section" id="features6">
      <div className="container">
        <div className="max-w-400 mb-24 mx-auto text-center">
          <h1 className="mt-0 font-normal text-44 text-primary">
            Amazing Features
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore
          </p>
        </div>
        <Grid container spacing={8}>
          {featureList.map((item, ind) => (
            <Grid key={ind} item md={3} sm={6} xs={12}>
              <div className="text-center">
                <div
                  className={clsx(
                    "mb-8 inline-block relative",
                    classes.iconWrapper
                  )}
                >
                  <item.icon color="primary" className="text-72" />
                </div>
                <h5 className="font-medium text-primary mt-0">{item.title}</h5>
                <p className="max-w-400 text-center">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy
                </p>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default Features6;
