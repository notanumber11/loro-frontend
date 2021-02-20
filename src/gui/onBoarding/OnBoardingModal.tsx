import React, {useEffect} from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import OnBoardingStepper from "./OnBoardingStepper";
import defaultTheme from "./DefaultTheme";
import { ThemeProvider } from '@material-ui/core/styles';
import {Paper} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: "none"
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(2, 4, 3),
            border: "none",
            outline: 'none'
        },
        '&:hover': {
            outline: 'none',
        },
        '&.Mui-selected': {
            outline: 'none',
        }
    }),
);

export default function OnBoardingModal() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <ThemeProvider theme={defaultTheme}>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    // onClose={handleClose}
                    // closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                        <Fade in={open}>
                            <Paper className={classes.paper} elevation={3}>
                                <OnBoardingStepper/>
                            </Paper>
                        </Fade>
                </Modal>
        </ThemeProvider>
    );
}
