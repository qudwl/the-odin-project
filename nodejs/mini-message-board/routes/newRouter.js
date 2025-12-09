const { Router } = require("express");
const messages = require("../data/messages");

const newRouter = Router();

newRouter.post("/new", (req, res) => {
  messages.push({
    text: req.body.text,
    user: req.body.user,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = newRouter;
