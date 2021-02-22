import React from "react";
import {createStyles, Theme, withStyles, WithStyles,} from "@material-ui/core/styles";
import Typography from "../components/Typography";
import {Box, Grid, useMediaQuery} from "@material-ui/core";
import Button from "../components/Button";

const styles = (theme: Theme) =>
    createStyles({
        containerHowItWorks: {
            marginBottom: theme.spacing(5),
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
        item: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: theme.spacing(1, 5),
        },
        title: {
            color: "white"
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
            "&:hover": {
                //you want this to be the same as the backgroundColor above
                backgroundColor: theme.palette.secondary.light
            },
            backgroundColor: theme.palette.secondary.light,
            color: "white"
        },
        topBox: {
            width: "100%",
        },
        topBoxContent: {
            backgroundColor: theme.palette.secondary.light,
            height: "120px",
            width: "100%",
            marginBottom: theme.spacing(5),
        },
        contentHowItWorks: {
            padding: theme.spacing(5, 0),
        }
    });

function ProductHowItWorks(props: WithStyles<typeof styles>) {
    const {classes} = props;
    const isDesktop = useMediaQuery('(min-width:600px)');

    return (
        <section>
            <div className={classes.containerHowItWorks}>
                <div className={classes.topBox}>
                    <Grid
                        className={classes.topBoxContent}
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Typography variant="h3" className={classes.title} align="center">
                            How it works
                        </Typography>
                    </Grid>
                </div>
                <div className={classes.contentHowItWorks}>
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={4}>
                            <div className={classes.item}>
                                <div className={classes.number}>1.</div>
                                <img
                                    src="./install.png"
                                    alt="suitcase"
                                    className={classes.image}
                                />
                                <Typography variant="h5" align="center">
                                    Install the browser extension for free.
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div className={classes.item}>
                                <div className={classes.number}>2.</div>
                                <img
                                    src="./settings.png"
                                    alt="graph"
                                    className={classes.image}
                                />
                                <Typography variant="h5" align="center">
                                    Choose the language you want to learn and the difficulty.
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div className={classes.item}>
                                <div className={classes.number}>3.</div>
                                <img
                                    src="./learn.png"
                                    alt="clock"
                                    className={classes.image}
                                />
                                <Typography variant="h5" align="center">
                                    Browse as normal and start to learn!
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                    <Box flexDirection="column" display="flex" alignItems="center" justifyContent="center">
                        <Button
                            className={classes.button}
                            size="large"
                            variant="contained"
                            color="primary"
                            component="a"
                            href="https://chrome.google.com/webstore/detail/loro/ddficccfblbcldoekmniikjcfdcggidp"
                        >
                            <Typography align="center">
                                {isDesktop ? "Add to Chrome for free" : "Add to Chrome"}
                            </Typography>
                        </Button>
                    </Box>
                </div>
            </div>
        </section>
    );
}

export default withStyles(styles)(ProductHowItWorks);
