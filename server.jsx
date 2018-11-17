var express = require('express');

var app = express();

app.use(express.static(__dirname));
app.set('port', process.env.PORT || 8080);

var server = app.listen(app.get('port'), () => {
  console.log('Listening on port ', server.address().port);
});
