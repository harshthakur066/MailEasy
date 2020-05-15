const requireCredits = require("../middlewares/requireCredts");
const mongoose = require("mongoose");

const Feedback = mongoose.model("feedback");

module.exports = (app) => {
  app.post("/api/feedback", requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const feedback = new Feedback({
      title,
      subject,
      body,
      recipients: recipients
        .split(",")
        .map((email) => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now(),
    });
  });
};
