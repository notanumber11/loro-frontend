import React from "react";
import {createStyles, Theme, withStyles, WithStyles,} from "@material-ui/core/styles";
import Typography from "../components/Typography";
import {Box, Grid} from "@material-ui/core";
import Button from "../components/Button";
import WordHovering from "../../../gui/WordHovering";

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
            marginTop: theme.spacing(8),
            backgroundColor: theme.palette.secondary.light,
            color: "white"
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
                        Ready to learn?
                    </Typography>
                </Grid>
                <div className={classes.contactContent}>
                    <Box flexDirection="column" display="flex" alignItems="center" justifyContent="center" m={3} p={3}>
                        <Box m={1} p={1}>
                            <img className={classes.loroIcon} src={loroIcon} alt="loro icon"/>
                        </Box>
                        <Box m={1} p={1}>
                            <Typography variant="h5" align="center">
                                Install for free and start learning a <WordHovering original="new" translated="nuevo"/> language.
                            </Typography>
                        </Box>
                        <Box>
                            <Button
                                variant="contained"
                                size="large"
                                color="primary"
                                component="a"
                                href="https://chrome.google.com/webstore/detail/loro/ddficccfblbcldoekmniikjcfdcggidp"
                            >
                                <Typography align="center">
                                    Add to Chrome for free
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
