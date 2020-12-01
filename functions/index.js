const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HekvZCHz8e2q06nHWQvbwj0M1hAJVN6N8xeuAPidamjbwEycFKBs9WM6NzJWpAKBVXat5vFtuuJpGzBArIXpv8J00Oi6J8mMm')

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes

app.get('/', (request, response) => response.status(200).send('Hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recieved BOOM!! for this ammount =', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // Subunits of the currency
        currency: "usd"
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})


// Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://localhost:5001/clone-9ce03/us-central1/api

