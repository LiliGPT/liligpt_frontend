const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = (_, argv) => ({
  output: {
    // publicPath: "http://localhost:28090/",
    filename: 'mf2.js',
    publicPath: "http://localhost:28090/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 28090,
    historyApiFallback: true,
    allowedHosts: ["localhost", "myserver.com", "127.0.0.1"],
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "mf2",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        './App': './src/App',
      },
      shared: {
        // recently installed: react-router-dom localforage match-sorter sort-by
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
        // share material ui
        "@mui/material": {
          singleton: true,
          requiredVersion: deps["@mui/material"],
        },
        "@mui/icons-material": {
          singleton: true,
          requiredVersion: deps["@mui/icons-material"],
        },
        "@emotion/react": {
          singleton: true,
          requiredVersion: deps["@emotion/react"],
        },
        "@emotion/styled": {
          singleton: true,
          requiredVersion: deps["@emotion/styled"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
});
