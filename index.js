import express from 'express';
import { json } from 'body-parser';
import { serve, setup } from "swagger-ui-express";
// import swaggerJsdoc, {Options} from "swagger-jsdoc";
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import userRoutes from './routes/user.route';
import postRoutes from './routes/post.route';

const PORT = process.env.PORT || 3000;
const app = express();

dotenv.config();
app.use(json());

const url = `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.afqp8.mongodb.net/posts?retryWrites=true&w=majority`

mongoose.connect(url, {
  useNewUrlParser: true
}).then(() => {
  console.log("Successfully connected to the database");
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});

app.use('/users', userRoutes);
app.use('/posts', postRoutes);

app.use('/test', (req, res) => {
  console.log('Request received!');
  res.status(200).send({ 'message': 'Thank you for your request' });
});

app.listen(PORT, () => {
  console.log(`Application started on PORT: ${PORT}`)
});
