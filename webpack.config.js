const path = require('path');

const paths = {
  DIST: path.resolve(__dirname, "lib"),
  SRC: path.resolve(__dirname, "docs"),
  REACT: path.resolve(__dirname,  "./node_modules/react"),
  REACTDOM: path.resolve(__dirname, "node_modules/react-dom")
};

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: paths.DIST,
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ],
  },
  resolve: {
    alias: {
      'react': paths.REACT,
      'react-dom': paths.REACTDOM,
    }
  },
  externals: {
    // Don't bundle react or react-dom      
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    }
  },

  /*server */
  devServer: {
    contentBase: paths.SRC,
    publicPath: "/",
    historyApiFallback: true
  }
};
