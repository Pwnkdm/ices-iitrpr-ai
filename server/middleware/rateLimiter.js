// const rateLimit = require("express-rate-limit");
import rateLimit from "express-rate-limit";

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 requests per windowMs
  message: {
    message: "Too many login attempts, please try again after 15 minutes",
  },
});

export default loginLimiter;
