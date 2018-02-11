const express = require('express');
const webpack = require('webpack');
const path = require('path');

const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const port = process.env.PORT || 3000;


/* Initialize Webpack */
let config;
(port === 3000)? config = require('../webpack.dev.js') : config = require('../webpack.prod.js');
const compiler = webpack(config);

const webpackDevMiddlewareInstance = webpackDevMiddleware( compiler, {
  publicPath: config.output.publicPath
});

app.use(webpackDevMiddlewareInstance);

if (process.env.HOT) {
  app.use(webpackHotMiddleware(compiler));
}

app.get('/', function(res,req){
	res.sendStatus(200)
})

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});


app.get('*', (req,res) =>{
  res.sendFile(path.resolve(__dirname, '../index.html'))
});


// Serve the files on port 3000.
const server = app.listen(port || 3000);
console.log('server is listening on port ' + port);

module.exports.server = server;
module.exports.app = app;
module.exports.webpackDevMiddlewareInstance = webpackDevMiddlewareInstance;