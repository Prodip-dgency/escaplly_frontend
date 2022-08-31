<template>
  <div>
    <herosection />
    <uspsection />
    <escape-room-section />
    <curious-section />
    <top-companies :companies="companies" />
    <mission-vision />
  </div>
</template>

<script>
import Herosection from "@/components/Herosection.vue";
import Uspsection from "../components/Uspsection.vue";
import EscapeRoomSection from "../components/EscapeRoomSection.vue";
import CuriousSection from "../components/CuriousSection.vue";
import TopCompanies from "../components/TopCompanies.vue";
import MissionVision from "../components/MissionVision.vue";

export default {
  components: {
    Herosection,
    Uspsection,
    EscapeRoomSection,
    CuriousSection,
    TopCompanies,
    MissionVision,
  },
  data(){
    return {
      companies: []
    }
  },
  methods: {
    
  },
  mounted(){
    fetch("http://159.203.95.1/company/viewset/company-profile/")
    .then((res) => res.json())
    .then((data) => this.companies = data)
  }
};
</script>

<style>
</style>