const routes = [
  {
    method: "GET",
    path: "/",
    handler: (req, h) => {
      return "Hello From Hapi !";
    }
  }
];

module.exports = routes;
