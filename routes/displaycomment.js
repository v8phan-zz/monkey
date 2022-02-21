const express = require("express");
const app = express();
const router = express.Router();
const Comment = require("../models/Comment");

router.get("/comment", async (req, res) => {
  console.log("CALL RECEIVED");
});

module.exports = router;
