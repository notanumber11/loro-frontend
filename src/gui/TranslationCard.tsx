import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import {Box, CardActions, Collapse, Zoom} from "@material-ui/core";
import {useTranslation} from "react-i18next";
import i18n from "../i18n"
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

if (i18n == null) {
    console.log("Problems with i18n, it is null");
}

const myStyles = makeStyles((theme) => ({
    cardContent: {
        paddingBottom: "0",
        "&:last-child": {
            padding: 0,
        },
        paddingTop: 4,
        paddingRight: 8,
        paddingLeft: 8,
    },
    cardActions: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        padding: "4px"
    },
    envelope: {
        minWidth: 105,
        maxWidth: 240,
        minHeight: 60,
        display: "inline-grid",
    },
    loroIcon: {
        position: "fixed",
        bottom: "0",
        width: "38px",
        height: "32px",
        transform: "scale(-1.6, 1.6)",
        margin: "-0px -0px -15px -30px"
    },
    rewardContent: {
        paddingBottom: 0,
        "&:last-child": {
            paddingBottom: 0,
        },
        padding: "16px", // For some reason the padding gets reset when the card is under the Zoom element
    },
    rewardTypography: {
        color: "green"
    },
    rewardIcon: {
        fontSize: "3rem"
    },
    button: {
        color: theme.palette.secondary.light,
        marginLeft: "0.25em",
    },
    smallButton: {
        fontSize: "18px"
    },
    originalWord: {
        fontSize: "1.1em"
    }
}));


type TranslationCardProps = {
    original: string,
    translated: string,
    openModalCallback: () => void,
    openSettingsCallback: () => void,
    removeWordCallback: () => void,
    openIknowWordCallback: () => void,
}

const TranslationCard = ({original, translated, openModalCallback, openSettingsCallback, removeWordCallback, openIknowWordCallback}: TranslationCardProps) => {
    const {t, i18n} = useTranslation();
    const classes = myStyles();
    const [showKnownWordsCounter, setShowKnownWordsCounter] = React.useState(false);
    const [showCardContent, setShowCardContent] = React.useState(true);
    const [showCollapsed, setShowCollapsed] = React.useState(true);
    const [languageState, setLanguageState] = React.useState("en");
    const audio = new Audio();

    const listenWord = ()=> {
        let data = {
            "word": translated,
            "language": languageState
        };
        let myUrl = "https://j5vh5ulpv9.execute-api.us-east-1.amazonaws.com/default/speechSynthesizer";
        let startTime = performance.now();
        fetch(myUrl, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8', 'x-api-key': 'zooKZR7W8B9m1ZoUgfTqp7YGlxF6bt4G5nc9V5si'}
        })
            .then(response => response.json())
            .then(data => {
                let endTime = performance.now();
                let elapsedTime = endTime - startTime;
                console.log("The elapsed time of the network call is: " + elapsedTime);
                let mp3Base64 = data["body"];
                audio.src = "data:audio/mp3;base64," + mp3Base64;
                audio.play();
            });
    };

    return (
        <div>
            <Collapse in={showCollapsed}>
                <Card className={classes.envelope}>
                    {
                        showKnownWordsCounter &&
                        <Zoom in={showKnownWordsCounter}
                              style={{transitionDelay: showKnownWordsCounter ? '400ms' : '0ms'}}>
                            <CardContent className={classes.rewardContent}>
                                <Typography variant="h6" color="primary" component="span">
                                    Nice!
                                </Typography>
                                <Divider variant="fullWidth"/>
                                <Typography className={classes.rewardTypography} variant="h3">
                                    <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper">
                                        <ThumbUpIcon className={classes.rewardIcon} fontSize="large"/>
                                    </Box>
                                </Typography>
                            </CardContent>
                        </Zoom>
                    }
                    {
                        showCardContent &&
                        <div>
                            <CardContent className={classes.cardContent}>
                                <img alt="loroIcon" className={classes.loroIcon} src="./loro.svg"/>
                                <Box display="flex" alignItems="center">
                                    <Box flexGrow={1}>
                                        <Typography className={classes.originalWord} variant="h6" component="span" align="center">
                                            {original}
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <IconButton size="small" title={t("Listen")} className={classes.button}
                                                    onClick={() => listenWord()}>
                                            <VolumeUpIcon/>
                                        </IconButton>
                                    </Box>
                                </Box>
                            </CardContent>
                            <CardActions disableSpacing className={classes.cardActions}>
                            </CardActions>
                        </div>
                    }
                </Card>
            </Collapse>
        </div>

    );
};

export default TranslationCard;
