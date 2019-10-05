import React from 'react';
import Dashboard from './Dashboard/Dashboard';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import { maxWidth } from '@material-ui/system';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  Logo: {
    width: '18px',
    height: '20.5px',
    'object-fit': 'contain',
  },
}));

const HomePage = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <AppBar
        position="static"
        color="default"
        style={{ background: 'transparent', boxShadow: 'none' }}
      >
        <Toolbar>
          <img src="logo.svg" className="Logo"></img>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Premium</Button>
        </Toolbar>
      </AppBar>
      <Box display="flex" flexDirection="row">
        <Tabs
          style={{ maxWidth: '42.5px', minWidth: '42.5px' }}
          value={value}
          orientation="vertical"
          onChange={handleChange}
        >
          <Tab
            icon={<img src="dashboard.svg" className="Logo"></img>}
            style={{ maxWidth: '42.5px', minWidth: '42.5px' }}
          />
        </Tabs>
        <Box p={4}>
          <Dashboard></Dashboard>
        </Box>
      </Box>
    </div>
  );
};

export default HomePage;
