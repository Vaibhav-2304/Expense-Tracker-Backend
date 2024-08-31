import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import authRouter from "./routes/auth.route.js";

dotenv.config();

const app = express();
const router = express.Router();

app.use(express.json()); // Middleware that parses the recieved request body into json.
// app.use(cors()); 

// Attach the router to the app
app.use('/', router);
app.use("/api", authRouter);

router.get('/', (req, res) => {
  res.status(200).send('API is running');
});

const PORT = process.env.PORT || 5000;

const password = "iMpmtWPWciVciMuX";
const clusterName = "Cluster0";
const dbName = "ExpenseDB";
const mongoUrl = `mongodb+srv://rishiqwerty01:${password}@${clusterName}.ewhvozy.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=${clusterName}`; // backtick is used for string interpolation

app.listen(PORT, (err) => {
  if (err) {
    console.error('Error starting server:', err);
    return;
  }

  mongoose.connect(mongoUrl)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Database connection error:', err));

  console.log(`Server running on port ${PORT}`);
});