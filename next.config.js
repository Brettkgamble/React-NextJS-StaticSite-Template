const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');

const withPlugins = require('next-compose-plugins');

const withImages = require('next-images');
const withCSS = require("@zeit/next-css");

let BASE_URL = process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : process.env.PROD_URL;

const nextConfig = {

    publicRuntimeConfig: {
        base_url: BASE_URL
    },

    webpack: (config, options) => {
        config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
        return config
    }
};

module.exports = withPlugins([[withImages]], nextConfig);
