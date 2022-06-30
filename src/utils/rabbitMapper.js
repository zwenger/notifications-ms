const {RECHARGE_OK, RECHARGE_FAILED, RECHARGE_REFUND} = require("../constants/schemaNames");

const rabbitToNotificationsMethod = new Map([
    [RECHARGE_OK, 'rolcatRechargeNotification'],
    [RECHARGE_FAILED, 'PLACEHOLDER'],
    [RECHARGE_REFUND, 'PLACEHOLDER']
])

const rabbitToNotificationsParams = {
  [RECHARGE_OK]: (rabbitMessage) => rabbitMessage.stages.filter(stage => stage.type === 'RECHARGE.FINISHED')[0].transfer.specifics,
  [RECHARGE_FAILED]: (rabbitMessage) => console.log('FAILED'),
  [RECHARGE_REFUND]: (rabbitMessage) => console.log('REFUND')
}

 module.exports = {
   rabbitToNotificationsMethod,
   rabbitToNotificationsParams,
 }