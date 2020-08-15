import { Client } from "https://deno.land/x/mysql/mod.ts";

const client = await new Client().connect({
  hostname: "localhost",
  username: "jose",
  db: "clientes",
  poolSize: 3, // connection limit
  password: "",
});

const users = await client.query(`select * from usuarios`);
console.log(users);

await client.close();