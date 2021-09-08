const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const userRoutes = require('./routes/user.route');
const postRoutes = require('./routes/post.route');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());

/** Swagger Initialization - START */
const swaggerOption = {
  swaggerDefinition: (swaggerJsdoc.Options = {
    info: {
      title: "my-posts",
      description: "API documentation",
      contact: {
        name: "Developer",
      },
      servers: ["http://localhost:3000/"],
    },
  }),
  apis: ["index.js", "./routes/*.js"],
};

const swaggerDocs = swaggerJsdoc(swaggerOption);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
/** Swagger Initialization - END */


app.use('/users', userRoutes);
app.use('/posts', postRoutes);

app.use('/test', (req, res) => {
  console.log('Request received!');
  res.status(200).send({ 'message': 'Thank you for your request' });
});

app.listen(PORT, () => {
  console.log(`Application started on PORT: ${PORT}`)
});
