<template>
  <div>
    <navsection />

    <router-view />

    <footer-section />
  </div>
</template>

<script>
import Navsection from "./components/Navsection.vue";
import FooterSection from "./components/FooterSection.vue";

export default {
  components: {
    Navsection,
    FooterSection,
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
</style>
