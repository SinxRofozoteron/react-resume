import express from "express";
import cookieSession from "cookie-session";
import passport from "passport";

import authRoutes from "./routes/auth";
import keys from "./config/keys";
import "./services/mongoDB";
import "./models/User";
import "./services/passport";

const api = express();

// Cookie session with 30 days maxAge
api.use(
  cookieSession({ maxAge: 30 * 24 * 60 * 60 * 1000, keys: [keys.cookieKey] })
);
api.use(passport.initialize());
api.use(passport.session());

api.use(authRoutes);

const PORT: number | string = process.env.PORT || 5000;

api.listen(PORT);
