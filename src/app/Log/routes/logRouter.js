const logController = require("../controllers/logController");


const logRouter = require('express').Router()

logRouter.get('/hfswapi/getLogs', logController.getLogs );

module.exports = logRouter;