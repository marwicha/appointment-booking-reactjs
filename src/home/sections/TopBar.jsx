import React, { useState, useEffect } from "react";
import { debounce, classList } from "utils";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import { NavLink } from "react-router-dom";
import ScrollTo from "../common/ScrollTo";

const TopBar = (props) => {
  const [isTop, setIsTop] = useState(true);
  const [isClosed, setIsClosed] = useState(true);

  let scrollableElement = document.querySelector(".scrollable-content");
  if (!scrollableElement) scrollableElement = window;

  let handleScrollRef = null;
  let toggleIcon = isClosed ? "menu" : "close";

  const handleScroll = () => {
    return debounce(({ target: { scrollTop } }) => {
      let isCurrentTop = scrollTop < 100 || scrollableElement.scrollY < 100;
      setIsTop(isCurrentTop);
    }, 20);
  };

  handleScrollRef = handleScroll();

  const close = () => {
    setIsClosed(false);
  };

  useEffect(() => {
    if (scrollableElement) {
      scrollableElement.addEventListener("scroll", handleScrollRef);
    }

    return () => {
      if (scrollableElement) {
        scrollableElement.removeEventListener("scroll", handleScrollRef);
      }
    };
  }, [scrollableElement, handleScrollRef]);

  return (
    <section
      className={classList({
        header: true,
        "header-fixed": !isTop,
        closed: isClosed,
      })}
    >
      <div className="container header-container">
       
      <div className="brand">
      <img src="./assets/images/logos/logo@2x.png" alt="" />
     </div>
     
     <ul className="navigation">
     <li>
       <NavLink to="/Accueil">Accueil</NavLink>
     </li>
     <li>
       <NavLink to="/Massages">
       Massages
       </NavLink>
     </li>

     <li>
       <NavLink to="/Formations">
         Formations
       </NavLink>
     </li>

     <li>
<NavLink to="/Coaching">
Coaching
</NavLink>

</li>


<li>
<NavLink to="/Somatothérapie">
Somatothérapie
</NavLink>

</li>
     
    
     <li>
       <ScrollTo to="contact" onScroll={close}>
         Contact
       </ScrollTo>
     </li>
   </ul>
        <div className="m-auto" />
        <ul className="navigation flex">
         <li>
          <NavLink to="/signup">
           
              Inscription
          </NavLink>
          </li>

          <li>
        
          <Icon  style={{ fontSize: 30, marginLeft: "6px" }}> facebook </Icon>
          </li>

        </ul>
        <IconButton
          className="header__toggle"
          onClick={() => {
            setIsClosed(!isClosed);
          }}
        >
          <Icon>{toggleIcon}</Icon>
        </IconButton>
      </div>
    </section>
  );
};

export default TopBar;
