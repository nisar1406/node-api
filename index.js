import express from 'express';
import { json } from 'body-parser';
import { serve, setup } from "swagger-ui-express";
// import swaggerJsdoc, {Options} from "swagger-jsdoc";

import userRoutes from './routes/user.route';
import postRoutes from './routes/post.route';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(json());

// /** Swagger Initialization - START */
// const swaggerOption = {
//   swaggerDefinition: (Options = {
//     info: {
//       title: "my-posts",
//       description: "API documentation",
//       contact: {
//         name: "Developer",
//       },
//       servers: ["http://localhost:3000/"],
//     },
//   }),
//   apis: ["index.js", "./routes/*.js"],
// };

// const swaggerDocs = swaggerJsdoc(swaggerOption);
// app.use("/api-docs", serve, setup(swaggerDocs));
// /** Swagger Initialization - END */


app.use('/users', userRoutes);
app.use('/posts', postRoutes);

app.use('/test', (req, res) => {
  console.log('Request received!');
  res.status(200).send({ 'message': 'Thank you for your request' });
});

app.listen(PORT, () => {
  console.log(`Application started on PORT: ${PORT}`)
});
