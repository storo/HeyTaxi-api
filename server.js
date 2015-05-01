var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/ping', function(req, res) {
  res.status(200).send('pong');
});

app.use('/', router);

app.listen(port);
console.log('Magic happens on port ' + port);
