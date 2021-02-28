import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";

const myStyles = makeStyles({
    cardContent: {
        paddingBottom: 0,
        "&:last-child": {
            padding: 0,
        }
    },
    envelope: {
        minWidth: 120,
        minHeight: 100
    },
    loroIcon: {
        position: "fixed",
        bottom: "0",
        width: "38px",
        height: "32px",
        right: "0px",
        transform: "scale(2, 2)",
        margin: "-40px -20px -10px -0px"
    }
});


type TranslationCardProps = {
    original: string,
    translated: string,
    updateModal: (val:boolean)=>void
}

const TranslationCard = ({original, translated, updateModal}: TranslationCardProps) => {
    const classes = myStyles();
    return (
        <Card className={classes.envelope} >
            <CardContent className={classes.cardContent}>
                <img alt="loroIcon" className={classes.loroIcon} src="./loro.svg"/>
                <Typography variant="h6" component="span">
                    {original}
                </Typography>
                <Divider variant="fullWidth"/>
                <Typography color="textSecondary" component="span" variant="body1"
                            className="testCssNotAffectShadowDom">
                    {translated}
                </Typography>
            </CardContent>
            <Box display="flex" flexDirection="row-reverse" align-items="flex-end">
                <Box p={1}>
                </Box>
            </Box>
        </Card>
    );
};

export default TranslationCard;
