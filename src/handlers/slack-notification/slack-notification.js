const { IncomingWebhook } = require("@slack/webhook");
const config = require('../../config/config');

module.exports.handler = (snsEvent) => {
  // Initialize
  const webhook = new IncomingWebhook(config.slackWebhookUrl, {
    icon_emoji: ":bowtie:",
  });

  // Send the notification
  // Print out a link to the logs 
  // https://console.aws.amazon.com/cloudwatch/home?region=ap-southeast-2#logEventViewer:group=/aws/lambda/simple-project-dev-slack-notifications
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
