<template>
  <div>
     <navsection />
     <herosection />
     <uspsection />
     <escape-room-section />
     <curious-section />
     <top-companies />
     <mission-vision />
    <!-- <router-view /> -->
  </div>
</template>

<script>
 import Navsection from "./components/Navsection.vue";
 import Herosection from "./components/Herosection.vue";
 import Uspsection from "./components/Uspsection.vue";
 import EscapeRoomSection from "./components/EscapeRoomSection.vue";
 import CuriousSection from "./components/CuriousSection.vue";
 import TopCompanies from "./components/TopCompanies.vue";
 import MissionVision from "./components/MissionVision.vue";
export default {
  components: {
    Navsection,
    Herosection,
    Uspsection,
    EscapeRoomSection,
    CuriousSection,
    TopCompanies,
    MissionVision
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
