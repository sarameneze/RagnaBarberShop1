const path = require('path');

module.exports = {
    entry: './js/modules/main.js',
    output: {
        filename: "script.js",
        path: path.resolve(__dirname, './js/'),
    },
}