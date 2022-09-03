<template>
  <div>
    <herosection />
    <uspsection />
    <escape-room-section />
    <curious-section />
    <top-companies :companies="companies" :activity_profiles="activity_profiles" />
    <mission-vision />
    <div>
      
    </div>
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
      companies: [],
      activity_profiles: [],
    }
  },
  methods: {
    
  },
  mounted(){
    fetch("http://159.203.95.1/company/viewset/company-profile/")
    .then((res) => res.json())
    .then((data) => this.companies = data)

    fetch("http://159.203.95.1/activity/viewset/activityprofile/")
    .then((res) => res.json())
    .then((data) => this.activity_profiles = data)
  }
};
</script>

<style>
</style>