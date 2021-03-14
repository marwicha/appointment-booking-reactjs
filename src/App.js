import React, {useState, useEffect} from "react";
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

import Authentification from "./components/Authentification";
import Inscription from "./components/Inscription";
import UserAccount from "./home/UserAccount";

import AuthService from "./services/auth.service";
import UpdateProfile from "components/User/UpdateProfile";

const App = () => {

     const [showAppointmentPage, setShowAppointmentPage] = useState(false);

   useEffect(() => {
    const currentUser = AuthService.getCurrentUser();

    if (currentUser) {
      setShowAppointmentPage(currentUser);
    }
  
  }, []);

  const PrivateRoute = ({ component: Component, ...rest }) => {

  return (
    <Route
      {...rest}
      render={ props =>
        showAppointmentPage ? 
          <Component {...props} />
         : 
          <Redirect
            to={{
              pathname: "/inscription",
            }}
          />
      }
    />
  );
}

const PublicRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            showAppointmentPage ?
                <Redirect to="/compte" />
            : <Component {...props} />
        )} />
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

              <PublicRoute path="/authentification"  exact component={Authentification} />
              <PublicRoute path="/inscription"  exact component={Inscription} />

              {/* After authentication */}

              <PrivateRoute path="/compte" exact component={UserAccount} />
              <PrivateRoute path="/compte/:id" exact component={UpdateProfile} />
              
              <Redirect path="/" exact to="accueil" />
              {/* <Route component={Error} /> */}

            </Switch>
          </Router>
        </Scrollbar>
      </GlobalCss>
    </MuiThemeProvider>
  );
}

export default App;
