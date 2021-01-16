import React from "react";
import clsx from "clsx";
import {createStyles, Theme, WithStyles, withStyles,} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const styles = (theme: Theme) =>
    createStyles({
        root: {
            color: theme.palette.common.white,
            position: "relative",
            display: "flex",
            alignItems: "center",
            [theme.breakpoints.up("sm")]: {
                height: "80vh",
                minHeight: 500,
                maxHeight: 1300,
            },
        },
        container: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(14),
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
        backdrop: {},
        background: {
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            zIndex: -2,
        },
        arrowDown: {
            position: "absolute",
            bottom: theme.spacing(4),
        },
        loroIcon: {
/*            position: "fixed",
            bottom: "0",*/
            width: "250px",
            height: "250px"
        },
        imageBoxRight: {
            position: "absolute",
            bottom: 0,
            right: 0,
            overflow: "hidden",
            zIndex: -1
        },
        imageBoxLeft:{
            position: "absolute",
            bottom: 0,
            left: 0,
            overflow: "hidden",
            zIndex: -1,
            transform: "scale(-1, 1)"
        }
    });

const backgroundImage2 = "/loro.svg";

interface ProductHeroLayoutProps {
    backgroundClassName: string;
}

function ProductHeroLayout(
    props: WithStyles<typeof styles> &
        React.HTMLAttributes<HTMLDivElement> &
        ProductHeroLayoutProps
) {
    const {backgroundClassName, children, classes} = props;

    return (
        <section className={classes.root}>
            <div className={classes.imageBoxRight}>
                <img className={classes.loroIcon} src={backgroundImage2} alt="increase priority"/>
            </div>
            <div className={classes.imageBoxLeft}>
                <img className={classes.loroIcon} src={backgroundImage2} alt="increase priority"/>
            </div>
            <Container className={classes.container}>
                {children}
                <div className={classes.backdrop}/>
                <div className={clsx(classes.background, backgroundClassName)}/>
                <img
                    className={classes.arrowDown}
                    src="/productHeroArrowDown.png"
                    height="32"
                    width="24"
                    alt="arrow down"
                />
            </Container>
        </section>
    );
}

export default withStyles(styles)(ProductHeroLayout);
