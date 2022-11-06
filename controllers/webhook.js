const express = require('express');
const stripe = require('stripe')(process.env.SECRET_KEY);

const webhook = async (req, res) => {
    // with signature verification
    const payload = req.body;
    console.log(payload);
    const sig = req.headers['stripe-signature'];
    const endpointSecret = 'whsec_9014c1741abf07e3dd6ab6bdda09d63f19591e4240f6890c57cabce65ba5740f';
    let eventReceived;
    try {
        eventReceived = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false });
        return;
    }
    console.log(eventReceived);
    res.json({ success: true });
}

module.exports = webhook;


// .\stripe.exe listen --forward-to localhost:5000/webhook  -- command to receive webhook events from stripe and forward to localhost server for testing purpose