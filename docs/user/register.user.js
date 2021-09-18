module.exports = {
  post: {
    tags: ['USER'],
    description: "Create post",
    operationId: "createPost",
    parameters: [],
    security: [],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/RegisterUserInput'
          }
        }
      }
    },
    responses: {
      '201': {
        description: "Todo created successfully"
      },
      '500': {
        description: 'Server error'
      }
    }
  }
}
