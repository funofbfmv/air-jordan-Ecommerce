import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(6, 0),
  },
  link: {
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
    marginRight: theme.spacing(4),
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

const NavigateFooter = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Container maxWidth="lg">
        <Grid container justify="center">
          <Grid item>
            <Typography variant="body1">
              <Link to="/" className={classes.link}>
                Home
              </Link>
              <Link to="/about" className={classes.link}>
                About
              </Link>
              <Link to="/products" className={classes.link}>
                Products
              </Link>
              <Link to="/contact" className={classes.link}>
                Contact
              </Link>
              <Link to="/faq" className={classes.link}>
                FAQ
              </Link>
              <Link to="/terms" className={classes.link}>
                Terms of Service
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default NavigateFooter;