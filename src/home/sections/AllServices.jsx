import React from "react";
import { Grid, Button } from "@material-ui/core";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  button: {
    //marginTop: "2rem !important",
    //padding: "1rem 2rem 1rem 2rem",
    //fontSize: 14,
    //fontFamily: theme.typography.fontFamily,
    //backgroundColor: palette.third,
    //background: "#EBF0FF",
    //borderRadius: "50px"

      fontSize: 14,
      fontFamily: theme.typography.fontFamily,
      borderRadius: "0 50px",
      background: `${palette.second} !important`,
      color: "white !important",
      width: "163px",
      height: "60px",
      textAlign: "left"

  },
  image: {
    maxWidth: "150px"
  }
}));


const AllServices = () => {

  const classes = useStyles();
  const serviceList = [
    {
      id:"1",
      title: "Somathotérapie",
      imgSrc: "/assets/images/coaching.png"
    },
    {
      id:"3",
      title: "Formations",
      imgSrc: "/assets/images/formation.png"
    },

    {
      id:"2",
      title: "Massages",
      imgSrc: "/assets/images/massage.png"
    },
  ];
  
const getImgSrc = (id,imgSrc,imageClass) => {
  if (id==="2")
  return <img src={imgSrc} className={ clsx(imageClass,"mt--6")} alt=""/>
  else if (id === "1")
  return <img src={imgSrc} className={ clsx(imageClass,"mt--6")} alt=""/>
  else
  return <img src={imgSrc} className={ imageClass} alt=""/>
}
  return (
    
    <section className= "section">
    <div className="container-AllServices">

      <h4 className="font-bold text-center text-26 text-second">
        IKDO
      </h4>

      <p className="text-center text-18 pb-6">
      Services
      </p>

    <Grid container spacing={6} justify="center">
    {serviceList.map((item, ind) => (
      <Grid key={ind} item sm={3} xs={12}>
        <div className="text-center max-w-120 mx-auto">

           {getImgSrc(item.id,item.imgSrc,classes.image)}

          <Button className={ classes.button }> 
          {item.title}
          </Button>

        </div>
      </Grid>
    ))}
  </Grid>
    </div>
    </section>

  );
};

export default AllServices;
