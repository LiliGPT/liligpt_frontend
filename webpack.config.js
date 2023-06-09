const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const DefinePlugin = require("webpack/lib/DefinePlugin");
const dotenv = require("dotenv");
dotenv.config();

const publicPath = `${process.env.REACT_APP_PUBLIC_URL || "http://localhost:28090"}/`;
console.log(`webpack publicPath: ${publicPath}`);

const deps = require("./package.json").dependencies;
module.exports = (_, argv) => ({
  output: {
    // publicPath: "http://localhost:28090/",
    publicPath,
    filename: 'mf2.js',
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
    new DefinePlugin({
      'process.env': JSON.stringify(getReactAppEnv()),
    }),
    new ModuleFederationPlugin({
      name: "mf2",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        './App': './src/app/App',
      },
      shared: {
        // recently installed: react-router-dom localforage match-sorter sort-by
        // ...deps,
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
        // "oidc-client-ts": {
        //   singleton: true,
        //   requiredVersion: "2.2.2",
        // },
        // "react-oidc-context": {
        //   singleton: true,
        //   requiredVersion: "2.2.2",
        // },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
});


// Returns only the process.env environment variables that starts with "REACT_APP_"
function getReactAppEnv() {
  // Create an empty object to store the results
  let result = {};
  // Loop through the keys of process.env
  for (let key in process.env) {
    // Check if the key starts with "REACT_APP_"
    if (key.startsWith("REACT_APP_")) {
      // Add the key and value to the result object
      result[key] = process.env[key];
    }
  }
  // Return the result object
  return result;
}