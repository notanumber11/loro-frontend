import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import Button from "../components/Button";
import {Box, Grid} from "@material-ui/core";
import {useTranslation} from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        grow: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(0),
        },
        title: {
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
        sectionDesktop: {
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'flex',
            }
        },
        sectionMobile: {
            display: 'flex',
            [theme.breakpoints.up('md')]: {
                display: 'none',
            },
        },
        button: {
            backgroundColor: theme.palette.secondary.light,
            color: "white",
            margin: theme.spacing(2, 0),
        },
        topItemBox: {
            marginLeft: "10px",
            marginRight: "10px",
            alignItems: "center",
            justifyContent: "center"
        }
    }),
);

export default function PrimarySearchAppBar() {
    const classes = useStyles();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);
    const {t} = useTranslation();

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };


    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const goToChromeStore = () => {
        window.location.href = "https://chrome.google.com/webstore/detail/loro/ddficccfblbcldoekmniikjcfdcggidp"
    };

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={goToChromeStore}>
                <p>{t("Add to Chrome")}</p>
            </MenuItem>
            <MenuItem onClick={() => {
                window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSeLWDiAocLZ2GGXBAFd3GsM2ukI42ZxhT8UBGj-ZlbLzcM78g/viewform"
            }}>
                <p>{t("Contact")}</p>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <MenuItem onClick={() => {
                        window.location.href = window.location.origin.includes("localhost") ? window.location.origin : (window.location.origin + "/loro")
                    }}>
                        <Typography className={classes.title} variant="h4" noWrap>
                            Loro
                        </Typography>
                    </MenuItem>

                    <div className={classes.grow}/>
                    <div className={classes.sectionDesktop}>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                        >
                            <Box className={classes.topItemBox}>
                                <Button
                                    className={classes.button}
                                    size="large"
                                    variant="contained"
                                    color="secondary"
                                    component="a"
                                    href="https://chrome.google.com/webstore/detail/loro/ddficccfblbcldoekmniikjcfdcggidp"
                                >
                                    <Typography align="center">
                                        {t("Add to Chrome")}
                                    </Typography>
                                </Button>
                            </Box>
                        </Grid>

                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
                                    onClick={handleMobileMenuOpen}
                        >
                            <MenuIcon/>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </div>
    );
}