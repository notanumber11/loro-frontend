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
            marginBottom: theme.spacing(6),
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
            width: "125px",
            height: "125px"
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
            left: "15%",
            overflow: "hidden",
            zIndex: -1,
            transform: "scale(-1, 1)"
        }
    });

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
            <Container className={classes.container}>
                {children}
                <div className={classes.backdrop}/>
                <div className={clsx(classes.background, backgroundClassName)}/>
            </Container>
        </section>
    );
}

export default withStyles(styles)(ProductHeroLayout);
