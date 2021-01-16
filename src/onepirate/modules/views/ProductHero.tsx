import React from "react";
import {
  withStyles,
  Theme,
  WithStyles,
  createStyles,
} from "@material-ui/core/styles";
import Button from "../components/Button";
import Typography from "../components/Typography";
import ProductHeroLayout from "./ProductHeroLayout";
import WordHovering from "../../../gui/WordHovering";

const styles = (theme: Theme) =>
  createStyles({
    background: {
      // backgroundImage: `url(${backgroundImage})`,
      // backgroundColor: "#7fc7d9", // Average color of the background image.
      backgroundPosition: "center",
    },
    button: {
      minWidth: 200,
    },
    h5: {
      marginBottom: theme.spacing(4),
      marginTop: theme.spacing(4),
      [theme.breakpoints.up("sm")]: {
        marginTop: theme.spacing(10),
      },
      color: "black"
    },
    more: {
      marginTop: theme.spacing(2),
    }
  });

function ProductHero(props: WithStyles<typeof styles>) {
  const { classes } = props;

  return (
      <ProductHeroLayout backgroundClassName={classes.background}>
          <Typography  align="center" variant="h2" marked="center">
              Aprende idiomas <WordHovering original="mientras" translated="while"/> navegas
          </Typography>
          <Typography align="center" variant="h5" className={classes.h5}>
              La extensión gratuita de chrome que te ayuda a aprender idiomas sin darte ni cuenta.
          </Typography>
          <Button
              color="secondary"
              variant="contained"
              size="large"
              className={classes.button}
              component="a"
              href="https://chrome.google.com/webstore/detail/loro/ddficccfblbcldoekmniikjcfdcggidp?hl=en&authuser=0"
          >
              Añade a chrome gratis
          </Button>
      </ProductHeroLayout>
  );
}

export default withStyles(styles)(ProductHero);
