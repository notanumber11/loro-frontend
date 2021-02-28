// --- Post bootstrap -----
import React from "react";
import {createStyles, Theme, WithStyles, withStyles} from "@material-ui/core/styles";
import Typography from "../components/Typography";
import {Box, CircularProgress} from "@material-ui/core";
import Button from "../components/Button";
import {useTranslation} from "react-i18next";

const styles = (theme: Theme) =>
    createStyles({
        button: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(2),
        },
        onBoardingContainer: {
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: theme.spacing(5),
            padding: theme.spacing(2),
            minHeight: 500,
        },
        loroIcon: {
            width: "250px",
            height: "250px"
        },
    });

function ProductOnBoarding(props: WithStyles<typeof styles>) {
    const {classes} = props;
    const {t} = useTranslation();
    const loroIcon = "./loro.svg";
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [isInstalled, setIsInstalled] = React.useState(false);
    const [isOnBoardingFinished, setIsOnBoardingFinished] = React.useState(false);

    const startTime = new Date().getTime();
    const intervalLoadingLimit = 4000;

    const intervalLoadingAction = () => {
        let node = document.getElementById("loroExtensionInstalled");
        if (node != null) {
            setIsLoaded(true);
            setIsInstalled(true);
            window.clearInterval(intervalLoading);
        }
        if (new Date().getTime() - startTime > intervalLoadingLimit) {
            clearInterval(intervalLoading);
            setIsLoaded(true);
            setIsInstalled(false);
            return;
        }
    };

    const intervalFinishOnBoardingAction = () => {
        let node = document.getElementById("loroOnBoardingFinished");
        if (node != null) {
            setIsOnBoardingFinished(true);
            window.clearInterval(intervalFinishOnBoarding);
        }
    };

    const intervalLoading = setInterval(intervalLoadingAction, 500);
    const intervalFinishOnBoarding = setInterval(intervalFinishOnBoardingAction, 250);

    return (
            <div className={classes.onBoardingContainer}>
                {
                    isLoaded && isOnBoardingFinished &&
                    <div>
                        <Box flexDirection="column" display="flex" alignItems="center" justifyContent="center">
                            <img className={classes.loroIcon} src={loroIcon} alt="loro icon"/>
                        </Box>
                        <Typography variant="h3" color="primary" align="center">
                            {t("Thanks for installing Loro!")}
                        </Typography>
                        <Typography variant="h5" align="center">
                            {t("You can close this tab and continue browsing")}
                        </Typography>
                    </div>
                }
                {
                    isLoaded && !isInstalled &&
                    <div>
                        <Box flexDirection="column" display="flex" alignItems="center" justifyContent="center">
                            <img className={classes.loroIcon} src={loroIcon} alt="loro icon"/>
                        </Box>
                        <Typography variant="h5">
                            {t("You need to install Loro extension in order to perform the on-boarding!")}
                        </Typography>
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
                                    {t("Add to Chrome for free")}
                                </Typography>
                            </Button>
                        </Box>
                    </div>
                }
                {
                    !isLoaded &&
                    <Box flexDirection="column" display="flex" alignItems="center" justifyContent="center">
                        <CircularProgress size={120}/>
                    </Box>
                }
            </div>
    );
}

export default withStyles(styles)(ProductOnBoarding);
