import React from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import {
  withStyles,
  Theme,
  WithStyles,
  createStyles,
} from "@material-ui/core/styles";
import Typography from "../components/Typography";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: theme.spacing(9),
      marginBottom: theme.spacing(9),
    },
    button: {
      border: "4px solid currentColor",
      borderRadius: 0,
      height: "auto",
      padding: theme.spacing(2, 5),
    },
    link: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
    buoy: {
      width: 60,
    },
  });

function ProductSmokingHero(props: WithStyles<typeof styles>) {
  const { classes } = props;

  return (
      <Container className={classes.root} component="section">
          <Button className={classes.button}
                href="https://docs.google.com/forms/d/e/1FAIpQLSeLWDiAocLZ2GGXBAFd3GsM2ukI42ZxhT8UBGj-ZlbLzcM78g/viewform"
          >
              <Typography variant="h4" component="span">
                  Contacto
              </Typography>
          </Button>
          <Typography variant="subtitle1" className={classes.link}>
              Estamos aquí para ayudarte
          </Typography>
      </Container>
  );
}

export default withStyles(styles)(ProductSmokingHero);
