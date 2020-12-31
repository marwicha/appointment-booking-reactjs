import React from "react";
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

import Authentification from "./components/Authentification";
import Appointment from "./components/Appointment";
import Inscription from "./components/Inscription";
import Profile from "./components/Profile";


function App() {

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
            { /* <Route path="/Praticien" component={Praticien} /> */}

              <Route path="/inscription" component={Inscription}/>
              
              <Route path="/authentification" component={Authentification} />

              <Route path="/prendre-rendez-vous" component={Appointment} />

              {/* After authentication */}
              <Route path="/profile" component={Profile} />
              
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
