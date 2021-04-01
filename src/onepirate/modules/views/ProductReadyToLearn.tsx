import React from "react";
import {createStyles, Theme, withStyles, WithStyles,} from "@material-ui/core/styles";
import Typography from "../components/Typography";
import {Box, Grid, useMediaQuery} from "@material-ui/core";
import Button from "../components/Button";
import {useTranslation} from "react-i18next";
import LoroConf from "../../../LoroConf";

const styles = (theme: Theme) =>
    createStyles({
        itemDesktop: {
            display: "flex",
            flexDirection: "column",
            position: "relative",
            padding: theme.spacing(5),
            height: "400px"
        },
        footerAuthor: {
            position: "absolute",
            bottom: 0,
            right: 0,
            padding: "1em"
        },
        title: {
            color: "white"
        },
        button: {
            marginTop: theme.spacing(4),
        },
        topBox: {
            backgroundColor: theme.palette.primary.main,
            height: "120px",
            width: "100%",
        },
        reviewsGrid: {
            padding: "3em"
        },
        contactContent: {
            width: "100%",
        },
        link: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3),
        },
        buoy: {
            width: 60,
        },
        loroIcon: {
            width: "250px",
            height: "250px"
        },
        containerReviews: {
            marginBottom: theme.spacing(2),
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
    });

function ProductReadyToLearn(props: WithStyles<typeof styles>) {
    const {classes} = props;
    const loroIcon = "./loro.svg";
    const isDesktop = useMediaQuery('(min-width:600px)');
    const {t} = useTranslation();

    return (
        <section>
            <div className={classes.containerReviews}>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    className={classes.topBox}
                >
                    <Typography variant="h3" className={classes.title} align="center">
                        {t("Ready to learn?")}
                    </Typography>
                </Grid>
                <div className={classes.contactContent}>
                    <Box flexDirection="column" display="flex" alignItems="center" justifyContent="center" p={3}>
                        <Box m={1} p={1}>
                            <img className={classes.loroIcon} src={loroIcon} alt="loro icon"/>
                        </Box>
                        <Box m={1} p={1}>
                            <Typography variant="h5" align="center">
                                {t("Install for free and start learning a new language.")}
                            </Typography>
                        </Box>
                        <Box>
                            <Button
                                className={classes.button}
                                variant="contained"
                                size="large"
                                color="primary"
                                onClick={()=> LoroConf.ctaAddToChrome("HowItWorks")}
                            >
                                <Typography align="center">
                                    {isDesktop ? t("Add to Chrome for free") : t("Add to Chrome")}
                                </Typography>
                            </Button>
                        </Box>
                    </Box>
                </div>
            </div>
        </section>
    );
}

export default withStyles(styles)(ProductReadyToLearn);
