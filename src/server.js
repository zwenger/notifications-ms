require('dotenv').config();
require('console-stamp')(console);
const express = require('express');
const Queue = require('bull');
const cors = require('cors');
const Sentry = require('@sentry/node');
const emailValidationService = require('./services/EmailValidationService');

const port = process.env.PORT || 4000;
const app = express();

const emailQueue = new Queue(process.env.EMAIL_QUEUE, process.env.REDIS_URL);

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
});

// // TODO: remove main method and use the queue directly
// const main = async () => {
//   await emailQueue.add({
//     data: { url: 'https://www.google.com', email: 'ritortoalvaro93@gmail.com' },
//     method: 'sendRegistrationSuccessEmail',
//   });
// };
// main();

// -----MIDDLEWARES-----
app.use(express.json());
app.use(cors());

// -----ROUTES-----
// Email MS Route
app.use('/api/v1', require('./routes/emailRoutes'));

// Ping
app.get('/api/v1', (req, res) => {
  res.json(
    {
      message: 'notifications',
    },
    200,
  );
});

// -----APP LISTEN-----
app.listen(port, () => {
  console.log(`Server up at http://localhost:${port}`);
});

// -----EMAIL REDIS CONSUMER-----
emailQueue.process(async (job, done) => {
  const { data, method } = job.data;
  console.log('Email', method, 'Data', data);
  await emailValidationService[method](data);
  done();
});

emailQueue.on('error', (err) => {
  console.error(err.message);
});

console.log('Email service is running');
