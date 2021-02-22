import React from "react";
import {createStyles, Theme, withStyles, WithStyles,} from "@material-ui/core/styles";
import Typography from "../components/Typography";
import {Box, Grid} from "@material-ui/core";
import Button from "../components/Button";
import WordHovering from "../../../gui/WordHovering";
import {url} from "inspector";

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
            backgroundColor: theme.palette.secondary.light,
            height: "120px",
            width: "100%",
        },
        reviewsGrid: {
            padding: "3em"
        },
        contactContent: {
            width: "100%",
            position: "relative",
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
        curvyLines: {
            pointerEvents: "none",
            position: "absolute",
            top: -180,
            opacity: 0.7,
        },
    });

function ProductContact(props: WithStyles<typeof styles>) {
    const {classes} = props;

    return (
        <section>
            <div>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    className={classes.topBox}
                >
                    <Typography variant="h3" className={classes.title}>
                        Contact
                    </Typography>
                </Grid>
                <div className={classes.contactContent}>
                    <Box flexDirection="column" display="flex" alignItems="center" justifyContent="center" m={5} p={1}>
                        <Box>
                            <Typography variant="h4" align="center">
                                Got any questions? Need help?
                            </Typography>
                        </Box>
                        <Box>
                            <Button
                                size="large"
                                component="a"
                                href="https://docs.google.com/forms/d/e/1FAIpQLSeLWDiAocLZ2GGXBAFd3GsM2ukI42ZxhT8UBGj-ZlbLzcM78g/viewform"
                                className={classes.button}>
                                Contact us
                            </Button>
                        </Box>
                        <Box p={1} >
                            <Typography variant="subtitle1" className={classes.link} align="center">
                                We are here to help. Get in touch!
                            </Typography>
                        </Box>
                        <Box p={1} >
                            <img src="./producBuoy.svg" className={classes.buoy} alt="buoy"/>
                        </Box>
                    </Box>
                </div>
            </div>

        </section>
    );
}

export default withStyles(styles)(ProductContact);
