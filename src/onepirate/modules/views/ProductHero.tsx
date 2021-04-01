import React from "react";
import {createStyles, Theme, WithStyles, withStyles,} from "@material-ui/core/styles";
import Button from "../components/Button";
import Typography from "../components/Typography";
import ProductHeroLayout from "./ProductHeroLayout";
import WordHovering from "../../../gui/WordHovering";
import {Box, Grid, MenuItem, Select, useMediaQuery} from "@material-ui/core";
import replaceJSX from "react-string-replace"
import LoroConf from "../../../LoroConf";
import i18n from "../../../i18n"
import {useTranslation} from "react-i18next";

if (i18n == null) {
    console.log("Problems with i18n, it is null");
} else {
    console.log("Language loaded !");
}

const styles = (theme: Theme) =>
    createStyles({
        background: {
            // backgroundImage: `url(${backgroundImage})`,
            // backgroundColor: "#7fc7d9", // Average color of the background image.
            backgroundPosition: "center",
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
            width: "250px",
            height: "250px"
        },
        languageBar: {
            width: "700px",
            height: "82px"
        },
        language: {
            marginLeft: "1em"
        },
        explanation: {
            marginTop: "1em",
            padding: "1.25em",
            borderWidth: "0.5em",
            borderRadius: "24px",
            /*
                        width: "80%",
            */
            borderStyle: "solid",
            borderColor: theme.palette.primary.main
        },
        browserBox: {
            backgroundColor: theme.palette.primary.main,
            height: "2em"
        },
        mainGrid: {
            padding: "0.5em",
        },
        button: {
            marginTop: theme.spacing(4),
        }
    });

function ProductHero(props: WithStyles<typeof styles>) {
    const {t} = useTranslation();
    const {classes} = props;
    const isDesktop = useMediaQuery('(min-width:600px)');
    const loroIcon = "./loro.svg";
    const [languageToLearnState, setLanguageToLearnState] = React.useState((LoroConf.getAvailableLanguagesToLearn() as Array<string>)[0]);

    const loroExplained = t("Loro explained");

    const onLanguageChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        let value = event.target.value as string;
        setLanguageToLearnState(value);
    };

    function adaptContentToLanguage(arrayOfWords: Array<string>, content: string) {
        // In order to translate we need to know first the mother tongue and the language that the
        // user wants to learn
        let r = content;
        for (let i = 0; i < arrayOfWords.length; i++) {
            try {
                let word = arrayOfWords[i];
                let lanToLearn = languageToLearnState;
                console.log("Checking if is included");
                if (!LoroConf.getAvailableLanguagesToLearn().includes(languageToLearnState)) {
                    lanToLearn = LoroConf.getAvailableLanguagesToLearn()[0];
                    setLanguageToLearnState(lanToLearn);
                }
                let translated = LoroConf.replaceWord(LoroConf.getLanguage(), lanToLearn, word);
                let regEx = new RegExp('(' + word + ')', 'gi');
                // @ts-ignore
                r = replaceJSX(r, regEx, (match, j) => {
                    let key = Math.random() * 100 * j;
                    return <WordHovering key={key} original={match} translated={translated}/>
                });
            } catch (e) {
                console.error("Problems replacing word: ", arrayOfWords[i]);
            }
        }
        return r;
    }

    function getAvailableLanguagesToLearn() {
        const items = [];
        const languagesToLearn = LoroConf.getAvailableLanguagesToLearn() as Array<string>;
        for (let lan of languagesToLearn) {
            items.push(
                <MenuItem key={lan} value={lan}>
                    <Typography variant="h4"
                                color="secondary"> {LoroConf.LANGUAGE_CODE_TO_LANGUAGE.get(lan)} </Typography>
                </MenuItem>
            );
        }
        return <Select className={classes.language}
                       onChange={onLanguageChange}
                       labelId="demo-simple-select-outlined-label"
                       id="demo-simple-select-outlined"
                       value={languageToLearnState}
        >
            {items}
        </Select>;
    }

    return (
        <ProductHeroLayout backgroundClassName={classes.background}>
            <Grid container spacing={isDesktop ? 10 : 5} alignItems="center" justify="center"
                  className={classes.mainGrid}>
                <Grid item xs={12} md={6}>
                    <Box flexDirection="column" display="flex" alignItems="center" justifyContent="center">
                        <img className={classes.loroIcon} src={loroIcon} alt="loro icon"/>
                    </Box>
                    <Typography variant="h3" color="primary">
                        {t("Learn new languages by browsing the web")}
                    </Typography>
                    <Typography variant="h5" className={classes.h5}>
                        {t("Short description")}
                    </Typography>
                    <Box flexDirection="column" display="flex" alignItems="center" justifyContent="center">
                        <Button
                            className={classes.button}
                            size="large"
                            variant="contained"
                            color="primary"
                            onClick={()=> LoroConf.ctaAddToChrome("ProductHero")}
                        >
                            <Typography align="center">
                                {isDesktop ? t("Add to Chrome for free") : t("Add to Chrome")}
                            </Typography>
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}
                >
                    <Typography align="center" variant="h4" color="primary">
                        {t("I want to learn")}
                        {getAvailableLanguagesToLearn()}
                    </Typography>
                    <Box flexDirection="column" display="flex" alignItems="center" justifyContent="center">
                        <div className={classes.explanation}>
                            <Typography variant="h5" className={classes.h5}>
                                {adaptContentToLanguage(LoroConf.getWordsToTranslate(LoroConf.getLanguage()), loroExplained)}
                            </Typography>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </ProductHeroLayout>
    );
}

export default withStyles(styles)(ProductHero);
