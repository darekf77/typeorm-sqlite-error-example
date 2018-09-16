import "reflect-metadata";
import { ConnectionOptions, createConnection } from "typeorm";
import { Post } from "./post";
import { EverythingSubscriber } from "./everything";

// first create a connection
const options: ConnectionOptions = {
    "database": "tmp/db.sqlite3",
    "type": "sqlite",
    "synchronize": true,
    "dropSchema": true,
    "logging": false,
    entities: [Post],
    subscribers: [EverythingSubscriber]
};


createConnection(options).then(async connection => {

    let p1 = new Post();

    let repo = await connection.getRepository(Post);
    await repo.save(p1)

    p1 = await repo.findOne(1)
    p1.title = 'asd'
    await repo.update(1, p1);


}, error => console.log("Cannot connect: ", error.stack ? error.stack : error));
