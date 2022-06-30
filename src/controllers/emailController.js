const emailValidationService = require('../services/EmailValidationService');
const { HTTP_SUCCESS, HTTP_SERVER_ERROR } = require('../constants/httpStatusCode');

const forgotPassword = async (req, res) => {
  await emailValidationService.sendForgotPasswordEmail(req.body).then(() => {
    res.status(HTTP_SUCCESS).json({
      message: 'Email enviado',
    });
  }).catch((err) => {
    console.error(err);
    res.status(HTTP_SERVER_ERROR).json({
      message: 'El servidor no pudo enviar el email',
    });
  });
};

const disableAccount = async (req, res) => {
  await emailValidationService.sendAccountDisabledEmail(req.body).then(() => {
    res.status(HTTP_SUCCESS).json({
      message: 'Email enviado',
    });
  }).catch((err) => {
    console.log(err);
    res.status(HTTP_SERVER_ERROR).json({
      message: 'El servidor no pudo enviar el email',
    });
  });
};

const lockedAccount = async (req, res) => {
  await emailValidationService.sendlockedAccountEmail(req.body).then(() => {
    res.status(HTTP_SUCCESS).json({
      message: 'Email enviado',
    });
  }).catch((err) => {
    console.error(err);
    res.status(HTTP_SERVER_ERROR).json({
      message: 'El servidor no pudo enviar el email',
    });
  });
};

const welcome = async (req, res) => {
  await emailValidationService.sendWelcomeEmail(req.body).then(() => {
    res.status(HTTP_SUCCESS).json({
      Message: 'Email enviado',
    });
  }).catch((err) => {
    console.error(err);
    res.status(HTTP_SERVER_ERROR).json({
      Message: 'El servidor no pudo enviar el email',
    });
  });
};

const verificationEmail = async (req, res) => {
  await emailValidationService.sendVerificationEmail(req.body).then(() => {
    res.status(HTTP_SUCCESS).json({
      Message: 'Email enviado',
    });
  }).catch((err) => {
    console.log(err);
    res.status(HTTP_SERVER_ERROR).json({
      Message: 'El servidor no pudo enviar el email',
    });
  });
};

module.exports = {
  forgotPassword,
  disableAccount,
  lockedAccount,
  welcome,
  verificationEmail,
};
