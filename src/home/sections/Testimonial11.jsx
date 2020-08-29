import React from "react";

import { makeStyles, lighten } from "@material-ui/core/styles";
import Carousel from "../common/Carousel";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  introWrapper: {
    position: "relative",
    height: "100%",
    overflow: "hidden",
  },
  intro: {
    padding: "7.5rem 0rem",
    maxWidth: 500,
    [theme.breakpoints.down("sm")]: {
      padding: "2.5rem 0rem",
    },
    zIndex: 5,
  }
}));

const Testimonial11 = () => {
  const classes = useStyles();

  const testimonialList = [
    {
      img: "./assets/images/1.jpg",
      text: `"Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Fugit modi voluptas vero iusto fuga quos totam
          eius, atis magnam tempora doloribus ducimus dolorem
          culpa animi beatae tenetur! Sapiente, quia tempora."`
    },
    {
      img: "./assets/images/2.jpg",
      text: `"Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Fugit modi voluptas vero iusto fuga quos totam
          eius, atis magnam tempora doloribus ducimus dolorem
          culpa animi beatae tenetur! Sapiente, quia tempora."`
    },
    {
      img: "./assets/images/3.jpg",
      text: `"Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Fugit modi voluptas vero iusto fuga quos totam
          eius, atis magnam tempora doloribus ducimus dolorem
          culpa animi beatae tenetur! Sapiente, quia tempora."`
    }
  ];

		
  return (
    <div className="section">
    <div className={classes.introWrapper}>
      <div className="container">
        <Carousel
          carouselId="swiper-11"
          paginationClass="mt-16"
          slidesPerView={1}
        >
          {testimonialList.map((testimonial, index) => (
            <div className="pt-12" key={index}>
            <img className="h-full w-full w-1300 h-500" src={testimonial.img} alt="" />
           
                <h1 className={clsx(classes.img, 
                  "mx-auto text-center justify-center font-medium text-44 text-second m-0")}>
                IKDO
              </h1>
              <h2 className="font-medium text-44 text-white m-0">
                By Zen Workshop
              </h2>
              </div>
         
            
          ))}
        </Carousel>
      </div>
      </div>
    </div>
  );
};

export default Testimonial11;
