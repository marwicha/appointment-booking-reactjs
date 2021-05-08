import React, { useState, useEffect } from "react";
import { debounce, classList } from "utils";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import { NavLink } from "react-router-dom";
import ScrollTo from "../common/ScrollTo";
import AuthService from "../../services/auth.service";

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

  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
    window.location.reload();
  };

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
            <NavLink to="/accueil">Accueil</NavLink>
          </li>

          <li>
            <NavLink to="/praticien">Praticien</NavLink>
          </li>

          <li>
            <NavLink to="/formations">Formations</NavLink>
          </li>

          <li>
            <NavLink to="/somatotherapie">Somatothérapie et coaching</NavLink>
          </li>
          <li>
            <NavLink to="/massages">Massages</NavLink>
          </li>
        </ul>
        <div className="m-auto" />
        <ul className="navigation flex">
          {currentUser ? (
            <div>
              <li>
                <NavLink to="/compte">{currentUser.name}</NavLink>
              </li>

              <li>
                <NavLink to="/authentification" onClick={logOut}>
                  déconnecter
                </NavLink>
              </li>
            </div>
          ) : (
            <div>
              <li>
                <NavLink to="/inscription">S'inscrire</NavLink>
              </li>
            </div>
          )}

          <li>
            <a href="https://www.facebook.com/ikdobienetre">
              <Icon style={{ fontSize: 20, marginLeft: "2px" }}>
                {" "}
                facebook{" "}
              </Icon>
            </a>
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
