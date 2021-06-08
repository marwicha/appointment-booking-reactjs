import Tab from "@material-ui/core/Tab";
import { Typography, Container, Button, Box } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import TopBar from "./sections/TopBar";
import Appointment from "../components/User/Appointment";
import AllUserAppointments from "../components/User/AllUserAppointments";
import AuthService from "../services/auth.service";
import Profile from "components/User/Profile";
import UserService from "../services/user.service";
import UserFormations from "components/User/UserFormations";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
};

const useStyles = makeStyles(({ palette, ...theme }) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    height: "100%",
    marginTop: "5%",
    marginLeft: "3%",
  },
  tabs: {
    borderRight: `1px solid`,
  },
}));

const UserAccount = () => {
  const userTest = AuthService.getCurrentUser();

  const [currentUser, setcurrentUser] = useState(userTest);

  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const deleteAccount = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Etes vous sûre de vouloir supprimer votre compte ?")) {
      UserService.deleteAccount(currentUser.id)
        .then((response) => {
          setcurrentUser({ ...currentUser });

          localStorage.removeItem("user");
          window.location.reload();
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <section className="section">
      <TopBar />
      <Container maxWidth="lg" className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          className={classes.tabs}
        >
          <Tab label="Prendre un rendez vous" {...a11yProps(0)} />
          <Tab label="Mes rendez vous" {...a11yProps(1)} />
          <Tab label="Mes informations" {...a11yProps(2)} />
          <Tab label="Les prochaines formations" {...a11yProps(3)} />
          <Tab label="Supprimer mon compte" {...a11yProps(4)} />
        </Tabs>
        <TabPanel style={{ width: "100%" }} value={value} index={0}>
          <Appointment />
        </TabPanel>
        <TabPanel style={{ width: "100%" }} value={value} index={1}>
          <AllUserAppointments />
        </TabPanel>
        <TabPanel style={{ width: "100%" }} value={value} index={2}>
          <Profile />
        </TabPanel>

        <TabPanel style={{ width: "100%" }} value={value} index={3}>
          <UserFormations />
        </TabPanel>

        <TabPanel style={{ width: "100%" }} value={value} index={4}>
          <Button align="center" color="primary" onClick={deleteAccount}>
            cliquer pour supprimer votre compte
          </Button>
        </TabPanel>
      </Container>
    </section>
  );
};

export default UserAccount;
