require('dotenv').config();
require('express-async-errors');
const stripe = require('stripe')(process.env.SECRET_KEY);
const stripeController = require('./controllers/stripeController');
const express = require('express');
const app = express();



// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json());
app.use(express.static('./public'));

// controller
app.post('/stripe',stripeController);

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
