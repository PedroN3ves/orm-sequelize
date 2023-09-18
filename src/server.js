const express = require("express");

const port = 3333;

const app = express();

app.listen(port,() => console.log(`Server runnig on ${port}`));