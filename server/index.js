const Hapi = require("hapi");

const server = Hapi.server({
  port: 3000,
  host: `localhost`
});

server.route({
  method: "GET",
  path: "/",
  handler: (req, h) => {
    return `Hello World !`;
  }
});

const init = async () => {
  await server.start();
  console.log(`server running at : ${server.info.uri}`);
};

init();
