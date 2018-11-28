const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/user.js',
    output: {
        filename: 'main.js',
        path: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    'vue-loader',
                    {
                        loader: 'iview-loader',
                        options: {
                            prefix: false
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|ttf|woff|eot|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/images/[name].[ext]?[hash]'
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /iview\/.*?js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },

        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({template: './index.ejs'})
    ]
};
