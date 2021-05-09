export default async (app) => {
  app.message(':wave:', async ({ message, say }) => {
    await say(`Greetings, <@${message.user}>, how was your day?`);
  });
  app.message('hello', async ({ message, say }) => {
    await say(`Greetings, <@${message.user}>, how was your day?`);
  });
  app.message('bot', async ({ message, say }) => {
    await say(`Hi, <@${message.user}>, what do you need today`);
  });
};
