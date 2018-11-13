var history = require('connect-history-api-fallback');
var express = require('express');

var staticFileMiddleware = express.static('dist');

app = express();

app.use(staticFileMiddleware);

app.use(history({
  disableDotRule: true,
  verbose: true
}));

app.use(staticFileMiddleware);

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
    next();
});

app.set('port', process.env.PORT || 8080);

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
