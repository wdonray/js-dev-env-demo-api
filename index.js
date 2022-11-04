var express = require('express');
var cors = require('cors');

const app = express();
app.use(cors());

app.set('port', (process.env.PORT || 5000));

app.get('/', function (request, response) {
  response.send('Hello World!')
});

app.get('/users', function (req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    { 'id': 1, 'name': 'Don' },
    { 'id': 2, 'name': 'Chay' },
    { 'id': 3, 'name': 'Dev' }
  ]);
});

app.listen(app.get('port'), function () {
  console.log("Node app is running at localhost:" + app.get('port'));
});