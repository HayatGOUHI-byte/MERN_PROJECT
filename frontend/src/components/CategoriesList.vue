<template>
  <div>
    <h1>Categories</h1>
    <ul>
      <li v-for="category in categories" :key="category._id">
        {{ category.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'CategoriesList', // Nom multi-mots du composant
  data() {
    return {
      categories: []
    };
  },
  mounted() {
    axios
      .get('http://localhost:5000/api/categories')
      .then(response => {
        this.categories = response.data;
      })
      .catch(error => {
        console.error(error); // Utilisation de console.error pour les erreurs
      });
  }
};
</script>
