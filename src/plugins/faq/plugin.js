export default async (app) => {
  app.message('help', async({message, say}) => {
    await say(`Hello, <@${message.user}>! here are a list of frequently asked questions:`)
  })
}