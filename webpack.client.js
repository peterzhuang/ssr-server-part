const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {

    // Tell webpack the root file of our server application
    entry:  './src/client/client.js',

    // Tell webpack where to put output file that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },

    // Tell webpack to run babel on every file it runs through
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        '@babel/react',
                        ['@babel/env', { targets: { browsers: ['last 2 versions'] } }]
                    ],
                    plugins: [
                        [ "@babel/plugin-proposal-class-properties" ]
                    ],
                }
            }
        ]
    }

};