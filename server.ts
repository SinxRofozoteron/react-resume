import express from "express";
import cookieSession from "cookie-session";
import passport from "passport";
import path from "path";

import authRoutes from "./routes/auth";
import keys from "./config/keys";
import "./services/mongoDB";
import "./models/User";
import "./services/passport";

const api = express();

if (process.env.NODE_ENV === "production") {
  // For Heroku deployment: force http request to be redirected to https
  api.use((req, res, next) => {
    if (req.header("x-forwarded-proto") !== "https" && !req.secure)
      res.redirect(`https://${req.header("host")}${req.url}`);
    else next();
  });

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
  api.use(express.static(path.resolve(__dirname, "..", "client", "build")));
  api.get("*", (_, res) => {
    res.sendFile(
      path.resolve(__dirname, "..", "client", "build", "index.html")
    );
  });
}

const PORT: number | string = process.env.PORT || 2000;

api.listen(PORT);
