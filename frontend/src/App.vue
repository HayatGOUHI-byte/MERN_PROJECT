<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <CategoriesList /> <!-- Ajout du composant corrigé -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import CategoriesList from './components/CategoriesList.vue'; // Mise à jour avec le bon nom de fichier

export default {
  name: 'App',
  components: {
    HelloWorld,
    CategoriesList // Ajout du composant ici
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
