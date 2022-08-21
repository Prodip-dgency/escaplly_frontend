<template>
  <div>
     <navsection />
     <herosection />
     <uspsection />
    <!-- <router-view /> -->
  </div>
</template>

<script>
 import Navsection from "./components/Navsection.vue";
 import Herosection from "./components/Herosection.vue";
 import Uspsection from "./components/Uspsection.vue";
export default {
  components: {
    Navsection,
    Herosection,
    Uspsection
  }
}
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
