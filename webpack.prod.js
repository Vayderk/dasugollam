
const HtmlWebPackPlugin         = require("html-webpack-plugin");
const MiniCssExtractPlugin      = require("mini-css-extract-plugin");
const OptiomizeCssAssestPlugin  = require("optimize-css-assets-webpack-plugin");
const CopyPlugin                = require("copy-webpack-plugin");
const MinifyPlugin              = require("babel-minify-webpack-plugin");
const { CleanWebpackPlugin }    = require("clean-webpack-plugin");

module.exports = {

    mode: "production",
    optimization:{
        minimizer:[
            new OptiomizeCssAssestPlugin()
        ]
    },
    output: {
        filename: "main.[contentHash].js",
        
    },
    module : {
        rules:[
            {
                test : /\.css$/,
                exclude : /styles\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                }
            }
            ,
            {
                test : /styles\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
                options: {
                    attributes : false,
                    minimize: false,
                }
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            esModule: false
                        }
                    }
                ]
            }
        ]
    }, 
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contentHash].css",
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [
            { from: 'src/assets', to: 'assets/' },
            { from: 'src/css', to: 'css/' },
            { from: 'src/js', to: 'js' },
            { from: 'src/html', to: 'html' },
             ],
        }),
        new MinifyPlugin(),
        new CleanWebpackPlugin(),
        
    ]
}








