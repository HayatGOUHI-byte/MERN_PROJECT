# MERN_PROJECT
This project aims to use the following technologies :MongoDB, Express.js, React and Node.js to implement a digital solution within the company.
Installe Vue CLI pour initialiser un projet Vue.js facilement.

npm install -g @vue/cli

vue create frontend
cd frontend
npm run serve


http://localhost:8080

mkdir backend
cd backend
npm init -y
npm install express mongoose cors


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connexion à MongoDB
mongoose.connect('mongodb://localhost/tondb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

// Route de test
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Lancer le serveur
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: String,
  description: String
});

module.exports = mongoose.model('Category', categorySchema);


const express = require('express');
const Category = require('./models/Category');
const router = express.Router();

// Route pour récupérer toutes les catégories
router.get('/categories', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Route pour créer une nouvelle catégorie
router.post('/categories', async (req, res) => {
  const category = new Category(req.body);
  try {
    await category.save();
    res.status(201).json(category);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;

const categoryRoutes = require('./routes');

app.use('/api', categoryRoutes);

npm install axios




<template>
  <div>
    <h1>Categories</h1>
    <ul>
      <li v-for="category in categories" :key="category._id">{{ category.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      categories: []
    };
  },
  mounted() {
    axios.get('http://localhost:5000/api/categories')
      .then(response => {
        this.categories = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>



node server.js

npm run serve
