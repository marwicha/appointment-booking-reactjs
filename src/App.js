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

import Authentification from "./components/Authentification";
import Inscription from "./components/Inscription";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardAdmin from "./components/BoardAdmin";


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
              <Route path="/Accueil" component={Accueil} exact />
              <Route path="/Formations" component={Formations} />
              <Route path="/Massages" component={Massages} />
            { /* <Route path="/Praticien" component={Praticien} /> */}

              <Route path="/Inscription" component={Inscription}/>
              <Route path="/Authentification" component={Authentification} />

              <Route path="/profile" component={Profile} />

              {/* After authentication */}
              <Route path="/user" component={BoardUser} />
              <Route path="/admin" component={BoardAdmin} />
              
              <Redirect path="/" exact to="Accueil" />
              {/* <Route component={Error} /> */}

            </Switch>
          </Router>
        </Scrollbar>
      </GlobalCss>
    </MuiThemeProvider>
  );
}

export default App;
