const stripe = require('stripe')(process.env.SECRET_KEY);

const stripeController = async (req, res) => {
    const { purchase, total_amount, shipping_fee } = req.body;
    res.send('stripe route');
}

module.exports = stripeController;