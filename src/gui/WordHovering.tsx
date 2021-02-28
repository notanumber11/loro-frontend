import React from 'react';
import TranslationCard from "./TranslationCard";
import {createMuiTheme, createStyles, makeStyles} from "@material-ui/core/styles";
import DemoFrame from "./DemoFrame";
import shadows from "@material-ui/core/styles/shadows";
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import {ThemeProvider} from '@material-ui/core';

const useStyles = makeStyles((theme) =>
    createStyles({
        hovering: {
            backgroundColor: "#def8ff",
            position: "relative",
            display: "inline-block",
            cursor: "pointer"
        }
    })
);

const innerTheme = createMuiTheme({
    palette: {},
});

type ToolTipProps = {
    original: string
    translated: string
}

const WordHovering = (toolTipProps: ToolTipProps) => {
    const classes = useStyles();

    const [isHovering, setHovering] = React.useState(false);

    const frameStyles = {
        width: "0px",
        height: "0px",
        border: "none",
        padding: "none",
        boxShadow: shadows[3],
        zIndex: 1,
        // Based on: https://blog.theodo.com/2018/01/responsive-iframes-css-trick/
        position: "absolute",
        marginLeft: "auto",
        marginRight: "auto",
        left: 0,
        right: 0,
        maxWidth: "fit-content",
        maxHeight: "fit-content"
    };

    // Based on: https://blog.theodo.com/2018/01/responsive-iframes-css-trick/
    // Offset of 100 since people has not seen what is in the bottom of the street while reading.
    return <div style={{display: "inline"}}>
            <span>
                <span
                    onMouseEnter={() => setHovering(true)}
                    onMouseLeave={() => setHovering(false)}
                    className={classes.hovering}>
                        {toolTipProps.translated}
                    <ScopedCssBaseline>
                        <ThemeProvider theme={innerTheme}>
                                {
                                    isHovering &&
                                    // @ts-ignore
                                    <DemoFrame frameStyles={frameStyles}>
                                        <TranslationCard original={toolTipProps.original} translated={toolTipProps.translated}
                                                         updateModal={()=>{}}/>
                                    </DemoFrame>
                                }
                            </ThemeProvider>

                        </ScopedCssBaseline>

                  </span>
            </span>
    </div>;
};

export default WordHovering;
