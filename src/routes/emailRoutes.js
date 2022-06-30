const router = require('express').Router();
const { body, validationResult } = require('express-validator');
const controller = require('../controllers/emailController');
const { HTTP_BAD_REQUEST } = require('../constants/httpStatusCode');

const validate = (validations) => async (req, res, next) => {
  for (const validation of validations) {
    const result = await validation.run(req);
    if (result.errors.length) break;
  }

  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  res.status(HTTP_BAD_REQUEST).json({
    Message: 'Hay algunos errores de validacion',
    Errors: errors.array(),
  });
};

router.post(
  '/sendForgotPasswordEmail',
  validate([
    body('email')
      .exists().withMessage('La request debe tener un email')
      .isEmail(),
    body('token')
      .exists().withMessage('La request debe tener un token'),
  ]),
  controller.forgotPassword,
);

router.post(
  '/sendWelcomeEmail',
  validate([
    body('email')
      .exists().withMessage('La request debe contener un email')
      .isEmail(),
    body('name')
      .exists().withMessage('La request debe contener el nombre'),
    body('surname')
      .exists().withMessage('La request debe contener el apellido'),
  ]),
  controller.welcome,
);

router.post(
  '/sendAccountDisableEmail',
  validate([
    body('email')
      .exists().withMessage('La request debe tener un email')
      .isEmail(),
    body('date_next_attempt')
      .exists().withMessage('La request debe tener una fecha'),
    body('time_next_attempt')
      .exists().withMessage('La request debe tener una hora'),
  ]),
  controller.disableAccount,
);

router.post(
  '/sendAccountLockedEmail',
  validate([
    body('email')
      .exists().withMessage('La request debe tener un email')
      .isEmail(),
  ]),
  controller.lockedAccount,
);

router.post(
  '/sendVerificationEmail',
  validate([
    body('email')
      .exists().withMessage('La request debe tener un email')
      .isEmail(),
    body('url').exists().withMessage('La request debe tener una url'),
  ]),
  controller.verificationEmail,
);

module.exports = router;
