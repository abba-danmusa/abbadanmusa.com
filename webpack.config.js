const path = require('path')

const javascript = {
    test: /\.m?js$/,
    exclude: /(node_modules|bower_components)/,
    use: [{
        loader: 'babel-loader'
    }],
}

// dotenv.config({ path: '.env' })
module.exports = {

    node: {
        global: true,
        __filename: true,
        __dirname: true
    },
    entry: {
        App: './public/javascripts/index-app.js',
    },
    output: {
        path: path.resolve(__dirname, 'public', 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [javascript]
    },
    resolve: {
        modules: ['node_modules']
    },
    mode: 'production',
    watch: true

}

process.noDeprecation = true