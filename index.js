const express = require("express");
const proxy = require("express-http-proxy");
const https = require("https");
const fs = require("fs");
require("dotenv").config();

const app = express();
const port = 443;

app.use("/api/userpref", proxy("http://localhost:8000"));
app.use("/api/integration", proxy("http://localhost:81"));
app.use(proxy("http://localhost:3000"));

https
  .createServer(
    {
      key: fs.readFileSync(process.env.HTTPS_KEY),
      cert: fs.readFileSync(process.env.HTTPS_CERT),
    },
    app
  )
  .listen(port, () => {
    console.log(`Monkogate listening at https://localhost:${port}`);
  });