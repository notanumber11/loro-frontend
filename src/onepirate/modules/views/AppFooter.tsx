import React from "react";
import {makeStyles, Theme} from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Typography from "../components/Typography";
import {Link as RouterLink} from "react-router-dom";
import {Box, Grid, MenuItem, Select} from "@material-ui/core";
import i18next from "i18next";
import {useTranslation} from "react-i18next";
import LoroConf from "../../../LoroConf";

function Copyright() {
    return (
        <React.Fragment>
            {"© "}
            <Link color="inherit" href="https://material-ui.com/">
                Loro
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
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
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
    },
    whiteTypography: {
        color: "white"
    },
    selectBackground: {
        backgroundColor: theme.palette.primary.main,
    }
}));

export default function AppFooter() {
    const {t} = useTranslation();

    const classes = useStyles();
    const [languageState, setLanguageState] = React.useState(LoroConf.getLanguage);

    const onLanguageChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        let value = event.target.value as string;
        console.log("Changing language to: ", value);
        i18next.changeLanguage(value);
        LoroConf.setLanguage(value);
        setLanguageState(value);
    };

    return (
        <Typography component="footer" className={classes.root}>
            <Container className={classes.container}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Box display="flex" flexDirection="row" p={1} m={1}>
                            <Box p={1} m={2}>
                                <div id="legal">
                                    <Typography variant="h6" marked="left" gutterBottom
                                                className={classes.footerTitles}>
                                        {t("Legal")}
                                    </Typography>
                                    <ul className={classes.list}>
                                        <li className={classes.listItem}>
                                            <Link component={RouterLink} to="/privacy/">
                                                <Typography className={classes.footerSubtitles}>
                                                    {t("Privacy")}
                                                </Typography>
                                            </Link>
                                        </li>
                                        <li className={classes.listItem}>
                                            <Link
                                                href="https://docs.google.com/forms/d/e/1FAIpQLSeLWDiAocLZ2GGXBAFd3GsM2ukI42ZxhT8UBGj-ZlbLzcM78g/viewform">
                                                <Typography className={classes.footerSubtitles}>
                                                    {t("Contact")}
                                                </Typography>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </Box>
                            <Box p={1} m={2}>
                                <div id="languageSwitch">
                                    <Typography variant="h6" marked="left" gutterBottom
                                                className={classes.footerTitles}>
                                        {t("Language")}
                                    </Typography>
                                    <Select
                                        labelId="demo-controlled-open-select-label"
                                        id="demo-controlled-open-select"
                                        onChange={onLanguageChange}
                                        value={languageState}
                                    >
                                        <MenuItem value={"en"}><Typography>English</Typography> </MenuItem>
                                        <MenuItem value={"es"}><Typography>Español</Typography> </MenuItem>
                                        <MenuItem value={"pl"}><Typography>Polski </Typography> </MenuItem>
                                    </Select>
                                </div>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <div id="iconAttribution">
                            <Typography variant="caption" className={classes.footerSubtitles}>
                                <div>{t("Icons designed by")} <a href="https://www.flaticon.es/autores/freepik"
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
