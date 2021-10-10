import express from "express";
import cookieSession from "cookie-session";
import passport from "passport";
import path from "path";

import authRoutes from "./routes/auth";
import keys from "./config/keys";
import "./services/mongoDB";
import "./models/User";
import "./services/passport";
import { appendFile } from "fs";

const api = express();

// Cookie session with 30 days maxAge
api.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
    name: "resume-auth",
  })
);
api.use(passport.initialize());
api.use(passport.session());

api.use(authRoutes);

if (process.env.NODE_ENV === "production") {
  api.use(express.static("../client/build"));
  api.get("/*", (_, res) => {
    res.sendFile(
      path.resolve(__dirname, "..", "client", "build", "index.html")
    );
  });
}

const PORT: number | string = process.env.PORT || 2000;

api.listen(PORT);
