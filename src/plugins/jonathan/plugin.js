export default async (app) => {
  app.message(/^(hi|hola|hey|bot).*/, async ({ context, say }) => {
    const greeting = context.matches[0];
    if (greeting === 'bot') {
      await say(`hi <@${message.user}>, how are you?`);
    } else {
      await say(`${greeting} <@${message.user}>, how are you?`);
    }
  });
};
