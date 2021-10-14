interface Keys {
  googleClientID: string;
  googleClientSecret: string;
  mongoURI: string;
  cookieKey: string;
  gitHubClientID: string;
  gitHubClientSecret: string;
  githubPrivateKey: string;
  gitHubKeyIssuer: string;
}

let keys: Keys;
if (process.env.NODE_ENV === "production") {
  keys = require("./prod").default;
} else {
  keys = require("./dev").default;
}

export default keys;
