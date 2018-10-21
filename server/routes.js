const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: String,
  players: [{ name: String }],
  points: Number
});

const Team = mongoose.model("Team", teamSchema);

const routes = [
  {
    method: "GET",
    path: "/",
    handler: (req, h) => {
      return "Hello From Hapi !";
    }
  },
  {
    method: "GET",
    path: "/api/v1/teams",
    handler: (req, h) => {
      Team.find({}, (err, teams) => {
        if (err) return h.send({});
        return h.send(teams);
      });
    }
  },
  {
    method: "GET",
    path: `/api/v1/teams/{tname}`,
    handler: (req, h) => {
      return Team.findOne({ name: req.params.tname });
    }
  },
  {
    method: "POST",
    path: `/api/v1/teams/`,
    handler: (req, h) => {
      return `Cerating a new team.`;
    }
  },
  {
    method: "PATCH",
    path: `/api/v1/teams/{tname}`,
    handler: (req, h) => {
      return `Update Details of team ${encodeURIComponent(req.params.tname)}`;
    }
  },
  {
    method: "DELETE",
    path: `/api/v1/teams/{tname}`,
    handler: (req, h) => {
      return `Delete Details of team ${encodeURIComponent(req.params.tname)}`;
    }
  }
];

module.exports = routes;
