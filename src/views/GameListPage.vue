<template>
  <div class="game-list">
    <section>
      <bread-crumb />
    </section>
    <section class="all-gamesection">
      <div class="all-gamesection__wrapper body-container">
        <div class="gamelist-header">
          <h2 class="page-title">All Escape games</h2>
          <p class="page-description">Lorem Ipsum is simply dummy text of the text a Lorem Ipsum is simply dummy text of the text a lpsum simply text for dummy only.</p>
        </div>
        <div class="gamelist-allgame">
          <div class="gamelist-allgame__card">
            <escape-room-section :activityprofiles= "activity_profiles" :companyprofiles="companies" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BreadCrumb from "@/components/BreadCrumb.vue"
import EscapeRoomSection from "@/components/EscapeRoomSection.vue"

export default {
  props:{
    activity_profiles: Array,
    companies: Array
  },
  components:{
    BreadCrumb,
    EscapeRoomSection,
  }

}
</script>

<style src="@/assets/css/views/GameListPage.scss" lang="scss">

</style>