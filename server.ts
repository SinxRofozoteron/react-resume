import express from "express";
import path from "path";
import sslRedirect from "heroku-ssl-redirect";

import githubRoutes from "./routes/github";
import errorHandler from "./middleware/errorHandler";
import "./models/User";

const api = express();

api.use(sslRedirect());

api.use("/github", githubRoutes);

if (process.env.NODE_ENV === "production") {
  api.use(express.static(path.resolve(__dirname, "..", "client", "build")));
  api.get("*", (_, res) => {
    res.sendFile(
      path.resolve(__dirname, "..", "client", "build", "index.html")
    );
  });
}

api.use(errorHandler);

const PORT: number | string = process.env.PORT || 5000;

api.listen(PORT);
