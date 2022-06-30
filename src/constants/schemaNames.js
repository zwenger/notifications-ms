const RECHARGE_OK = process.env.RECHARGE_OK || 'operation.updated:transfer.recharge.finished.ok';
const RECHARGE_FAILED = process.env.RECHARGE_FAILED || 'operation.updated:transfer.recharge.finished.error';
const RECHARGE_REFUND = process.env.RECHARGE_REFUND || 'operation.updated:transfer.recharge.refunded';

module.exports = {
  RECHARGE_OK,
  RECHARGE_FAILED,
  RECHARGE_REFUND,
};
