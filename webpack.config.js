const path = require("path");
const webpack = require("webpack");
const bundlePath = path.resolve(__dirname, "dist/");

module.exports = {
  entry: "./src/index.js",// tells Webpack where our application starts and where to start bundling our files
  /*helps define how your exported javascript modules are transformed and which ones are included according to the given array of rules*/
  module: {
    rules: [
        /*
            test and exclude properties are conditions to match file against. In this case,
            it’ll match anything outside of the node_modules and bower_components directories.
            Since we’ll be transforming our .js and .jsx files as well, we’ll need to direct Webpack to use Babel.
            Finally, we specify that we want to use the env preset in options.
        */
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['env'] }
      },
        /*
            rule is for processing CSS. Since we’re not pre-or-post-processing our CSS,
            we just need to make sure to add style-loader and css-loader to the use property.
            css-loader requires style-loader in order to work.
            loader is a shorthand for the use property, when only one loader is being utilized.
        */
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  //The resolve property allows us to specify which extensions Webpack will resolve 
  resolve: { extensions: ['*', '.js', '.jsx'] },
  // The output property tells Webpack where to put our bundled code
  output: {
  //  The publicPath property specifies what directory the bundle should go in, and also tells webpack-dev-server where to serve files from.
    publicPath: bundlePath,
    filename: "bundle.js"
  },
  /*
  We set up webpack-dev-server in the devServer property. 
  This doesn’t require much for our needs — 
  just the location we’re serving static files from (such as our index.html) 
  and the port we want to run the server on.
  */
  devServer: {
    contentBase: path.join(__dirname,'public'),
    port: 3000,
    publicPath: "http://localhost:3000/dist"
  },
  /*
  use Hot Module Replacement so we don’t have to constantly refresh to see our changes.
   All we do for that is instantiate a new instance of the plugin in the plugins property.
  */
  plugins: [ new webpack.HotModuleReplacementPlugin() ]
};