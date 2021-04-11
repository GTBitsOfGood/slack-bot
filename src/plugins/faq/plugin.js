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
    Design Bootcamp: gt-bootcamp-design\n\n
    4: When are help desk hours?\n
    Help Desk hours are usually from 3-5pm on Fridays on Discord\n\n
    5: When are general meetings?\n
    General meetings are Tuesdays at 6:30pm.\n\n
    6: Any more questions?\n
    Almost anything you could want to know is on the Bits of Good Notion page!\n
    https://www.notion.so/gtbitsofgood/Home-Bits-of-Good-22f36a799dc149b3b19f222c7cf9c19f `)
  })
}