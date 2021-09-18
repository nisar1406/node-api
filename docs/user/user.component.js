module.exports = {
  UserLoginInput: {
    type: 'object',
    properties: {
      emailId: {
        type: 'string',
        required: true,
        description: "User email address",
        example: "test7@gmail.com"
      },
      password: {
        type: "string",
        required: true,
        description: "User password",
        example: "test"
      }
    }
  },
  RegisterUserInput: {
    type: 'object',
    properties: {
      firstName: {
        type: "string",
        required: true,
        description: "User first name",
        example: "test"
      },
      lastName: {
        type: "string",
        required: true,
        description: "User last name",
        example: "test"
      },
      emailId: {
        type: 'string',
        required: true,
        description: "User email address",
        example: "test7@gmail.com"
      },
      password: {
        type: "string",
        required: true,
        description: "User password",
        example: "test"
      }
    }
  }
}
