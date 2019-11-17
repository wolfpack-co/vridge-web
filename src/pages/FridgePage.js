import { green } from '@material-ui/core/colors';
import Fab from '@material-ui/core/Fab';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Zoom from '@material-ui/core/Zoom';
import AddIcon from '@material-ui/icons/Add';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import Fridge from '../components/Fridge/Fridge';
import AuthorizedLayout from './AuthorizedLayout';

const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative'
    },
    fab: {
        color: 'primary',
        position: 'absolute',
        bottom: theme.spacing(12),
        right: theme.spacing(2),
    },
}));

const FridgePage = () => {
    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory();
    const [value, setValue] = React.useState(history.location.pathname);

    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    };

    const fab = {
        color: 'primary',
        className: clsx(classes.fab),
        icon: <AddIcon />,
        label: 'Add',
    };

    const handleChange = () => {
        setValue('/fridge/new');
        history.push('/fridge/new');
    };

    return (
        <AuthorizedLayout className={classes.root} >
            <Fridge />
            <Zoom
                key={fab.color}
                in={value === '/fridge'}
                timeout={transitionDuration}
                style={{
                    transitionDelay: `${value === '/fridge' ? transitionDuration.exit : 0}ms`,
                }}
                unmountOnExit
            >
                <Fab aria-label={fab.label} className={fab.className} color={fab.color} onClick={handleChange}>
                    {fab.icon}
                </Fab>
            </Zoom>
        </AuthorizedLayout >
    );
}

export default FridgePage;
