# NOTIFICATIONS Microservice

## Description

Microservice responsible for sending email notifications.

## Diagram

![Diagram](./.assets/notifications.drawio.png)

## Initialization

- Copy the `example.env` file and rename it to `.env`
- Fill in its contents with all the environment variables.
- Whether initializing the service locally or with Docker, the Redis service for messaging must be up.

Run the command:
> `docker-compose -f docker-compose.data.yml up -d`

### Docker
To start the service with Docker, run the command:
> `docker-compose up --build`

### Local
1. Have Node installed (> 14) along with its corresponding version of npm.
2. Install dependencies:
   - > `npm install`
3. To start the service, run the command:
   - > `npm start`

## Environment Variables

### REDIS QUEUE

The service is a consumer that is constantly listening to a Redis queue defined through environment variables.

- REDIS_IP: IP of the Redis instance to use.
   - Example: `127.0.0.1`
- REDIS_PORT: Port where Redis is running.
   - Example: `63795`
- EMAIL_QUEUE: Name of the queue defined to contain email job tasks.
   - Example: `notification-email-develop`

### S3 Images

Currently, the service uses images stored in an S3 bucket to correctly send emails. Therefore, a bucket must be created for this purpose, and the images must adhere to the names they are given in the development environment.

The variable `IMAGES_BUCKET` contains the base address to the folder where these images are located.

## Service Dependencies

| Name               | Version   |
| ------------------ | --------- |
| @sentry/node       | ^6.13.2   |
| @sentry/tracing    | ^6.13.2   |
| console-stamp      | ^3.0.3    |
| cors               | "^2.8.5   |
| dotenv             | ^8.2.0    |
| express            | ^4.17.1   |
| express-validator  | ^6.12.1   |
| nodemailer         | ^6.6.1    |
| nodemon            | ^2.0.7    |

## Available Methods for Email Sending

| Method                         | Required Parameters               | Description                              |
| ------------------------------ | --------------------------------- | ---------------------------------------- |
| sendForgotPasswordEmail        | email, token, url                 | Sends a password recovery email          |
| sendAccountDisabledEmail       | email, date_next_attempt, time_next_attempt | Sends an account disabled email  |
| sendLockedAccountEmail         | email                             | Sends a locked account email             |
| sendWelcomeEmail               | email, name, surname               | Sends a welcome email upon completing onboarding |
| sendVerificationEmail          | email, url, code, deleteUrl        | Sends an email to verify the user's email |
| sendRegistrationSuccessEmail   | url, email                         | Sends a successful registration email    |
| profileImageError              | name, surname, phone, email        | Sends an email to the back office for errors uploading images to S3 |
| sendUnlockedUserEmail          | email, url                         | Sends an account unlock email            |

## Tests

To run tests, make sure to configure the `RECIPIENT_FOR_TESTING` environment variable because emails will be sent to that address.

If you need to run all tests in the local environment, use the command:
> `docker exec wallet_notification npm run test`

If you need to run a specific test, use:
> `docker exec wallet_notification npm test -- -t "<testName>"`

For example:
> `docker exec ms_notifications npm test -- -t "will send unlock user email"`

## Logic and Approach
>TODO

## Troubleshooting
>TODO
