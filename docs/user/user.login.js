module.exports = {
  post: {
    tags: ['USER'],
    description: "User login",
    operationId: "userLogin",
    parameters: [],
    security: [],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/UserLoginInput'
          }
        }
      }
    },
    responses: {
      '200': {
        description: "Login successful"
      },
      '404': {
        description: 'User not found/Invalid credentials.'
      },
      '500': {
        description: 'Internal server error'
      }
    }
  }
}
