interface Keys {
  googleClientID: string;
  googleClientSecret: string;
  mongoURI: string;
  cookieKey: string;
}

let keys: Keys;
if (process.env.NODE_ENV === "production") {
  keys = require("./prod");
} else {
  keys = require("./dev");
}

export default keys;
