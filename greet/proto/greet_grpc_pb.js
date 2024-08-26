// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var greet_pb = require('./greet_pb.js');
var sqrt_pb = require('./sqrt_pb.js');

function serialize_greet_AvgRequest(arg) {
  if (!(arg instanceof greet_pb.AvgRequest)) {
    throw new Error('Expected argument of type greet.AvgRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greet_AvgRequest(buffer_arg) {
  return greet_pb.AvgRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greet_AvgResponse(arg) {
  if (!(arg instanceof greet_pb.AvgResponse)) {
    throw new Error('Expected argument of type greet.AvgResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greet_AvgResponse(buffer_arg) {
  return greet_pb.AvgResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greet_GreetRequest(arg) {
  if (!(arg instanceof greet_pb.GreetRequest)) {
    throw new Error('Expected argument of type greet.GreetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greet_GreetRequest(buffer_arg) {
  return greet_pb.GreetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greet_GreetResponse(arg) {
  if (!(arg instanceof greet_pb.GreetResponse)) {
    throw new Error('Expected argument of type greet.GreetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greet_GreetResponse(buffer_arg) {
  return greet_pb.GreetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greet_MaxRequest(arg) {
  if (!(arg instanceof greet_pb.MaxRequest)) {
    throw new Error('Expected argument of type greet.MaxRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greet_MaxRequest(buffer_arg) {
  return greet_pb.MaxRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greet_MaxResponse(arg) {
  if (!(arg instanceof greet_pb.MaxResponse)) {
    throw new Error('Expected argument of type greet.MaxResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greet_MaxResponse(buffer_arg) {
  return greet_pb.MaxResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greet_PrimeRequest(arg) {
  if (!(arg instanceof greet_pb.PrimeRequest)) {
    throw new Error('Expected argument of type greet.PrimeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greet_PrimeRequest(buffer_arg) {
  return greet_pb.PrimeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greet_PrimeResponse(arg) {
  if (!(arg instanceof greet_pb.PrimeResponse)) {
    throw new Error('Expected argument of type greet.PrimeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greet_PrimeResponse(buffer_arg) {
  return greet_pb.PrimeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greet_SqrtRequest(arg) {
  if (!(arg instanceof sqrt_pb.SqrtRequest)) {
    throw new Error('Expected argument of type greet.SqrtRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greet_SqrtRequest(buffer_arg) {
  return sqrt_pb.SqrtRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greet_SqrtResponse(arg) {
  if (!(arg instanceof sqrt_pb.SqrtResponse)) {
    throw new Error('Expected argument of type greet.SqrtResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greet_SqrtResponse(buffer_arg) {
  return sqrt_pb.SqrtResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greet_SumRequest(arg) {
  if (!(arg instanceof greet_pb.SumRequest)) {
    throw new Error('Expected argument of type greet.SumRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greet_SumRequest(buffer_arg) {
  return greet_pb.SumRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greet_SumResponse(arg) {
  if (!(arg instanceof greet_pb.SumResponse)) {
    throw new Error('Expected argument of type greet.SumResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greet_SumResponse(buffer_arg) {
  return greet_pb.SumResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var GreetServiceService = exports.GreetServiceService = {
  greet: {
    path: '/greet.GreetService/Greet',
    requestStream: false,
    responseStream: false,
    requestType: greet_pb.GreetRequest,
    responseType: greet_pb.GreetResponse,
    requestSerialize: serialize_greet_GreetRequest,
    requestDeserialize: deserialize_greet_GreetRequest,
    responseSerialize: serialize_greet_GreetResponse,
    responseDeserialize: deserialize_greet_GreetResponse,
  },
  greetManyTimes: {
    path: '/greet.GreetService/GreetManyTimes',
    requestStream: false,
    responseStream: true,
    requestType: greet_pb.GreetRequest,
    responseType: greet_pb.GreetResponse,
    requestSerialize: serialize_greet_GreetRequest,
    requestDeserialize: deserialize_greet_GreetRequest,
    responseSerialize: serialize_greet_GreetResponse,
    responseDeserialize: deserialize_greet_GreetResponse,
  },
  // Server streaming
longGreet: {
    path: '/greet.GreetService/LongGreet',
    requestStream: true,
    responseStream: false,
    requestType: greet_pb.GreetRequest,
    responseType: greet_pb.GreetResponse,
    requestSerialize: serialize_greet_GreetRequest,
    requestDeserialize: deserialize_greet_GreetRequest,
    responseSerialize: serialize_greet_GreetResponse,
    responseDeserialize: deserialize_greet_GreetResponse,
  },
  // client streaming
greetEveryone: {
    path: '/greet.GreetService/GreetEveryone',
    requestStream: true,
    responseStream: true,
    requestType: greet_pb.GreetRequest,
    responseType: greet_pb.GreetResponse,
    requestSerialize: serialize_greet_GreetRequest,
    requestDeserialize: deserialize_greet_GreetRequest,
    responseSerialize: serialize_greet_GreetResponse,
    responseDeserialize: deserialize_greet_GreetResponse,
  },
  // Bi-directional streaming...
greetWithDeadline: {
    path: '/greet.GreetService/GreetWithDeadline',
    requestStream: false,
    responseStream: false,
    requestType: greet_pb.GreetRequest,
    responseType: greet_pb.GreetResponse,
    requestSerialize: serialize_greet_GreetRequest,
    requestDeserialize: deserialize_greet_GreetRequest,
    responseSerialize: serialize_greet_GreetResponse,
    responseDeserialize: deserialize_greet_GreetResponse,
  },
  // Examples with calculation 
sum: {
    path: '/greet.GreetService/Sum',
    requestStream: false,
    responseStream: false,
    requestType: greet_pb.SumRequest,
    responseType: greet_pb.SumResponse,
    requestSerialize: serialize_greet_SumRequest,
    requestDeserialize: deserialize_greet_SumRequest,
    responseSerialize: serialize_greet_SumResponse,
    responseDeserialize: deserialize_greet_SumResponse,
  },
  prime: {
    path: '/greet.GreetService/Prime',
    requestStream: false,
    responseStream: true,
    requestType: greet_pb.PrimeRequest,
    responseType: greet_pb.PrimeResponse,
    requestSerialize: serialize_greet_PrimeRequest,
    requestDeserialize: deserialize_greet_PrimeRequest,
    responseSerialize: serialize_greet_PrimeResponse,
    responseDeserialize: deserialize_greet_PrimeResponse,
  },
  average: {
    path: '/greet.GreetService/Average',
    requestStream: true,
    responseStream: false,
    requestType: greet_pb.AvgRequest,
    responseType: greet_pb.AvgResponse,
    requestSerialize: serialize_greet_AvgRequest,
    requestDeserialize: deserialize_greet_AvgRequest,
    responseSerialize: serialize_greet_AvgResponse,
    responseDeserialize: deserialize_greet_AvgResponse,
  },
  getMax: {
    path: '/greet.GreetService/GetMax',
    requestStream: true,
    responseStream: true,
    requestType: greet_pb.MaxRequest,
    responseType: greet_pb.MaxResponse,
    requestSerialize: serialize_greet_MaxRequest,
    requestDeserialize: deserialize_greet_MaxRequest,
    responseSerialize: serialize_greet_MaxResponse,
    responseDeserialize: deserialize_greet_MaxResponse,
  },
  sqrt: {
    path: '/greet.GreetService/Sqrt',
    requestStream: false,
    responseStream: false,
    requestType: sqrt_pb.SqrtRequest,
    responseType: sqrt_pb.SqrtResponse,
    requestSerialize: serialize_greet_SqrtRequest,
    requestDeserialize: deserialize_greet_SqrtRequest,
    responseSerialize: serialize_greet_SqrtResponse,
    responseDeserialize: deserialize_greet_SqrtResponse,
  },
};

exports.GreetServiceClient = grpc.makeGenericClientConstructor(GreetServiceService);
