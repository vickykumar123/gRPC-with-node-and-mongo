const grpc = require("@grpc/grpc-js");
const pb = require("../proto/greet_pb");
const {SqrtResponse} = require("../proto/sqrt_pb");

// Unary..
exports.greet = (call, callback) => {
  console.log("Greet was invoked");
  const res = new pb.GreetResponse().setResult(
    `Hello ${call.request.getFirstName()}`
  );

  callback(null, res);
};

exports.sum = (call, callback) => {
  console.log("Server sum invoked");

  // Ensure the result is an integer
  const sum = call.request.getNum1() + call.request.getNum2();
  const res = new pb.SumResponse().setResult(sum);

  callback(null, res);
};

// Server Streaming....
exports.greetManyTimes = (call, _) => {
  console.log("GreetManyTimes was invoked");
  const res = new pb.GreetResponse();
  for (let i = 0; i < 10; ++i) {
    res.setResult(`Hello ${call.request.getFirstName()} - number ${i}`);
    call.write(res);
    console.log(`Sent: Hello ${call.request.getFirstName()} - number ${i}`);
  }
  call.end();
  console.log("Stream ended.");
};

// Server Streaming Prime...
exports.prime = (call, _) => {
  console.log("Calculate Prime number");
  const res = new pb.PrimeResponse();

  let k = 2;
  let n = call.request.getNum();
  console.log(`Received number: ${n}`);
  while (n > 1) {
    if (n % k == 0) {
      res.setResult(k);
      call.write(res);
      console.log(`Sent prime factor: ${k}`);
      n = n / k;
    } else {
      k = k + 1;
    }
  }

  call.end();
  console.log("Prime calculation stream ended.");
};

// Client Streaming...
exports.longGreet = (call, callback) => {
  console.log("LongGreet was invoked");
  let greet = "";
  call.on("data", (req) => {
    greet += `Hello ${req.getFirstName()}\n`;
  });
  call.on("end", () => {
    const res = new pb.GreetResponse().setResult(greet);
    callback(null, res);
  });
};

exports.average = (call, callback) => {
  console.log("Average invoked");
  let number = 0;
  let count = 0;
  call.on("data", (req) => {
    number += req.getNum();
    count++;
  });
  call.on("end", () => {
    let result = number / count;
    const res = new pb.AvgResponse().setResult(result);
    callback(null, res);
  });
};

// Bi-directional streaming...
exports.greetEveryone = (call, _) => {
  console.log("GreetEveryone was invoked");

  call.on("data", (req) => {
    console.log(`Received request ${req}`);
    const res = new pb.GreetResponse().setResult(`Hello ${req.getFirstName()}`);

    console.log(`Sending response ${res}`);
    call.write(res);
  });

  call.on("end", () => call.end());
};

// Bi-directional streaming...
exports.getMax = (call, _) => {
  console.log("GetMax was invoked");
  let currMax = 0;
  call.on("data", (req) => {
    console.log(`Received request ${req}`);
    currMax = Math.max(currMax, req.getNum());
    const res = new pb.MaxResponse().setResult(currMax);

    console.log(`Sending response ${res}`);
    call.write(res);
  });
  call.on("end", () => call.end());
};

// Error handling...
exports.sqrt = (call, callback) => {
  console.log("Sqrt was invoked");
  const number = call.request.getNumber();

  if (number < 0) {
    callback({
      code: grpc.status.INVALID_ARGUMENT,
      message: `Number cannot be negative, recevied ${number}`,
    });
  }

  const response = new SqrtResponse().setResult(Math.sqrt(number));
  callback(null, response);
};

// Using Deadlines
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
exports.greetWithDeadline = async (call, callback) => {
  console.log("GreetWithDeadline was invoked");
  for (let i = 0; i < 3; i++) {
    if (call.cancelled) {
      return console.log("The client cancelled the request");
    }
    await sleep(1000);
  }
  const res = new pb.GreetResponse().setResult(
    `Hello ${call.request.getFirstName()}`
  );

  callback(null, res);
};
