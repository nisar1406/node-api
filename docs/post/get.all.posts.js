module.exports = {
  get: {
    tags: ["POST"],
    description: "Get posts",
    parameters: [],
    security: {
      Bearer: []
    },
    responses: {
      '200': {
        description: "All posts were obtained",
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Post'
            }
          }
        }
      }
    },
  }
}
