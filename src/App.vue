<template>
  <div>
     <navsection />
     <herosection />
     <uspsection />
     <escape-room-section />
    <!-- <router-view /> -->
  </div>
</template>

<script>
 import Navsection from "./components/Navsection.vue";
 import Herosection from "./components/Herosection.vue";
 import Uspsection from "./components/Uspsection.vue";
 import EscapeRoomSection from "./components/EscapeRoomSection.vue";
export default {
  components: {
    Navsection,
    Herosection,
    Uspsection,
    EscapeRoomSection
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
