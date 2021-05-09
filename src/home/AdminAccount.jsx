import Tab from "@material-ui/core/Tab";
import { Typography, Container, Button, Box } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import TopBar from "./sections/TopBar";
import ProfileAdmin from "components/Admin/ProfileAdmin";
import RendezVous from "components/Admin/RendezVous";
import AddPrestation from "components/Admin/AddPrestation";
import AllPrestations from "components/Admin/AllPrestation";

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

const AdminAccount = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
          <Tab label="Mes informations" {...a11yProps(0)} />
          <Tab label="Mes rendez vous" {...a11yProps(1)} />
          <Tab label="Ajout prestation" {...a11yProps(2)} />
          <Tab label="Les prestations" {...a11yProps(3)} />
        </Tabs>
        <TabPanel style={{ width: "100%" }} value={value} index={0}>
          <ProfileAdmin />
        </TabPanel>
        <TabPanel>
          <RendezVous style={{ width: "100%" }} value={value} index={1} />
        </TabPanel>

        <TabPanel>
          <AddPrestation style={{ width: "100%" }} value={value} index={2} />
        </TabPanel>

        <TabPanel>
          <AllPrestations style={{ width: "100%" }} value={value} index={3} />
        </TabPanel>
      </Container>
    </section>
  );
};

export default AdminAccount;
