import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import useStyles from './useStyles';

const FridgeItem = ({ product, children }) => {
    const classes = useStyles();

    return (
        <ListItem
            alignItems="flex-start"
        // style={"transform:translate(${})"}
        >
            <ListItemAvatar>
                <Avatar
                    alt={product.name.toLowerCase() + '.svg'}
                    src={'/icon_pack/svg/' + product.name.toLowerCase() + '.svg'}
                />
            </ListItemAvatar>
            <ListItemText
                primary={product.name}
                secondary={
                    <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                        >
                            Quantity: {product.quantity}
                        </Typography>
                        {product.creator.id == localStorage.getItem('user') ? '' : ' — by ' + product.creator.fullName}
                    </React.Fragment>
                }
            />
            <ListItemSecondaryAction>
                {children}
            </ListItemSecondaryAction>
        </ListItem>
    );
}

export default FridgeItem;