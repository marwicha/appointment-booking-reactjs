import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Box , Card } from '@material-ui/core';
import React , { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import TopBar from './sections/TopBar';
import Appointment from "../components/Appointment";
import AppointmentService from '../services/appointment.service'
import AuthService from "../services/auth.service";

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
    marginTop: "8%",
    margin: 'auto'
  },
  tabs: {
    borderRight: `1px solid`,
  },
}));


const AllUserAppointments = () => {
  
   const [currentUser, setCurrentUser] = useState("")
   const [appointments, setAppointments] = useState([]);

   useEffect( () => {
   const user = AuthService.getCurrentUser();

    if(user) {
       setCurrentUser(user)
    }
    
  }, [])

    useEffect(() => {	 

    AppointmentService.getUserAppointments().then(response => {	

    setAppointments(response);
    })
  
  }, [appointments])

  const classes = useStyles();
  const [value, setValue] = useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


    const displayUserAppointments = appointments.map((app, index) =>
    <div key={index}>
      <p> {app.prestation} </p>
      <p> {app.slots.slot_date} </p>
    </div>
  );

  return (
    <div>
    <TopBar />
        <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Mon Profil" {...a11yProps(0)} />
        <Tab label="Mes Rendez vous" {...a11yProps(1)} />
        <Tab label="Prendre un rendez vous" {...a11yProps(2)} />
      </Tabs>
      <TabPanel style={{width: '100%'}} value={value} index={0}>
        <Appointment />
      </TabPanel>
      <TabPanel style={{width: '100%'}} value={value} index={1}>
        <Card>
      
            { currentUser && 
            <div>
            {displayUserAppointments} 
            </div>
            }
        
        </Card>
      </TabPanel>
      <TabPanel style={{width: '100%'}} value={value} index={2}>
        Mes reservations
      </TabPanel>
      </div>
    </div>
  );
}

export default AllUserAppointments