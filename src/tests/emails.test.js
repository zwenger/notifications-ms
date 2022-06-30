/* eslint-disable no-undef */
const emailValidationService = require('../services/EmailValidationService');

describe('Email Tests', () => {
  test('will send forgot password email', async () => {
    await emailValidationService.sendForgotPasswordEmail({
      email: process.env.RECIPIENT,
      token: '123456',
      url: 'http://www.google.com',
    });
  });

  test('will send account disable email', async () => {
    await emailValidationService.sendAccountDisabledEmail({
      email: process.env.RECIPIENT,
      date_next_attempt: '20/10/2021',
      time_next_attempt: '20',
    });
  });

  test('will send locked account email', async () => {
    await emailValidationService.sendlockedAccountEmail({
      email: process.env.RECIPIENT,
    });
  });

  test('will send welcome email', async () => {
    await emailValidationService.sendWelcomeEmail({
      email: process.env.RECIPIENT,
      name: 'Ricardo',
      surname: 'Gonzalez',
    });
  });

  test('will send verification email', async () => {
    await emailValidationService.sendVerificationEmail({
      email: process.env.RECIPIENT,
      url: 'http://www.google.com',
      code: '12345',
      deleteUrl: 'https://www.youtube.com/',
    });
  });

  test('will send registration success email', async () => {
    await emailValidationService.sendRegistrationSuccessEmail({
      email: process.env.RECIPIENT,
      url: 'http://www.google.com',
    });
  });

  test('will send profile image error email', async () => {
    await emailValidationService.profileImageError({
      email: process.env.RECIPIENT,
      name: 'Ricardo',
      surname: 'Gonzalez',
      phone: '+54 9 381 3876543',
    });
  });

  test('will send unlock user email', async () => {
    await emailValidationService.sendUnlockedUserEmail({
      email: process.env.RECIPIENT,
      url: 'http://www.google.com',
    });
  });
});
