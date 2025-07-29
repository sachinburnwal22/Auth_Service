const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");
const apiRoutes = require("./routes/index");

// const {User} = require('./models/index');
// const bcrypt = require('bcrypt');
// const UserRepository = require('./repository/user-repository');

const UserService = require("./services/user-service");

const app = express();

const prepareAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);

  app.listen(PORT, async () => {
    console.log(`Server Started on Port: ${PORT}`);
    const service = new UserService();
    // const newToken = service.createToken({ email: "sanket@admin.com", id: 1 });
    // console.log("new token is", newToken);

    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbmtldEBhZG1pbi5jb20iLCJpZCI6MSwiaWF0IjoxNzUzNzY2ODIyLCJleHAiOjE3NTM3NzA0MjJ9.C-sMtF-mF3_AHp7zy40sy1rAsYLdITe0vFse84WLG6I";

    const response = service.verifyToken(token);
    console.log(response);
  });
};

prepareAndStartServer();
