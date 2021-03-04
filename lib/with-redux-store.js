import React from 'react';
import { initializeStore } from "../store";
import axios from 'axios';

import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

const isServer = typeof window === 'undefined';
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE';

function getOrCreateStore(initialState) {
    if (isServer) {
        return initializeStore(initialState)
    }

    // Create store if unavailable on the client and set it on the window object

    if (!window[__NEXT_REDUX_STORE__]) {
        window[__NEXT_REDUX_STORE__] = initializeStore(initialState)
    }

    return window[__NEXT_REDUX_STORE__]
}

export default App => {
    return class AppWithRedux extends React.Component {
        static async getInitialProps (appContext) {

            let siteData;

            const reduxStore = getOrCreateStore()
            const baseUrl = publicRuntimeConfig.base_url;

            appContext.ctx.reduxStore = reduxStore;

            let appProps ={}
            if (typeof App.getInitialProps === 'function') {
                appProps = await App.getInitialProps(appContext)
            }

            try {
                const response = await
                    axios.get(`${publicRunTimeConfig.base_url}`);
                    siteData = response.data[0]
            } catch {
                console.error('[with-redux-store] - Error in Base URL')
            }

            return {
                ...appProps,
                siteData,
                initialReduxState: reduxStore.getState()
            };
        }

        constructor(props) {
            super(props)
            this.reduxStore = getOrCreateStore(props.initialReduxState)
        }
        render() {
            return <App {...this.props} reduxStore={this.reduxStore} />
        }
    }
}