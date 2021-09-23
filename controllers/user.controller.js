import { register, login } from "../services/user.service";

const _register = (req, res, next) => {
  // Validation area
  // Validate request
  if (!req.body) {
    return res.status(400).send({
      success: 0,
      message: "Note content can not be empty"
    });
  };
  register(req.body, (error, results) => {
    if (error) {
      console.log(error);
      if (error.errNo === 1062) return res.status(409).send({ success: 0, message: "User already exist. Please Login" });
      else return res.status(400).send({ success: 0, message: "Bad request" });
    }
    return res.status(201).send({
      success: 1,
      message: results,
    });
  });
}
export { _register as register };


const _login = (req, res, next) => {
  // Validation area
  const { emailId, password } = req.body;

  const data = {
    emailId: emailId,
    password: password,
  };
  login(data, (error, statusCode, results) => {
    if (error) {
      // console.log(error);
      return res.status(statusCode).send({ success: 0, message: results });
    }
    return res.status(200).send({
      success: 1,
      message: 'Login successful',
      token: results,
    });
  });
}
export { _login as login };
