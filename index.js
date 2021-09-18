const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require("swagger-ui-express");
const docs = require('./docs');
const userRoutes = require('./routes/user.route');
const postRoutes = require('./routes/post.route');

const PORT = process.env.PORT || 3003;
const app = express();

app.use(bodyParser.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(docs));

app.use('/users', userRoutes);
app.use('/posts', postRoutes);

app.use('/test', (req, res) => {
  console.log('Request received!');
  res.status(200).send({ 'message': 'Thank you for your request' });
});

app.listen(PORT, () => {
  console.log(`Application started on PORT: ${PORT}`)
});
