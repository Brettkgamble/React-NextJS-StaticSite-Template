import App, { Container } from 'next/app';
import React from 'react';
import Router from 'next/router';

import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux';
import MainLayout from "../components/layouts/mainLayout";
import Favicon from "react-favicon";
import "../public/fonts/fonts.css"
import '../public/css/styles.css'

import { ThemeProvider } from "@material-ui/core/styles";
import theme from '../public/jss/theme'

// Don't need the following (PageChange) but it is kind of interesting as it loads a spinner based on router.events

Router.events.on("routeChangeStart", (url) => {
  document.body.classList.add("body-page-transition");
  // ReactDOM.render(
  //   <PageChange path={url} />,
  //   document.getElementById("page-transition")
  // );
});

class TrainerConnectApp extends App {

    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
          jssStyles.parentElement.removeChild(jssStyles);
        }
    }

    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
          pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps, reduxStore } = this.props;

        const Layout = Component.layout || (({ children }) => <>{children}</>);

        return (
            <>
                <Favicon url='../public/images/favicon.ico' />
                <Provider store={reduxStore}>
                    <ThemeProvider theme={theme} >
                        <Layout>
                            <MainLayout>
                                <Component {...pageProps} />
                            </MainLayout>
                        </Layout>
                    </ThemeProvider>
                </Provider>
            </>
        )
    }
}

export default withReduxStore(TrainerConnectApp)
