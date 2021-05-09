export default async (app) => {
  app.message('Slackbot, I am sad', async ({message, say}) => {
    await say(`Hello, <@${message.user}>! Just be happy, it's easy.`)
  })
}