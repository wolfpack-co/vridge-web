import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './Menu.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  tabsContainer: {},
}));

export default function SimpleTabs() {
  const history = useHistory();
  const classes = useStyles();

  const [value, setValue] = React.useState(history.location.pathname);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          aria-label="simple tabs example"
          value={value}
          className={classes.tabsContainer}
          onChange={(event, newValue) => setValue(newValue)}
        >
          <Tab
            value="/vridge/yours"
            onClick={() => history.push('/vridge/yours')}
            label="Your offerings"
            {...a11yProps(0)}
          />
          <Tab
            value="/fridge/others"
            onClick={() => history.push('/vridge/others')}
            label="Others offerings"
            {...a11yProps(1)}
          />
        </Tabs>
      </AppBar>
    </div>
  );
}
