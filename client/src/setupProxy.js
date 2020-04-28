const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware(["/api", "/auth/google"], {
      target: "http://localhost:5000",
    })
  );
};
