import devKeys from "./dev";
import prodKeys from "./prod";

interface Keys {
  googleClientID: string;
  googleClientSecret: string;
  mongoURI: string;
  cookieKey: string;
}

let keys: Keys;
if (process.env.NODE_ENV === "production") {
  keys = prodKeys;
} else {
  keys = devKeys;
}

export default keys;
