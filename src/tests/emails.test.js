/* eslint-disable no-undef */
const emailValidationService = require('../services/EmailValidationService');

describe('Email Tests', () => {
  test('will send forgot password email', async () => {
    await emailValidationService.sendForgotPasswordEmail({
      email: process.env.RECIPIENT,
      token: 'token',
    });
  });

  test('will send verification email', async () => {
    await emailValidationService.sendVerificationEmail({
      email: process.env.RECIPIENT,
      token: '12345',
    });
  });
});
