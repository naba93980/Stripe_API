require('dotenv').config();
const stripe = require('stripe')(process.env.SECRET_KEY);

async function cancelIntent() {
    try {
        const paymentIntent = await stripe.paymentIntents.cancel(
            'pi_3M18S0SBPxz6nNvI00bkyPbi'
        );
        console.log(paymentIntent);
    } catch (error) {
        console.log("error haire  "+error);
    }
}
cancelIntent();