const grpc = require("@grpc/grpc-js");
const serviceImpl = require("./service_impl");
const {GreetServiceService} = require("../proto/greet_grpc_pb");

const addr = "localhost:50051";

function cleanup(server) {
  console.log("Cleanup");
  if (server) {
    server.forceShutdown();
  }
}

function main() {
  const server = new grpc.Server();
  const creds = grpc.ServerCredentials.createInsecure();

  process.on("SIGINT", () => {
    console.log("Caught interrupt signal");
    cleanup(server);
  });

  server.addService(GreetServiceService, serviceImpl);

  // To Start the server.
  server.bindAsync(addr, creds, (error, _) => {
    if (error) {
      return cleanup(server);
    }
  });

  console.log(`Listening on ${addr}`);
}

main();
