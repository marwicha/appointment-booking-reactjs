import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Box , Card, CardHeader, CardContent, Grid, Container} from '@material-ui/core';
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


const UserAccount = () => {
  
   const [currentUser, setCurrentUser] = useState("")
   const [appointments, setAppointments] = useState([]);

   useEffect( () => {
   const user = AuthService.getCurrentUser();

   console.log(user)
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
     
    <section>
    <Container maxWidth="md">
    <Grid container spacing={4} lg={12} sm={12} md={12} xs={12} justify="center" align="center" >
    
        <Grid item lg={4} sm={4} md={4} xs={12}>
        <Card>
            <CardHeader 
              style={{
               backgroundColor: "#dfe5e6",
               color: "black"
              }}
              subheader="Mes rendez vous"
            />

            <CardContent>
           
             <Typography variant="body2" color="textSecondary" component="p">
            {app.prestation} 

            </Typography>
           
            </CardContent>

        </Card>
        </Grid>
        </Grid>
        </Container>
        </section>
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
      sdfgjg
      </TabPanel>
      <TabPanel style={{width: '100%'}} value={value} index={2}>
        
        {displayUserAppointments}
      </TabPanel>
      </div>
    </div>
  );
}

export default UserAccount