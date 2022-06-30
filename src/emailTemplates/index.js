const { forgotPassword } = require('./ForgotPassword');
const { accoundDisabled } = require('./AccountDisabled');
const { lockedAccount } = require('./LockedAccount');
const { welcome } = require('./Welcome');
const { verification } = require('./Verification');
const { registrationSuccess } = require('./RegistrationSuccess');
const { profileImageError } = require('./ProfileImageError');
const { unlockedUser } = require('./UnlockUser');

module.exports = {
  emailTemplates: {
    forgotPassword,
    accoundDisabled,
    lockedAccount,
    welcome,
    verification,
    registrationSuccess,
    profileImageError,
    unlockedUser,
  },
};
