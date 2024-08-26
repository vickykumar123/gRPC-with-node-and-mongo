const grpc = require("@grpc/grpc-js");
const {BlogServiceClient} = require("../proto/blog_grpc_pb");
const {Blog, BlogId} = require("../proto/blog_pb");
const {Empty} = require("google-protobuf/google/protobuf/empty_pb");

function createBlog(client) {
  console.log("----createBlog was invoked----");

  return new Promise((resolve, reject) => {
    const req = new Blog()
      .setAuthorId("Cool")
      .setTitle("Cool Blog")
      .setContent("Content will cool as ice");
    client.createBlog(req, (err, res) => {
      if (err) {
        reject(err);
      }

      console.log(`Blog was created: \n ${res}`);
      resolve(res.getId());
    });
  });
}

async function readBlog(client, id) {
  console.log("---readBlog was invoked---");

  return new Promise((resolve, reject) => {
    const req = new BlogId().setId(id);

    client.readBlog(req, (err, res) => {
      if (err) {
        reject(err);
      }

      console.log(`Blog: ${res}`);

      resolve();
    });
  });
}

async function updateBlog(client, id) {
  console.log("----updateBlog was invoked---");
  return new Promise((resolve, reject) => {
    const req = new Blog()
      .setId(id)
      .setAuthorId("Cool 222")
      .setTitle("Cool Blog 222")
      .setContent("Content will cool as ice 222");

    client.updateBlog(req, (err) => {
      if (err) {
        reject(err);
      }
      console.log("Blog was updated");
      resolve();
    });
  });
}

async function listBlogs(client) {
  console.log("---- listBlogs was invoked ------");
  return new Promise((resolve, reject) => {
    const req = new Empty();
    const call = client.listBlogs(req);

    call.on("data", (res) => {
      console.log(res);
    });

    call.on("error", (err) => {
      reject(err);
    });

    call.on("end", () => {
      resolve;
    });
  });
}

async function deleteBlog(client, id) {
  console.log("---deleteBlog was invoked---");

  return new Promise((resolve, reject) => {
    const req = new BlogId().setId(id);

    client.deleteBlog(req, (err, _) => {
      if (err) {
        reject(err);
      }

      console.log(`--- --- Blog delete 0000`);

      resolve();
    });
  });
}

async function main() {
  const creds = grpc.ChannelCredentials.createInsecure();
  const client = new BlogServiceClient("localhost:50051", creds);

  const id = await createBlog(client);
  await readBlog(client, id);
  await updateBlog(client, id);
  await listBlogs(client);
  await deleteBlog(client, id);
  //   client.close(); No need.
}

main();
