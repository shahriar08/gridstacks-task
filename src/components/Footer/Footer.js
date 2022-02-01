import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

import { Container, Grid, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    footer: {
      backgroundColor: '#2a3b8f',
      width: `100%`,
      // position: 'absolute',
      bottom: '0',
      overflow: "hidden",
      marginTop: "4em",
      padding: "3em 0 ",
    },
    link: {
      fontSize: "1.25em",
      color: "#fff",
      "&:hover": {
        color: theme.palette.info.main,
      },
    },
    copylight: {
      color: "#fff",
      fontSize: "1em",
      margin: '10px'
    },
  }));
const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer} >
        <Container maxWidth="lg" >
          <Grid container spacing={3} justify="center">

          </Grid>
          <Grid container direction="column" style={{ margin: "1.2em 0" }}>

          </Grid>
          <Grid
            item
            container
            component={"a"}
            target="_blank"
            rel="noreferrer noopener"
            href="https://satoruakiyama.com"
            justify="center"
            style={{
              textDecoration: "none",
            }}
          >
            <Typography className={classes.copylight}>
              About Company
            </Typography>
            <Typography  className={classes.copylight}>
              Privacy Policy
            </Typography>
            <Typography className={classes.copylight}>
              Terms & Conditions
            </Typography>
            <Typography className={classes.copylight}>
              Blog
            </Typography>
            <Typography className={classes.copylight}>
              Contact US
            </Typography>
          </Grid>
        </Container>
      </footer>
    );
};

export default Footer;