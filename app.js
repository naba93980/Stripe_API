require('dotenv').config();
require('express-async-errors');
const stripeController = require('./controllers/stripeController');
const webhook = require('./controllers/webhook');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.static('./public'));

// controller
app.post('/stripe', express.json() ,stripeController);
app.post('/webhook', bodyParser.raw({ type: 'application/json' }), webhook);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
