import React from "react";

import { Card, Avatar, Divider, Icon } from "@material-ui/core";
import { makeStyles, lighten } from "@material-ui/core/styles";
import Carousel from "../common/Carousel";
import TwitterIcon from "../common/icons/TwitterIcon";
import FacebookIcon from "../common/icons/FacebookIcon";

const useStyles = makeStyles(({ palette, ...theme }) => ({
}));

const Testimonial11 = () => {
  const classes = useStyles();

  const testimonialList = [
    {
      companyLogoUrl: "./assets/images/bg-intro.jpg",
      comment: `"Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Fugit modi voluptas vero iusto fuga quos totam
          eius, atis magnam tempora doloribus ducimus dolorem
          culpa animi beatae tenetur! Sapiente, quia tempora."`,
      icon: TwitterIcon
    },
    {
      companyLogoUrl: "./assets/images/bg-intro.jpg",
      comment: `"Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Fugit modi voluptas vero iusto fuga quos totam
          eius, atis magnam tempora doloribus ducimus dolorem
          culpa animi beatae tenetur! Sapiente, quia tempora."`,
      icon: FacebookIcon
    },
    {
      companyLogoUrl: "./assets/images/bg-intro.jpg",
      comment: `"Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Fugit modi voluptas vero iusto fuga quos totam
          eius, atis magnam tempora doloribus ducimus dolorem
          culpa animi beatae tenetur! Sapiente, quia tempora."`,
      icon: TwitterIcon
    }
  ];

		
  return (
    <div className="section">
      <div className="container">
        <Carousel
          carouselId="swiper-11"
          paginationClass="mt-16"
          slidesPerView={1}
          spacing={16}
        >
          {testimonialList.map((testimonial, index) => (
            <div className="pt-12" key={index}>
              <div
                className={
                  classes.card +
                  "h-full w-900 h-600 px-6"
                }
                elevation={3}
              >
                <img className="h-full w-900 h-600" src="/assets/images/bg-intro.jpg" alt="" />
            
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial11;
