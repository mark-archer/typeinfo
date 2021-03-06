const path = require('path');

module.exports = {
  watch: true,
  //entry: './build/public/index.js',
  entry: './public/index.tsx',
  mode: 'development',
  //mode: 'production',
  output: {
    filename: 'index.bundle.js',
    path: __dirname + '/build/public'
    //,path: path.resolve(__dirname, './build/public')
  },
  devtool: 'source-map',
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

      // svg loader
      { test: /\.svg$/, loader: 'svg-inline-loader' },

      // css loader
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }
    ]
  },

  // node: {
  //   console: 'empty',
  //   fs: 'empty',
  //   net: 'empty',
  //   tls: 'empty'
  // },
  
  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
    "lodash": "_"
  }
};