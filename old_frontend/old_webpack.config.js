const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = {
    entry: {
      pageOne: './src/pages/home.js',
      pageTwo: './src/pages/browse.js',
      pageThree: './src/pages/signin.js',
      pageFour: './src/pages/signup.js',
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/lib',
    },
    function(_env, argv) {
        const isProduction = argv.mode === "production";
     @@ -65,7 +66,12 @@ module.exports = function(_env, argv) {
              new MiniCssExtractPlugin({
                filename: "assets/css/[name].[contenthash:8].css",
                chunkFilename: "assets/css/[name].[contenthash:8].chunk.css"
}),


module: {
         rules: [
                {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                    cacheDirectory: true,
                    cacheCompression: false,
                    envName: isProduction ? "production" : "development"
                    },
                }
                },
                {
                    test: /\.css$/,
                    use: [
                        isProduction ? MiniCssExtractPlugin.loader : "style-loader", 
                        "css-loader"
                    ]
                },
                {
                    test: /\.(png|jpg|gif)$/i,
                    use: {
                        loader: "url-loader",
                        options: {
                        imit: 8192,
                        name: "static/media/[name].[hash:8].[ext]"
                            }
                        }
                    },
                    {
                        test: /\.svg$/,
                        use: ["@svgr/webpack"]
                    },
                    {
                        test: /\.(eot|otf|ttf|woff|woff2)$/,
                        loader: require.resolve("file-loader"),
                        options: {
                            name: "static/media/[name].[hash:8].[ext]"
                        }
                    }
                ] 
        
        resolve: {
          extensions: [".js", ".jsx"]
        }

        plugins: [
            isProduction &&
                new MiniCssExtractPlugin({
                    filename: "assets/css/[name].[contenthash:8].css",
                    chunkFilename: "assets/css/[name].[contenthash:8].chunk.css"
        })
    ].filter(Boolean)
}
       

// module.rules = {
//     test: /\.jsx?$/,
//     exclude: /node_modules/,
//     use: {
//         loader: "babel-loader",
//         options: {
//             cacheDirectory: true,
//             cacheCompression: false,
//             envName: isProduction ? "production" : "development"
//         }
//       }
// }

// module.resolve = {
//     extensions: [".js", ".jsx"]
// }