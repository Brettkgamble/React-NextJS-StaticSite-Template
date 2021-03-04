import React from 'react';
import classNames from 'classnames';
import Parallax from "../../nextjsmuipro/components/Parallax/Parallax";
import GridContainer from "../../nextjsmuipro/components/Grid/GridContainer";
import GridItem from "../../nextjsmuipro/components/Grid/GridItem";

import { makeStyles } from "@material-ui/core/styles";

// Components
import Header from '../../nextjsmuipro/components/headers/Header';
import HeaderLinks from "../../nextjsmuipro/components/headers/HeaderLinks";

import presentationStyle from "../../../public/jss/pages/presentationStyle";
const useStyles = makeStyles(presentationStyle);

export default function MainHeader(props) {
    const classes = useStyles();
    return(
        <>
            <Header
                brand="NextJS Material Kit Pro"
                links = {<HeaderLinks dropdownHoverColor="info" />}
                fixed
                color="transparent"
                changeColorOnScroll={{
                    height: 400,
                    color: "info"
                }}
            />
            <Parallax
                image={require("../../../public/images/misc/nextjs_header.jpg")}
                className={classes.parallax}
            >
              <div className={classes.container}>
                  <GridContainer>
                    <GridItem>
                      <div className={classes.brand}>
                        <h1>
                          NextJS Material Kit
                          <span className={classes.proBadge}>PRO</span>
                        </h1>
                        <h3 className={classes.title}>
                          A Badass Material-UI Kit based on Material Design.
                        </h3>
                      </div>
                    </GridItem>
                  </GridContainer>
              </div>
            </Parallax>
        </>
    )
}
