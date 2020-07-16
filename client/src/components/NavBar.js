import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 3,
    textShadow: '0px 2px 4px grey'
  },
  naved: {
    backgroundColor: 'transparent',
    color: 'black',
    boxShadow: 'none',
    borderBottom: '3px solid crimson',
    height: '150px'
  },
  toot: {
    minHeight: '150px'
  },
  icons: {
    color: 'crimson'
  }
}));

export default function NavBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.naved}>
        <Toolbar className={classes.toot}>
          <Typography variant="h6" className={classes.title}>
          <Link to="/" style={{ textDecoration: 'none',color: 'black',fontSize: '35px' }}>
            P I X E D
          </Link>
          </Typography>
          <Link to="/about">
            <IconButton>
              <InfoOutlinedIcon className={classes.icons} />
            </IconButton>
          </Link>  
        </Toolbar>
      </AppBar>
    </div>
  );
}