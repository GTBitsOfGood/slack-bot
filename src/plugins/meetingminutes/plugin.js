const fetch = require("node-fetch");
export default async (app) => {
  app.message(((`Update me`), async ({message, say}) => {
    await say(msg_opener);
    await say(msg_tlder);
    await say(msg_events);
  }));
}
var msg_opener = `Extra extra! Read all about it! Here are the most recent notes from the ` + date + ` ` + title + ` :rolled_up_newspaper:`;
var msg_tldr = `TLDR: ` + tldr;
var msg_events = `Events: ` + events;
var title, date, tldr, events;

//TODO fix fetch pathing - see bug.txt
var path = require("src/plugins/meetingminutes/meeting.json");
var absolute_path = path.resolve("src/plugins/meetingminutes/meeting.json");
fetch(absolute_path)
  .then(function(resp) {
    return resp.json();
  })
  .then(function(data) {
    console.log(data);
    title = data.title;
    date = data.date;
    tldr = data.tldr;
    events = data.events;
  });
