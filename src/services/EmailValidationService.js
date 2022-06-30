/* eslint-disable camelcase */
const Sentry = require('@sentry/node');
const { transporter } = require('../nodemailerSetup/setup');
const { emailTemplates } = require('../emailTemplates');

const sendEmail = (mailOptions) => {
  transporter.verify((error) => {
    if (error) {
      console.log(error);
      Sentry.captureException(error);
    } else {
      console.log('Server is ready to take our messages');
    }
  });

  return transporter.sendMail(mailOptions);
};

const commonOptions = (email) => ({
  from: process.env.SENDER,
  to: email,
});

const sendForgotPasswordEmail = async ({ email, token, url }) => {
  const mailOptions = {
    ...commonOptions(email),
    subject: 'Olvidaste tu contraseña',
    html: emailTemplates.forgotPasswordBuilder(token, url),
  };

  return sendEmail(mailOptions);
};

const sendAccountDisabledEmail = async ({
  email,
  date_next_attempt,
  time_next_attempt,
}) => {
  const mailOptions = {
    ...commonOptions(email),
    subject: 'Cuenta deshabilitada',
    html: emailTemplates.accoundDisabledBuilder(
      date_next_attempt,
      time_next_attempt,
    ),
  };

  return sendEmail(mailOptions);
};

const sendlockedAccountEmail = async ({ email }) => {
  const mailOptions = {
    ...commonOptions(email),
    subject: 'Cuenta bloqueada',
    html: emailTemplates.lockedAccountBuilder(),
  };

  return sendEmail(mailOptions);
};

const sendWelcomeEmail = async ({ email, name, surname }) => {
  const mailOptions = {
    ...commonOptions(email),
    subject: 'Bienvenido!',
    html: emailTemplates.welcomeBuilder(name, surname),
  };

  return sendEmail(mailOptions);
};

const sendVerificationEmail = async ({
  email, url, code, deleteUrl,
}) => {
  const mailOptions = {
    ...commonOptions(email),
    subject: 'Email de Verificacion',
    html: emailTemplates.verificationBuilder(url, code, deleteUrl),
  };

  return sendEmail(mailOptions);
};

const sendRegistrationSuccessEmail = async ({ url, email }) => {
  const mailOptions = {
    ...commonOptions(email),
    subject: 'Registro exitoso',
    html: emailTemplates.registrationSuccess(url),
  };
  return sendEmail(mailOptions);
};

const profileImageError = async ({
  name, surname, phone, email,
}) => {
  const mailOptions = {
    ...commonOptions(process.env.BACKOFFICE_EMAIL),
    subject: 'Error al subir la imagen de perfil',
    html: emailTemplates.profileImageErrorBuilder(name, surname, phone, email),
  };

  return sendEmail(mailOptions);
};

const sendUnlockedUserEmail = async ({ email, url }) => {
  const mailOptions = {
    ...commonOptions(email),
    subject: 'Desbloquear usuario',
    html: emailTemplates.unlockedUserBuilder(url),
  };

  return sendEmail(mailOptions);
};

module.exports = {
  sendForgotPasswordEmail,
  sendWelcomeEmail,
  sendAccountDisabledEmail,
  sendlockedAccountEmail,
  sendVerificationEmail,
  sendRegistrationSuccessEmail,
  profileImageError,
  sendUnlockedUserEmail,
};
