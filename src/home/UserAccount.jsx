import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Box} from '@material-ui/core';
import React , { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import TopBar from './sections/TopBar';
import Appointment from "../components/User/Appointment";
import AllUserAppointments from "../components/User/AllUserAppointments";
import AuthService from "../services/auth.service";
import Profile from 'components/User/Profile';

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
}

const a11yProps = (index) => {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(({ palette, ...theme }) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    height: "100%",
    marginTop: "10%",
    marginLeft: "2%"
  },
  tabs: {
    borderRight: `1px solid`,
  },
}));


const UserAccount = () => {
  
   const [currentUser, setCurrentUser] = useState("")

   useEffect( () => {
   const user = AuthService.getCurrentUser();

   console.log(user)
    if(user) {
       setCurrentUser(user)
    }
    
  }, [])

  const classes = useStyles();
  const [value, setValue] = useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
    <TopBar />
        <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        <Tab label="Mes informations" {...a11yProps(0)} />
        <Tab label="Prendre un rendez vous" {...a11yProps(1)} />
        <Tab label="Afficher mes rendez vous" {...a11yProps(2)} />
      </Tabs>
      <TabPanel style={{width: '100%'}} value={value} index={0}>
       <Profile />
      </TabPanel>
      <TabPanel style={{width: '100%'}} value={value} index={1}>
      <Appointment />
      </TabPanel>
      <TabPanel style={{width: '100%'}} value={value} index={2}>
        <AllUserAppointments />
      </TabPanel>
      </div>
    </div>
  );
}

export default UserAccount