import React from "react";
import {createStyles, Theme, WithStyles, withStyles,} from "@material-ui/core/styles";
import Button from "../components/Button";
import Typography from "../components/Typography";
import ProductHeroLayout from "./ProductHeroLayout";
import WordHovering from "../../../gui/WordHovering";
import {Grid, MenuItem, Select} from "@material-ui/core";

const styles = (theme: Theme) =>
    createStyles({
        background: {
            // backgroundImage: `url(${backgroundImage})`,
            // backgroundColor: "#7fc7d9", // Average color of the background image.
            backgroundPosition: "center",
        },
        button: {
            minWidth: 200,
            backgroundColor: "#f50057"
        },
        h5: {
            marginBottom: theme.spacing(2),
            marginTop: theme.spacing(2),
            [theme.breakpoints.up("sm")]: {
                // marginTop: theme.spacing(10),
            },
            color: "black"
        },
        more: {
            marginTop: theme.spacing(2),
        },
        loroIcon: {
            /*            position: "fixed",
                      bottom: "0",*/
            width: "175px",
            height: "175px"
        },
        languageBar: {
            /*            position: "fixed",
                      bottom: "0",*/
            width: "700px",
            height: "82px"
        },
        animation: {
            /*            position: "fixed",
                      bottom: "0",*/
            width: "375px",
            height: "270px"
        },
        language: {
            marginLeft: "1em"
        },
        explanation: {
            margin: "1em",
            padding: "1.25em",
            borderWidth: "0.5em",
            borderRadius: "24px",
            width: "80%",
            borderStyle: "solid",
            borderColor: theme.palette.primary.main
        },
        browserBox: {
            backgroundColor: theme.palette.primary.main,
            height: "2em"
        },
        mainGrid: {
            padding: "2em"
        }
    });

function ProductHero(props: WithStyles<typeof styles>) {
    const {classes} = props;
    const loroIcon = "/loro.svg";
    const animationText = "/translated_text.jpg";
    const languageBar = "/language_bar.PNG";


    return (
        <ProductHeroLayout backgroundClassName={classes.background}>
            <Grid container spacing={8} alignItems="center" justify="center" className={classes.mainGrid}>
                <Grid item xs={6}>
                    <div>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                        >
                            <img className={classes.loroIcon} src={loroIcon} alt="loro icon"/>
                        </Grid>
                    </div>
                    <Typography variant="h3" color="primary">
                        Learn <WordHovering original="new" translated="nuevos"/> languages by browsing the web
                    </Typography>
                    <Typography variant="h5" className={classes.h5}>
                        The free Chrome extension that helps you learn a language without even trying.
                    </Typography>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Button
                            variant="contained"
                            color="primary"
                            component="a"
                            href="https://chrome.google.com/webstore/detail/loro/ddficccfblbcldoekmniikjcfdcggidp?hl=en&authuser=0"
                        >
                            Add to Chrome for free
                        </Button>
                    </Grid>
                </Grid>
                <Grid item xs={6}
                >
                    <div>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                        >
                            <Typography align="center" variant="h4" color="primary">
                                I want to learn:

                                <Select className={classes.language}
                                        onChange={() => {
                                        }}
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        value={"es"}
                                >
                                    <MenuItem key={"es"} value={"es"}>
                                        <Typography variant="h4" color="secondary"> Spanish </Typography>
                                    </MenuItem>
                                    <MenuItem key={"de"} value={"de"}>
                                        <Typography variant="h4" color="secondary"> Germany </Typography>
                                    </MenuItem>
                                    <MenuItem key={"fr"} value={"fr"}>
                                        <Typography variant="h4" color="secondary"> French </Typography>
                                    </MenuItem>
                                </Select>

                            </Typography>
                            <div className={classes.explanation}>
                                <Typography variant="h5" className={classes.h5}>
                                    While browsing the web Loro will translate some <WordHovering original="words" translated="palabras"/> so you can learn
                                    a <WordHovering original="new" translated="nuevo"/> language without effort.
                                    Look at the words with a blue background and you will see that they are in <WordHovering original="another" translated="otro"/> language. Hover the mouse over
                                    them to see their translation.
                                </Typography>
                            </div>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </ProductHeroLayout>
    );
}

export default withStyles(styles)(ProductHero);
