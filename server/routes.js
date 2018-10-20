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
      return "Here are all your teams.";
    }
  },
  {
    method: "GET",
    path: `/api/v1/teams/{tname}`,
    handler: (req, h) => {
      return `Details of team ${encodeURIComponent(req.params.tname)}`;
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
