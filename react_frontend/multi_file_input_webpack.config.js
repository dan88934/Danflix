const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const getFilesFromDir = require("./config/files");
const PAGE_DIR = path.join("src", "pages", path.sep);

const htmlPlugins = getFilesFromDir(PAGE_DIR, [".html"]).map( filePath => {
  const fileName = filePath.replace(PAGE_DIR, "");
  return new HtmlWebPackPlugin({
    chunks:[fileName.replace(path.extname(fileName), ""), "vendor"],
    template: filePath,
    filename: fileName
  })
});

const entry = getFilesFromDir(PAGE_DIR, [".js"]).reduce( (obj, filePath) => {
  const entryChunkName = filePath.replace(path.extname(filePath), "").replace(PAGE_DIR, "");
  obj[entryChunkName] = `./${filePath}`;
  return obj;
}, {}); 

module.exports = {
  // entry: 
  entry: entry,
  // {
  //   home: './src/pages/home.js',
  //   browse: './src/pages/browse.js',
  //   signin: './src/pages/signin.js',
  //   signup: './src/pages/signup.js',
  // },
  output: {
    filename: '[name].js',
    path: __dirname + '/lib',
},
  plugins: [
    ...htmlPlugins
  ],
  resolve:{
    alias:{
      src: path.resolve(__dirname, "src"),
      components: path.resolve(__dirname, "src", "components")
    }
  },
  module: {
    rules: [
      {
	test: /\.jsx?$/,
	exclude: /node_modules/,
	use: {
	  loader:"babel-loader",
	  options:{
	    presets: [
	      "@babel/preset-env",
	      "@babel/preset-react"
	      ], 
        plugins: [
          "babel-plugin-styled-components"
        ],
	    }
	  },
  },
  {
    test: /\.svg$/,
    use: ["@svgr/webpack"]
  },
    
    ]
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /node_modules/,
            chunks: "initial",
            name: "vendor",
            enforce: true
          }
        }
      }
    }
};