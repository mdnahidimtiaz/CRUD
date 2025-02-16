const express = require('express');
const mongoose = require('mongoose');
const learnRoute = require("./routes/learn_route.js");
const app = express()

app.use(express.json());


app.use("/api/learns", learnRoute);


app.get('/', (req, res) => {
    res.send('Hello, World people');
  });

  app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
  });

  mongoose.connect('mongodb+srv:')
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((error) => {
    console.error('Connection failed:', error);
  });
