import { opine, json, Router, urlencoded } from "https://deno.land/x/opine@0.20.0/mod.ts";

import { database } from "./db.ts";
const app = opine();
const router = Router();
app.use(urlencoded());
var a:number=15;

// prueba de middleware personalizado
app.use(function (req, res, next) {
  console.log("middleware" , a++);
  next();    // it will pass the control to next matching route
});

app.use("/api", router);
router.post("/submit", function (req, res, next) {
  console.log(req.parsedBody);
  res.json(req.parsedBody);
});
router.get("/datos", (req, res, next) => {
  res.json(database)
})


const PORT = 3000;

// Start our server on the desired port.
app.listen(PORT);

console.log(`API server running on port ${PORT}`);