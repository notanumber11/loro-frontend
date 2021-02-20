import React, {useEffect} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {
    Box,
    FormControl,
    FormControlLabel,
    IconButton,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    useMediaQuery
} from "@material-ui/core";
import SettingsIcon from '@material-ui/icons/Settings';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme: Theme) => {
        return createStyles({
            laptop: {
                width: "450px"
            },
            phone: {

            },
            backButton: {
                marginRight: theme.spacing(1),
            },
            instructions: {
                marginTop: theme.spacing(1),
                marginBottom: theme.spacing(1),
            },
            formChooseLanguage: {
                margin: theme.spacing(1),
                minWidth: 120,
            },
            loroIcon: {
                width: "100px",
                height: "100px"
            },
            loroIconMini: {
                width: "25px",
                height: "25px"
            },
        })
    }
);

function getSteps() {
    return ['Escoge lenguage', 'Pasa el cursor por las traducciones', 'Accede a tus ajustes', 'Añade un acceso directo a Loro'];
}

export default function OnBoardingStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    const [languageState, setLanguageState] = React.useState("en");
    const iconSrc = "/loro.svg";

    const getStepContent = (stepIndex: number) => {
        console.log("The index is: " + stepIndex);
        switch (stepIndex) {
            case 0:
                return mainLanguage;
            case 1:
                return chooseLanguage;
            case 2:
                return learnWhileYourBrowse;
            case 3:
                return settings;
            case 4:
                return everythingReady;
            default:
                return 'Unknown stepIndex';
        }
    };

    const onLanguageChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        let value = event.target.value as string;
        setLanguageState(value);
    };

    const mainLanguage =
        <div >
            <Typography variant="h4" color="primary">
                Loro
            </Typography>
            <Box display="flex" justifyContent="center" alignItems="center" m={1} p={1}>
                <FormControl component="fieldset">
                    <RadioGroup aria-label="gender" name="gender1" value={"female"} onChange={() => {
                    }}>
                        <FormControlLabel value="Castellano" control={<Radio/>}
                                          label={<Typography variant="body1">Mi lengua materna es el
                                              castellano</Typography>}/>
                        <FormControlLabel value="Polski" control={<Radio/>}
                                          label={<Typography variant="body1">Mój język ojczysty to
                                              polski</Typography>}/>
                    </RadioGroup>
                </FormControl>
            </Box>
        </div>

    const chooseLanguage =
        <div >
            <Box p={1}>
                <Typography variant="h4" color="primary">
                    Bienvenido a Loro
                </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
                <Box p={1}>
                    <Typography variant="h6">
                        Quiero aprender:
                    </Typography>
                </Box>
                <Box p={1}>
                    <FormControl className={classes.formChooseLanguage}>
                        <Select
                            onChange={onLanguageChange}
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={languageState}
                        >
                            <MenuItem value={"en"}>English</MenuItem>
                            <MenuItem value={"pl"}>Polski</MenuItem>
                            <MenuItem value={"pt"}>Português</MenuItem>
                            <MenuItem value={"it"}>Italiano</MenuItem>
                            <MenuItem value={"fr"}>Français</MenuItem>
                            <MenuItem value={"es"}>Español</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>
        </div>

    const settings =
        <div >
            <Typography variant="h4" color="primary">
                Ajustes
            </Typography>
            <Typography variant="h6">
                <p>
                    <span className="loro">Accede a los ajustes de Loro desde desde el icono </span>
                    <IconButton size="small" title="Ajustes">
                        <SettingsIcon/>
                    </IconButton>
                    <span className="loro">
                    al pasar el raton por encima de alguna palabra traducida.
                    Tambien puedes acceder a los ajustes desde el menu de extensiones de chrome.</span>
                </p>
            </Typography>
        </div>

    const everythingReady = <div >
        <Typography variant="h4" color="primary">
            Loro esta listo !
        </Typography>
        <Typography variant="h6" className={classes.instructions}> Ya puedes cerrar esta ventana y continuar navegando y
            aprendiendo</Typography>
    </div>

    const event = new Event('loro', {bubbles: true});

    const dispatchLoroEvent = () => {
        window.dispatchEvent(event);
    };

    const learnWhileYourBrowse =
        <div >
            <Typography variant="h4" color="primary">
                Como funciona
            </Typography>
            <Typography variant="h6">
                <p className="loro">
                    Mientras navegas la web Loro traducira algunas palabras para que puedas aprender un nuevo idioma sin
                    esfuerzo.
                    Fijate en las palabras con fondo azul y veras que estan en otro idioma. Pasa el raton por encima de
                    ellas para
                    ver la traduccion al castellano.
                </p>
            </Typography>
        </div>

    useEffect(() => {
        dispatchLoroEvent();
    });

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const matches = useMediaQuery('(min-width:600px)');

    return (
        <div className={ matches ? classes.laptop : classes.phone}>
            <Box display="flex" justifyContent="center" m={1} p={1}>
                <img className={classes.loroIcon} src={iconSrc} alt="loro icon"/>
            </Box>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel></StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                <div>
                    <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.backButton}
                    >
                        <ArrowBackIcon style={{color: 'black'}}/>
                    </Button>
                    {activeStep === steps.length ? (
                        <div>
                        </div>
                    ) : (
                        <Button variant="contained" color="primary" onClick={handleNext}>
                            <ArrowForwardIcon style={{color: 'white'}}/>
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}
