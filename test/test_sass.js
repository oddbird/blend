var path = require('path');
var sassTrue = require('sass-true');

var sassFile = path.join(__dirname, '.', 'index.scss');
sassTrue.runSass({ describe, it }, sassFile);
