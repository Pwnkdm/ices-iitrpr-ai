// const passwordValidator = require("password-validator");
import passwordValidator from "password-validator";
const passwordSchema = new passwordValidator();

// Add properties to schema
passwordSchema
  .is()
  .min(8) // Minimum length 8
  .is()
  .max(100) // Maximum length 100
  .has()
  .uppercase() // Must have uppercase letters
  .has()
  .lowercase() // Must have lowercase letters
  .has()
  .digits(1) // Must have at least 1 digit
  .has()
  .not()
  .spaces() // Should not have spaces
  .is()
  .not()
  .oneOf(["Password123", "Password1", "Pass@123"]); // Blacklist common passwords

const validatePassword = (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ message: "Password is required" });
  }

  const validationResult = passwordSchema.validate(password, { list: true });

  if (validationResult.length > 0) {
    const validationMessages = {
      min: "Password must be at least 8 characters",
      max: "Password must be less than 100 characters",
      uppercase: "Password must contain at least one uppercase letter",
      lowercase: "Password must contain at least one lowercase letter",
      digits: "Password must contain at least one digit",
      spaces: "Password must not contain spaces",
      oneOf: "Password is too common and easily guessed",
    };

    const errors = validationResult.map((rule) => validationMessages[rule]);
    return res
      .status(400)
      .json({ message: "Password does not meet requirements", errors });
  }

  next();
};

export default validatePassword;
