import React, {useEffect} from "react";
import {createStyles, Theme, withStyles, WithStyles,} from "@material-ui/core/styles";
import Typography from "../components/Typography";
import {Box, Grid, Paper, useMediaQuery} from "@material-ui/core";
import Button from "../components/Button";
import LoroConf from "../../../LoroConf";

const styles = (theme: Theme) =>
    createStyles({
        containerReviews: {
            marginBottom: theme.spacing(5),
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
        itemDesktop: {
            display: "flex",
            flexDirection: "column",
            position: "relative",
            padding: theme.spacing(5),
            height: "fit-content",
            maxWidth: "400px"
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
            width: "100%",
        },
        topBoxContent: {
            backgroundColor: theme.palette.primary.main,
            height: "120px",
            width: "100%",
            marginBottom: theme.spacing(5),
        },
        bottomBox: {
            backgroundColor: theme.palette.primary.main,
            height: "40px",
            width: "100%",
            margin: theme.spacing(5),
        },
        reviewsGridDesktop: {
            padding: "3em"
        },
        reviewsGridMobile: {
            padding: "1em"
        }
    });

function ProductOpinions(props: WithStyles<typeof styles>) {
    const {classes} = props;
    const isDesktop = useMediaQuery('(min-width:600px)');

    useEffect(() => {
        let items = document.getElementsByClassName(classes.itemDesktop);
        let maxHeight = 0;
        for(let i=0; i<items.length; i++) {
            let current = items[i];
            // @ts-ignore
            let height = current.scrollHeight;
            if (height > maxHeight) {
                maxHeight = height;
            }
        }
        maxHeight += 50;

        for(let i=0; i<items.length; i++) {
            let current = items[i];
            if (isDesktop) {
                // @ts-ignore
                current.style.height = `${maxHeight}px`;
            } else {
                // @ts-ignore
                current.style.height= `${current.scrollHeight + 50}px`;
            }

        }
    });

    return (
        <section>
            <div className={classes.containerReviews}>
                <div className={classes.topBox}>
                    <Grid className={classes.topBoxContent}
                          container
                          direction="row"
                          justify="center"
                          alignItems="center"
                    >
                        <Typography variant="h3" className={classes.title} align="center">
                            {
                                isDesktop ? "What other learners are saying" : "Reviews"
                            }

                        </Typography>
                    </Grid>
                </div>
                <div>
                    <Grid container spacing={10} className={ isDesktop ? classes.reviewsGridDesktop : classes.reviewsGridMobile}>
                        <Grid item xs={12} md={4}>
                            <Paper elevation={10} className={classes.itemDesktop}>
                                <Typography variant="h5">
                                    Loved the seamlessness of the chrome extension Loro. Responses and
                                    translations
                                    were pretty correct and apt. I am planning to visit Spain soon and Loro
                                    is
                                    definitely my language companion.
                                </Typography>

                                <Typography variant="h4" color="primary" align="right" className={classes.footerAuthor}>
                                    Caleb
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div>
                                <Paper elevation={10} className={classes.itemDesktop}>
                                    <Typography variant="h5">
                                        It's a pretty original idea that allows to learn new words effortless. Its UI
                                        and design is also modern and eye-candy so it is really easy to use.
                                    </Typography>
                                    <Typography variant="h4" color="primary" align="right" className={classes.footerAuthor}>
                                        Armando
                                    </Typography>
                                </Paper>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div>
                                <Paper elevation={10} className={classes.itemDesktop}>
                                    <Typography variant="h5">
                                        Loro is so easy to use! I don't have much time in my busy life to spend
                                        studying Spanish, but this made it so easy to learn as I go about my daily
                                        online reading.

                                    </Typography>
                                    <Typography variant="h4" color="primary" align="right" className={classes.footerAuthor}>
                                        Anna
                                    </Typography>
                                </Paper>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </section>
    );
}

export default withStyles(styles)(ProductOpinions);
