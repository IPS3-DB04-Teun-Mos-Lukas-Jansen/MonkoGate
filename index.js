const express = require('express');
const proxy = require('express-http-proxy');

const app = express();
const port = 80;

app.use("/api/userpref", proxy("http://localhost:8000"));
app.use("/api/integration", proxy("http://localhost:81"));

app.use(proxy('http://localhost:3000'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    });