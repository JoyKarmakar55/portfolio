const express = require("express")
const { sendMailController } = require("../controllers/portfolioController")

const router = express.Router()

router.post("/sendEmail", sendMailController)

module.exports = router;