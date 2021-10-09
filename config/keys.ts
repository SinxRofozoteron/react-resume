interface Keys {
  googleClientID: string;
  googleClientSecret: string;
  mongoURI: string;
  cookieKey: string;
}

const getKeys = async () => {
  let keys: Keys;
  if (process.env.NODE_ENV === "production") {
    const prodKeys = await import("./prod");
    keys = prodKeys.default;
  } else {
    const devKeys = await import("./dev");
    keys = devKeys.default;
  }
  return keys;
};

export default getKeys();
