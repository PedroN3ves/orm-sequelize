const express = require('express');

const routes = require('./routes');

require('./database/index');

const port = 3333;

const app = express();
app.use(express.json());

app.use(routes);

app.listen(port, () => console.log(`Server runnig on ${port}`));
