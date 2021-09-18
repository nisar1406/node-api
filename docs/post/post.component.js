module.exports = {
  Post: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: "Post identification number",
        example: "ytyVgh"
      },
      description: {
        type: 'string',
        description: "User's first name",
        example: "Jane"
      },
      datetimeCreated: {
        type: 'string',
        description: "User's first name",
        example: "Jane"
      },
      firstName: {
        type: 'string',
        description: "User's first name",
        example: "Jane"
      },
      lastName: {
        type: 'string',
        description: "User's last name",
        example: "Doe"
      },
      likeCount: {
        type: 'integer',
        description: "like count for the post",
        example: 1
      },
    }
  },
  TodoInput: {
    type: 'object',
    properties: {
      title: {
        type: 'string',
        description: "Todo's title",
        example: "Coding in JavaScript"
      },
      completed: {
        type: "boolean",
        description: "The status of the todo",
        example: false
      }
    }
  },
  Error: {
    type: 'object',
    properties: {
      message: {
        type: 'string'
      },
      internal_code: {
        type: 'string'
      }
    }
  }
}
