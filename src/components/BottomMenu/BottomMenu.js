import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import PersonIcon from '@material-ui/icons/Person';
import KitchenIcon from '@material-ui/icons/Kitchen';
import PeopleIcon from '@material-ui/icons/People';
import CloudIcon from '@material-ui/icons/Cloud';

const useStyles = makeStyles({
  vridgeIcon: {
    position: 'relative',
  },
  cloudIcon: {
    position: 'absolute',
    top: '2px',
    left: '10px',
    opacity: 1,
  },
});
const BottomMenu = () => {
  const classes = useStyles();
  const history = useHistory();

  const [value, setValue] = useState(history.location.pathname);

  const handleChange = (event, newValue) => {
    history.push(newValue);
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Account" value="/account" icon={<PersonIcon />} />
      <BottomNavigationAction
        label="Vridge"
        value="/vridge/yours"
        icon={
          <span className={classes.vridgeIcon}>
            <CloudIcon className={classes.cloudIcon} />
            <KitchenIcon />
          </span>
        }
      />
      <BottomNavigationAction label="Fridge" value="/fridge" icon={<KitchenIcon />} />
      <BottomNavigationAction label="Community" value="/community" icon={<PeopleIcon />} />
    </BottomNavigation>
  );
};

export default BottomMenu;
