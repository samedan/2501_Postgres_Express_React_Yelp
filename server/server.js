require("dotenv").config();
const express = require("express");

const app = express();

const port = process.env.PORT || 3005;

app.listen(port, () => {
  console.log(`Server is running and listening on port: ${port}`);
});
