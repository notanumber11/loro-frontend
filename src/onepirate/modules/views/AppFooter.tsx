import React from "react";
import {makeStyles, Theme} from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Typography from "../components/Typography";
import TextField from "../components/TextField";
import {Link as RouterLink} from "react-router-dom";
import {Box, Grid} from "@material-ui/core";

function Copyright() {
    return (
        <React.Fragment>
            {"© "}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{" "}
            {new Date().getFullYear()}
        </React.Fragment>
    );
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: "flex",
        backgroundColor: theme.palette.secondary.light,
    },
    container: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8),
        display: "flex",
    },
    iconsWrapper: {
        height: 120,
    },
    icons: {
        display: "flex",
    },
    icon: {
        width: 48,
        height: 48,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.palette.warning.main,
        marginRight: theme.spacing(1),
        "&:hover": {
            backgroundColor: theme.palette.warning.dark,
        },
    },
    list: {
        margin: 0,
        listStyle: "none",
        padding: 0,
    },
    listItem: {
        paddingTop: theme.spacing(0.5),
        paddingBottom: theme.spacing(0.5),
    },
    language: {
        marginTop: theme.spacing(1),
        width: 150,
    },
    footerTitles: {
        color: "white"
    },
    footerSubtitles: {
        color: "white"
    }
}));

const LANGUAGES = [
    {
        code: "es-ES",
        name: "Español",
    }
];

export default function AppFooter() {
    const classes = useStyles();

    return (
        <Typography component="footer" className={classes.root}>
            <Container className={classes.container}>

              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Box display="flex" flexDirection="row" p={1} m={1}>
                    <Box p={1} m={2}>
                      <div id="legal">
                        <Typography variant="h6" marked="left" gutterBottom className={classes.footerTitles}>
                          Legal
                        </Typography>
                        <ul className={classes.list}>
                          <li className={classes.listItem}>
                            <Link component={RouterLink} to="/terms/">
                              <Typography className={classes.footerSubtitles}>
                                Terms
                              </Typography>
                            </Link>
                          </li>
                          <li className={classes.listItem}>
                            <Link component={RouterLink} to="/privacy/">
                              <Typography className={classes.footerSubtitles}>
                                Privacy
                              </Typography>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Box>
                    <Box p={1} m={2}>
                      <div id="languageSwitch">
                        <Typography variant="h6" marked="left" gutterBottom className={classes.footerTitles}>
                          Language
                        </Typography>
                        <TextField
                            select
                            SelectProps={{
                              native: true,
                            }}
                            className={classes.language}
                        >
                          {LANGUAGES.map((language) => (
                              <option value={language.code} key={language.code}>
                                {language.name}
                              </option>
                          ))}
                        </TextField>
                      </div>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <div id="iconAttribution">
                    <Typography variant="caption" className={classes.footerSubtitles}>
                      <div>Iconos diseñados por <a href="https://www.flaticon.es/autores/freepik"
                                                   title="Freepik">Freepik</a> from <a
                          href="https://www.flaticon.es/"
                          title="Flaticon">www.flaticon.es</a>
                      </div>
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </Container>
        </Typography>
    );
}
