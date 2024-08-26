const grpc = require("@grpc/grpc-js");
const {GreetServiceClient} = require("../proto/greet_grpc_pb");
const {
  GreetRequest,
  SumRequest,
  PrimeRequest,
  AvgRequest,
  MaxRequest,
} = require("../proto/greet_pb");
const {SqrtRequest} = require("../proto/sqrt_pb");

function doGreet(client) {
  console.log("doGreet was invoked");

  const req = new GreetRequest().setFirstName("Cool Man");
  client.greet(req, (err, res) => {
    if (err) {
      return console.log(err);
    }

    console.log(`Greet: ${res.getResult()}`);
  });
}

function doSum(client) {
  console.log("Client doSum is called");
  const req = new SumRequest().setNum1(3).setNum2(10);
  client.sum(req, (err, res) => {
    if (err) {
      return console.log(err);
    }

    console.log(`Sum: ${res.getResult()}`);
  });
}

function doGreetManyTimes(client) {
  console.log("doGreetManyTimes was invoked");
  const req = new GreetRequest().setFirstName("Cool Man");
  const call = client.greetManyTimes(req);
  call.on("data", (res) => {
    console.log(`GreetManyTimes: ${res.getResult()}`);
  });
}

function doPrime(client) {
  console.log("Prime Number calucation as been invoked");
  const req = new PrimeRequest().setNum(120);
  const call = client.prime(req);
  call.on("data", (res) => {
    console.log(`Prime Number:  ${res.getResult()}`);
  });
}

function doLongGreet(client) {
  console.log("doLongGreet was invoked");

  const names = ["Cool", "Man", "Venom"];
  const call = client.longGreet((err, res) => {
    if (err) return console.log(err);

    console.log(`LongGreet: ${res.getResult()}`);
  });

  names
    .map((name) => {
      return new GreetRequest().setFirstName(name);
    })
    .forEach((req) => call.write(req));

  call.end();
}

function doAvg(client) {
  console.log("doAvg was invoked");
  const call = client.average((err, res) => {
    if (err) return console.log(err);

    console.log(`Avg:  ${res.getResult()}`);
  });

  for (let i = 1; i <= 4; i++) {
    const req = new AvgRequest().setNum(i);
    call.write(req);
  }
  call.end();
}

function doGreetEveryone(client) {
  console.log("doGreetEveryone was invoked");
  const names = ["Cool", "Man", "Venom"];
  const call = client.greetEveryone();

  call.on("data", (res) => {
    console.log(`GreetEveryone : ${res.getResult()}`);
  });

  for (let i = 0; i < names.length; i++) {
    const req = new GreetRequest().setFirstName(names[i]);
    call.write(req);
  }
  call.end();
}

function doMax(client) {
  console.log("doMax was invoked");
  const nums = [1, 5, 3, 6, 2, 20];
  const call = client.getMax();
  call.on("data", (res) => {
    console.log(`Max value : ${res.getResult()}`);
  });

  for (let i = 0; i < nums.length; i++) {
    const req = new MaxRequest().setNum(nums[i]);
    call.write(req);
  }

  call.end();
}

function doSqrt(client, n) {
  console.log("doSqrt was invoked");
  const req = new SqrtRequest().setNumber(n);

  client.sqrt(req, (err, res) => {
    if (err) {
      return console.log(err);
    }

    console.log(`Sqrt : ${res.getResult()}`);
  });
}

function doGreetWithDeadline(client, ms) {
  console.log("doGreetWithDeadline was invoked");
  const req = new GreetRequest().setFirstName("Cool");
  client.greetWithDeadline(
    req,
    {
      deadline: new Date(Date.now() + ms),
    },
    (err, res) => {
      if (err) {
        return console.log(err);
      }

      console.log(`GreetWithDeadline: ${res.getResult()}`);
    }
  );
}

function main() {
  const creds = grpc.ChannelCredentials.createInsecure();
  const client = new GreetServiceClient("localhost:50051", creds);
  // doGreet(client);
  // doSum(client);
  // doGreetManyTimes(client);
  // doPrime(client);
  // doLongGreet(client);
  // doAvg(client);
  // doGreetEveryone(client);
  // doMax(client);
  // doSqrt(client, 100);
  // doSqrt(client, -10); // this will return an error...

  doGreetWithDeadline(client, 5000);
  doGreetWithDeadline(client, 1000); // Deadline will hit here.

  //   client.close(); No need.
}

main();
