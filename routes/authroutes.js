const { Router } = require("express");
const authControllers = require("../controllers/authControllers");

const router = Router();

router.get("/signup", authControllers.signup_get);

module.exports = routerprism;
