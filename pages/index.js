import React, { Component } from 'react';

import { withStyles } from "@material-ui/core/styles";
import MainHeader from "../components/common/headers/MainHeader";
import SectionDescription from "../components/sections/SectionDescription";
import Footer from "../components/nextjsmuipro/components/Footer/Footer";
import Button from "../components/nextjsmuipro/components/CustomButton/Button";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import presentationStyle from "../public/jss/pages/presentationStyle";

const useStyles = {
    ...presentationStyle
}

class Home extends Component {
    render() {
        const { classes } = this.props
        return (
            <>
                <MainHeader />
                <div className={classes.main + " " + classes.mainRaised}>
                    <SectionDescription />
                </div>
                <Footer
                    theme="white"
                    content={
                      <div>
                        <div className={classes.left}>
                          <a
                            href="https://www.creative-tim.com/product/nextjs-material-kit-pro?ref=njsmkp-presentation"
                            target="_blank"
                            className={classes.footerBrand}
                          >
                            NextJS Material Kit PRO
                          </a>
                        </div>
                        <div className={classes.pullCenter}>
                            <List className={classes.list}>
                                <ListItem className={classes.inlineBlock}>
                                    <a
                                        href="https://www.creative-tim.com/?ref=njsmkp-presentation"
                                        target="_blank"
                                        className={classes.block}
                                  >
                                    Creative Tim
                                    </a>
                                </ListItem>
                                <ListItem className={classes.inlineBlock}>
                                    <a
                                        href="https://www.creative-tim.com/presentation?ref=njsmkp-presentation"
                                        target="_blank"
                                        className={classes.block}
                                    >
                                        About us
                                    </a>
                                </ListItem>
                                <ListItem className={classes.inlineBlock}>
                                    <a
                                        href="http://blog.creative-tim.com/?ref=njsmkp-presentation"
                                        className={classes.block}
                                    >
                                        Blog
                                    </a>
                                </ListItem>
                                <ListItem className={classes.inlineBlock}>
                                    <a
                                        href="https://www.creative-tim.com/license?ref=njsmkp-presentation"
                                        target="_blank"
                                        className={classes.block}
                                    >
                                        Licenses
                                    </a>
                                </ListItem>
                            </List>
                        </div>
                        <div className={classes.rightLinks}>
                            <ul>
                                <li>
                                  <Button
                                    href="https://twitter.com/CreativeTim?ref=creativetim"
                                    target="_blank"
                                    color="twitter"
                                    justIcon
                                    simple
                                  >
                                    <i className="fab fa-twitter" />
                                  </Button>
                                </li>
                                <li>
                                  <Button
                                    href="https://dribbble.com/creativetim?ref=creativetim"
                                    target="_blank"
                                    color="dribbble"
                                    justIcon
                                    simple
                                  >
                                    <i className="fab fa-dribbble" />
                                  </Button>
                                </li>
                                <li>
                                  <Button
                                    href="https://instagram.com/CreativeTimOfficial?ref=creativetim"
                                    target="_blank"
                                    color="instagram"
                                    justIcon
                                    simple
                                  >
                                    <i className="fab fa-instagram" />
                                  </Button>
                                </li>
                            </ul>
                        </div>
                      </div>
                    }
                />
            </>
        )
    }
};


export default withStyles(useStyles)(Home);