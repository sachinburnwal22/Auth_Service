const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();

const prepareAndStartServer = () => {
  app.listen(PORT, () => {
    console.log(`Server started at port number ${PORT}`);
  });
};

prepareAndStartServer();
