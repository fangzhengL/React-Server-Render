require('source-map-support').install()
require('babel-polyfill')
require("babel-register")({
    sourceMaps: true,
    extensions: ['.js', '.jsx'],
    presets: ['react', "es2015","stage-3"],
});

require("./App")

