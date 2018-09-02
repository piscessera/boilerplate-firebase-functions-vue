import * as functions from 'firebase-functions';
import * as _cors from 'cors';

import { greetingFunction } from './greeting.function';

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// CORS configuration.
const whitelist: string[] = [
    'http://localhost:4200',
    'http://localhost:5000'
];
const options: _cors.CorsOptions = {
    origin: whitelist
};
const cors = _cors;

/**
 * Greeting function
 */
export const greeting = functions.https.onRequest((request, response) => {
    cors(options)(request, response, () => greetingFunction(request, response));
});
