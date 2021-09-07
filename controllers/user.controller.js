const usersService = require("../services/user.service");

exports.register = (req, res, next) => {
  // Validation area
  const { firstName, lastName, emailId, password } = req.body;

  const data = {
    firstName: firstName,
    lastName: lastName,
    emailId: emailId,
    password: password,
  };
  usersService.register(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};

exports.login = (req, res, next) => {
  // Validation area
  const { emailId, password } = req.body;

  const data = {
    emailId: emailId,
    password: password,
  };
  usersService.login(data, (error, results) => {
    if (error) {
      // console.log(error);
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};
