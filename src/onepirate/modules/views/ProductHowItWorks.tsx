import React from "react";
import {
  withStyles,
  Theme,
  createStyles,
  WithStyles,
} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "../components/Button";
import Typography from "../components/Typography";
import { Link as RouterLink } from "react-router-dom";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      backgroundColor: theme.palette.secondary.light,
      overflow: "hidden",
    },
    container: {
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(15),
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    item: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(0, 5),
    },
    title: {
      marginBottom: theme.spacing(14),
    },
    number: {
      fontSize: 24,
      fontFamily: theme.typography.fontFamily,
      color: theme.palette.secondary.main,
      fontWeight: theme.typography.fontWeightMedium,
    },
    image: {
      height: 55,
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
    curvyLines: {
      pointerEvents: "none",
      position: "absolute",
      top: -180,
      opacity: 0.7,
    },
    button: {
      marginTop: theme.spacing(8),
    },
    videoContainer: {
      position: "relative",
      paddingBottom: "56.25%",
      paddingTop: "35px",
      height: 0,
      overflow: "hidden",
      width: "100%"
    },
    youtubeFrame: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    }
  });

function ProductHowItWorks(props: WithStyles<typeof styles>) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
          <a id="howItWorks">
              <Typography variant="h4" marked="center" className={classes.title} component="h2">
                  Como funciona
              </Typography>
          </a>
        <div className={classes.videoContainer}>
          <iframe className={classes.youtubeFrame}
                  src="https://www.youtube.com/embed/z9Ul9ccDOqE"
                  allowFullScreen
                  frameBorder="0"></iframe>
        </div>
        <Button
            color="secondary"
            size="large"
            variant="contained"
            className={classes.button}
            component="a"
            href="https://chrome.google.com/webstore/detail/loro/ddficccfblbcldoekmniikjcfdcggidp?hl=en&authuser=0"
        >
          Añade a chrome gratis
        </Button>
      </Container>
    </section>
  );
}
export default withStyles(styles)(ProductHowItWorks);
