const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
    // Inform webpack that we're building bundle for nodeJS, rather than for the browser

    target: 'node',

    // Tell webpack the root file of our server application
    entry:  './src/index.js',

    // Tell webpack where to put output file that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    externals: [webpackNodeExternals()],

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