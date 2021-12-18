import React, { useState, useEffect } from "react";
import { classList } from "utils";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import { NavLink } from "react-router-dom";
import AuthService from "../../services/auth.service";

const TopBar = (props) => {
  const [isTop, setIsTop] = useState(true);
  const [isClosed, setIsClosed] = useState(true);

  let toggleIcon = isClosed ? "menu" : "close";

  const close = () => {
    setIsClosed(false);
  };

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
          <NavLink to="/accueil">
            <img src="./assets/images/logos/logo@2x.png" alt="" />
          </NavLink>
        </div>

        <ul className="navigation">
          <li>
            <NavLink to="/accueil">Accueil</NavLink>
          </li>

          <li>
            <NavLink to="/praticien">Praticien</NavLink>
          </li>

          <li>
            <NavLink to="/somatotherapie">Somatothérapie et coaching</NavLink>
          </li>
          <li>
            <NavLink to="/formations">Formations</NavLink>
          </li>
        </ul>
        <div className="m-auto" />
        <ul className="navigation flex">
          {/*
          {currentUser ? (
            <div>
              <li>
                <NavLink to="/compte">{currentUser.name}</NavLink>
              </li>

              <li>
                <NavLink to="/inscription" onClick={logOut}>
                  déconnecter
                </NavLink>
              </li>
            </div>
          ) : (
            <div>
              <li>
                <NavLink to="/inscription">Prendre un rendez vous</NavLink>
              </li>
            </div>
          )}
          */}
           
              <li>
                <a href="https://www.resalib.fr/">Prendre un rendez vous sur résalib</a>
              </li>
          <li>
            <a href="https://www.facebook.com/ikdobienetre">
              <Icon style={{ fontSize: 20, marginLeft: "2px" }}>facebook</Icon>
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
