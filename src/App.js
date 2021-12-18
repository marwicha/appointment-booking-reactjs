import React, { useState, useEffect } from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";

import "react-perfect-scrollbar/dist/css/styles.css";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Scrollbar from "react-perfect-scrollbar";
import { Theme } from "./theme";
import GlobalCss from "./styles/jss/GlobalCss";

import Accueil from "./home/Accueil";
import Formations from "./home/Formations";
import Patrick from "./home/Patrick";
import CoachingSomatho from "./home/CoachingSomatho";
import UserAccount from "./home/UserAccount";
import AdminAccount from "./home/AdminAccount";

import Inscription from "./components/Inscription";
import AuthService from "./services/auth.service";
import UpdateProfile from "components/User/UpdateProfile";
import UserFormations from "components/User/UserFormations";

import AddPrestation from "components/Admin/AddPrestation";
import AddFormation from "components/Admin/AddFormation";
import RequestResetPassword from "components/RequestResetPassword";
import ResetPassword from "components/ResetPassword";
import ListFormation from "components/Admin/ListFormation";

import ScrollToTop from "ScrollToTop";

const App = () => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const [showAdminProfile, setShowAdminProfile] = useState(false);
  const [showUserProfile, setShowUserProfile] = useState(false);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user && user.roles) {
      setCurrentUser(user);
      setShowAdminProfile(user.roles.includes("ROLE_ADMIN"));
      setShowUserProfile(user.roles.includes("ROLE_USER"));
    }
  }, []);

  const PrivateAdminRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) =>
          showAdminProfile ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/inscription",
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      />
    );
  };

  const PrivateUserRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) =>
          showUserProfile ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/inscription",
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      />
    );
  };

  const PublicRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) => {
          if (showAdminProfile) {
            return <Redirect to="/admin" />;
          } else if (showUserProfile) {
            return <Redirect to="/compte" />;
          } else {
            return <Component {...props} />;
          }
        }}
      />
    );
  };

  return (
    <MuiThemeProvider theme={Theme}>
      <GlobalCss>
        <Scrollbar
          className="h-full-screen scrollable-content"
          option={{ suppressScrollX: true }}
        >
          <Router basename="/">
            <ScrollToTop />
            <Switch>
              <Route path={["/", "/accueil"]} component={Accueil} exact />
              <Route path="/formations" component={Formations} />
              <Route path="/praticien" component={Patrick} />
              <Route path="/somatotherapie" component={CoachingSomatho} />
              {/*
              <PublicRoute path="/inscription" exact component={Inscription} />
              <Route
                path="/reinitialiser-mot-de-passe"
                exact
                component={RequestResetPassword}
              />
              <Route path="/passwordReset" exact component={ResetPassword} />
             
              <PrivateUserRoute exact path="/compte" component={UserAccount} />
              <PrivateUserRoute
                exact
                path="/compte/:id"
                component={UpdateProfile}
              />
              <PrivateUserRoute
                exact
                path="/compte/formations"
                component={UserFormations}
              />
              <PrivateAdminRoute exact path="/admin" component={AdminAccount} />

              <PrivateAdminRoute
                exact
                path="/prestation/ajout"
                component={AddPrestation}
              />
              <PrivateAdminRoute
                exact
                path="/formation/ajout"
                component={AddFormation}
              />
              <PrivateAdminRoute
                exact
                path="/formation/list"
                component={ListFormation}
              />
               */}
              <Redirect path="/" exact to="accueil" />
              {/* <Route component={Error} /> */}
            </Switch>
          </Router>
        </Scrollbar>
      </GlobalCss>
    </MuiThemeProvider>
  );
};

export default App;
