import React from "react";
import clsx from "clsx";
import { withStyles, Theme } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import AppBar from "../components/AppBar";
import Toolbar, { styles as toolbarStyles } from "../components/Toolbar";
import { Link as RouterLink } from "react-router-dom";
import { AppBarProps, WithStyles } from "@material-ui/core";

const styles = (theme: Theme) => ({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: "space-between",
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});

function AppAppBar(props: WithStyles<typeof styles> & AppBarProps) {
  const { classes } = props;

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            component={RouterLink}
            to="/"
          >
            {"loro"}
          </Link>
          <div className={classes.right}>
            <Link
                variant="h6"
                underline="none"
                className={clsx(classes.rightLink, classes.linkSecondary)}
                href="https://chrome.google.com/webstore/detail/loro/ddficccfblbcldoekmniikjcfdcggidp?hl=en&authuser=0"
            >
              {"Empieza a aprender"}
            </Link>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              href="https://docs.google.com/forms/d/e/1FAIpQLSeLWDiAocLZ2GGXBAFd3GsM2ukI42ZxhT8UBGj-ZlbLzcM78g/viewform"
            >
              {"Contacto"}
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

export default withStyles(styles)(AppAppBar);
