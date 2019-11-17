import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    maxWidth: '500px',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  search: {
    width: '100%',
    margin: '0 0 20px 0',
  },
  header: {
    fontSize: '26px',
  },
  getIcon: {
    color: 'red',
  },
  heading: {
    float: 'left',
    marginLeft: '-15px',
  },

  leaveButton: {
    float: 'right',
    marginRight: '-15px',
  },
  w100: {
    width: '100%',
  },
}));

export default useStyles;
