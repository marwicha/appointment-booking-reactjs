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
import Massages from "./home/Massages";
import Patrick from "./home/Patrick";
import CoachingSomatho from "./home/CoachingSomatho";
import UserAccount from "./home/UserAccount";
import AdminAccount from "./home/AdminAccount";

import Authentification from "./components/Authentification";
import Inscription from "./components/Inscription";
import AuthService from "./services/auth.service";
import UpdateProfile from "components/User/UpdateProfile";
import UpdateProfileAdmin from "components/Admin/UpdateProfileAdmin";
import AddPrestation from "components/Admin/AddPrestation";

const App = () => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const [showAdminProfile, setShowAdminProfile] = useState(false);
  const [showUserProfile, setShowUserProfile] = useState(false);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
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
            <Switch>
              <Route path={["/", "/accueil"]} component={Accueil} exact />
              <Route path="/formations" component={Formations} />
              <Route path="/massages" component={Massages} />
              <Route path="/praticien" component={Patrick} />
              <Route path="/somatotherapie" component={CoachingSomatho} />
              <PublicRoute
                path="/authentification"
                exact
                component={Authentification}
              />
              <PublicRoute path="/inscription" exact component={Inscription} />
              {/* After authentication */}
              <PrivateUserRoute exact path="/compte" component={UserAccount} />
              <PrivateUserRoute
                exact
                path="/compte/:id"
                component={UpdateProfile}
              />
              <PrivateAdminRoute exact path="/admin" component={AdminAccount} />
              <PrivateAdminRoute
                exact
                path="/admin/:id"
                component={UpdateProfileAdmin}
              />
              <PrivateAdminRoute
                exact
                path="/prestation/ajout"
                component={AddPrestation}
              />

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
