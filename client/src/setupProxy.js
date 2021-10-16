const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    ["/auth/*", "/github/*"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};
