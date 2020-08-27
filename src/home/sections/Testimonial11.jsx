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
                <p className="my-6">
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore"
                </p>

                <Divider className="mb-4"></Divider>

                <div className="flex flex-wrap mb-6">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Icon key={i} fontSize="small" color="primary">
                      start
                    </Icon>
                  ))}
                </div>

                <div className="flex flex-wrap justify-between items-end pb-4">
                  <div>
                    <h5 className="m-0 font-medium">hhhh</h5>
                    <small className="text-muted">
                     hhhhhhyy
                    </small>
                  </div>
                  <testimonial.icon
                    className="mb-5px text-muted text-14 cursor-pointer"
                    fontSize="small"
                  />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial11;
