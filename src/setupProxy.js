const { createProxyMiddleware } = require("http-proxy-middleware");

const API_PORT = process.env.API_PORT || "13337";
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: `http://localhost:${API_PORT}`,
      changeOrigin: true,
      pathRewrite: { "^/api": "" },
    })
  );
};
