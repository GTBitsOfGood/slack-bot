export default async (app) => {
  app.message('help', async({message, say}) => {
    await say(`Hello, <@${message.user}>! here are a list of frequently asked questions:\n\n
    1: Who are the executive members for Bits of Good?\n
    Executive Director: Max Karpawich\n
    Proudct Executives: Chima and Raymond\n
    Engineering Executives: Daniel and Luke\n
    Design Executives: Chaeeun and Stephanie\n
    Operations Executives: Fernado, Eashan, Anisha, and Vince\n
    Marketing Executives: Sneha and Chaebin\n\n
    2: Where is the main repo?\n
    https://github.com/GTBitsOfGood \n\n
    3: Which position specific channels should I join?\n
    Everybody: gt-introductions, gt-announcements, gt-bits, gt-random\n
    PMs: gt-leadership, gt-product, your team's channel\n
    EMs: gt-leadership, gt-engineering, gt-dev-talk, your team's channel\n
    Designers: gt-leadership, gt-design, your team's channel\n
    Developers: gt-dev-talk, your team's channel\n
    Committee members (ops, marketing, etc.): your committee(s) channel(s)\n
    Engineering Bootcamp: gt-bootcamp-eng, gt-dev-talk\n
    Design Bootcamp: gt-bootcamp-design\n\n`)
  })
}