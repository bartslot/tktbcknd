function getStyleUse(bundleFilename) {
  return [
    {
      loader: 'file-loader',
      options: {
        name: bundleFilename,
      },
    },
    { loader: 'extract-loader' },
    { loader: 'css-loader' },
    {
      loader: 'sass-loader',
      options: {
        includePaths: ['./node_modules'],
        implementation: require('dart-sass'),
        fiber: require('fibers'),
      }
    },
  ];
}

module.exports = [
  {
    entry: './login.scss',
    output: {
      // This is necessary for webpack to compile, but we never reference this js file.
      filename: 'style-bundle-login.js',
    },
    module: {
      rules: [{
        test: /login.scss$/,
        use: getStyleUse('bundle-login.css')
      }]
    },
  },
  {
    entry: './progreso.scss',
    output: {
      // This is necessary for webpack to compile, but we never reference this js file.
      filename: 'style-bundle-progreso.js',
    },
    module: {
      rules: [{
        test: /progreso.scss$/,
        use: getStyleUse('bundle-progreso.css')
      }]
    },
  },
  {
    entry: "./login.js",
    output: {
      filename: "bundle-login.js"
    },
    module: {
      loaders: [{
        test: /login.js$/,
        loader: 'babel-loader',
        query: {presets: ['env']}
      }]
    },
  },
  {
    entry: "./progreso.js",
    output: {
      filename: "bundle-progreso.js"
    },
    module: {
      loaders: [{
        test: /progreso.js$/,
        loader: 'babel-loader',
        query: {presets: ['env']}
      }]
    },
  }
];
