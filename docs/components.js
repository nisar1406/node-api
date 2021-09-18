const user = require('./user/user.component');
const posts = require('./post/post.component');

module.exports = {
    components: {
        schemas: {
            ...user,
            ...posts
        },
        securitySchemes: {
            Bearer: {
                type: 'apiKey',
                name: 'Authorization',
                // scheme: 'bearer',
                // bearerFormat: 'JWT',
                in: 'Header'
            }
        }
    },
    // security: [{
    //     bearerAuth: []
    // }]
};
