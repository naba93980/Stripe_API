require('dotenv').config();
const stripe = require('stripe')(process.env.SECRET_KEY);

async function cancelIntent() {
    try {
        const paymentIntent = await stripe.paymentIntents.cancel(
            'pi_3M0X4SSBPxz6nNvI1f1ZWvmK'
        );
        console.log(paymentIntent);
    } catch (error) {
        console.log("error haire  "+error);
    }
}
cancelIntent();