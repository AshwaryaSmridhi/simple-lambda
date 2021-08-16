const { IncomingWebhook } = require("@slack/webhook");
const config = require('../../config/config');

module.exports.handler = (snsEvent) => {
  // Initialize
  const webhook = new IncomingWebhook(config.slackWebhookUrl, {
    icon_emoji: ":bowtie:",
  });

  // Send the notification
  // Print out a link to the logs 
  (async () => {
    await webhook.send({
      text: 'Whoopsie!! Looks like your lambda had an error. Check out the log <a href="https://console.aws.amazon.com/cloudwatch/home?region=ap-southeast-2#logEventViewer:group=/aws/lambda/simple-project-dev-slack-notifications">here.</a>',
    });
  })();

  console.log(snsEvent);
  console.log(snsEvent.Records[0].Sns.Message);
  console.log("alarm!!!");
};
