import Joi from "joi"; // ES module import syntax

const validateRequest = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    next();
  };
};

const schemas = {
  userRegister: Joi.object({
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
  userLogin: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
  dataCreate: Joi.object({
    title: Joi.string().min(3).max(100).required(),
    description: Joi.string().min(5).required(),
  }),
  dataUpdate: Joi.object({
    title: Joi.string().min(3).max(100),
    description: Joi.string().min(5),
  }),
};

export { validateRequest, schemas };
