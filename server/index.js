const Hapi = require("hapi");
const mongoose = require("mongoose");
const routes = require("./routes");

const server = Hapi.server({
  port: 3000,
  host: `localhost`
});

mongoose.connect("mongodb://localhost/test");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("we're connected!");
});

const teamSchema = new mongoose.Schema({
  name: String,
  players: [{ name: String }],
  points: Number
});

const Team = mongoose.model("Team", teamSchema);
const team = new Team({
  name: "Ninja Warriors",
  players: [{ name: "Ashish" }, { name: "Tarun" }],
  points: 989
});
team.save((err, t) => {
  if (err) console.log(err);
  else console.log("saved");
});
server.route(routes);

const init = async () => {
  await server.start();
  console.log(`server running at : ${server.info.uri}`);
};

init();
