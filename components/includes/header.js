import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import landingPageStyle from "../../public/jss/components/landingPageStyle";

import {createMuiTheme, responsiveFontSizes, ThemeProvider } from "@material-ui/core/styles";
const useStyles = makeStyles(landingPageStyle);

const Header = () => {
    const classes = useStyles();

    let defaultTheme = createMuiTheme()

    defaultTheme = responsiveFontSizes(defaultTheme)

    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <header className={classes.subtitleMain}>
                    Header
                </header>
            </ThemeProvider>
        </>
    )
}

export default Header;