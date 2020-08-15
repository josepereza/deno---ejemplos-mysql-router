import { Client } from "https://deno.land/x/mysql/mod.ts";
const client = await new Client().connect({
hostname: "localhost",
username: "jose",
password: "",
});
await client.execute("CREATE DATABASE IF NOT EXISTS clientes");
await client.execute("USE clientes");
await client.execute(`
   CREATE TABLE IF NOT EXISTS books (
       id int(11) NOT NULL AUTO_INCREMENT,
       name varchar(100) NOT NULL,
       PRIMARY KEY (id)
   );
`);
let result = await client.execute(`INSERT INTO books(name) values(?)`, ["My Book One"]
);
console.log(result);

const books_all = await client.query("select * from books");
console.log(books_all);
