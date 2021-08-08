const { IncomingWebhook } = require("@slack/webhook");
const config = require('../../config/config');

module.exports.handler = (snsEvent) => {
  // Initialize
  const webhook = new IncomingWebhook(config.slackWebhookUrl, {
    icon_emoji: ":bowtie:",
  });

  // Send the notification
  (async () => {
    await webhook.send({
      title: 'Error',
      text: 'Whoopsie!! Looks like your lambda had an error. Have a cookie!',
      icon_emoji: ':speak-no-evil:'
    });
  })();

  console.log(snsEvent);
  console.log(snsEvent.Records[0].Sns.Message);
  console.log("alarm!!!");
};
