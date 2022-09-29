var jsonServer = require("json-server");
var server = jsonServer.create();
var router = jsonServer.router("./mock/api/db.json");
var middleWares = jsonServer.defaults();
var db = require("./api/db/index.js");

server.use(jsonServer.bodyParser);
// Set default middleWares (logger, static, cors and no-cache)
server.use(middleWares);
server.use(jsonServer.bodyParser);
var webRoot = "/api";

/**
 * 首次申請-身分驗證 /member/checkMember?captcha=1234
 */
server.post(webRoot + "/member/checkMember", function (req, res) {
  res.status(200).json(db.checkMember);
});

server.post(webRoot + "/test/pdf", function (req, res) {
  // 使用串流下載
  res.status(200).json(db.testPdf(req, res));
});

// rewrite
server.use(
  jsonServer.rewriter({
    "/b2b2c.custPtl/*": "/$1",
  })
);

// Use default router
server.use(router);
server.listen(3000, "0.0.0.0", function () {
  console.log("http://localhost:3000 JSON Server is running");
});
