import React, { useRef } from "react"
import useSlider from "../home/common/hooks/useSlider"
import { Icon } from "@material-ui/core";

const Slider = ({ images }) => {
  const slideImage = useRef(null)
  const slideText = useRef(null)
  const { goToPreviousSlide, goToNextSlide } = useSlider(
    slideImage,
    slideText,
    images
  )

  return (
    <div className="slider" ref={slideImage}>
      <div className="slider--content">
        <button onClick={goToPreviousSlide} className="slider__btn-left">
          <Icon className="angle-left" />
        </button>
        <div className="slider--feature">
          <h1 className="feature--title text-third">IKDO</h1>
          <p ref={slideText} className="feature--text text-white"></p>
        </div>
        <button onClick={goToNextSlide} className="slider__btn-right">
          <Icon>angle-right</Icon>
        </button>
      </div>
    </div>
  )
}

export default Slider