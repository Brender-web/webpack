const path = require("path");//path check

module.exports = {           //module refer to the whole file
    entry: './src/app.js',   //accessing the file you want
    output: {
        path: path.join(__dirname, 'public'),  //using the patt to check where the public folder is
        filename: 'bundle.js'  //creates this file
    }
}