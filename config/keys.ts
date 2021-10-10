interface Keys {
  googleClientID: string;
  googleClientSecret: string;
  mongoURI: string;
  cookieKey: string;
}

if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod") as Keys;
} else {
  module.exports = require("./dev") as Keys;
}
