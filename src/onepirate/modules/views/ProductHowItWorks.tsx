import React from "react";
import {createStyles, Theme, withStyles, WithStyles,} from "@material-ui/core/styles";
import Typography from "../components/Typography";
import {Grid} from "@material-ui/core";
import Button from "../components/Button";

const styles = (theme: Theme) =>
    createStyles({
        howItWorks: {
            display: "flex",
            overflow: "hidden",
        },
        container2: {
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
            backgroundColor: theme.palette.secondary.light,
            color: "white"
        },
        topBox: {
            backgroundColor: theme.palette.secondary.light,
            height: "120px",
            width: "100%",
            marginBottom: theme.spacing(5),
        },
        bottomBox: {
            backgroundColor: theme.palette.secondary.light,
            height: "40px",
            width: "100%",
            margin: theme.spacing(5),
        }
    });

function ProductHowItWorks(props: WithStyles<typeof styles>) {
    const {classes} = props;

    return (
        <section className={classes.howItWorks}>
            <div className={classes.container2}>
                <div className={classes.topBox}>
                    <Grid className={classes.topBox}
                          container
                          direction="row"
                          justify="center"
                          alignItems="center"
                    >
                        <Typography variant="h3" className={classes.title}>
                            How it works
                        </Typography>
                    </Grid>
                </div>
                <img
                    src="/productCurvyLines.png"
                    className={classes.curvyLines}
                    alt="curvy lines"
                />
                <div>
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={4}>
                            <div className={classes.item}>
                                <div className={classes.number}>1.</div>
                                <img
                                    src="/install.png"
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
                                    src="/settings.png"
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
                                    src="/learn.png"
                                    alt="clock"
                                    className={classes.image}
                                />
                                <Typography variant="h5" align="center">
                                    Browse as normal and start to learn!
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <Button
                    size="large"
                    variant="contained"
                    className={classes.button}
                    to="/sign-up/"
                >
                    Add to Chrome
                </Button>
            </div>
        </section>
    );
}

export default withStyles(styles)(ProductHowItWorks);
