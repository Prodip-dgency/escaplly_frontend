<template>
  <div class="mission-container">
    <div class="container body-container">
      <div class="header-text">
        <h2 class="page-title">Our Mission and Vision</h2>
        <h6 class="page-description">
          Lorem Ipsum is simply dummy text of the text a Lorem Ipsum is simply dummy text of the text a lpsum simply text for dummy only.
        </h6>
      </div>
      <div class="players-owners">
        <div class="players">
          <img src="../assets/img/team1.svg" alt="" />
          <h3>Escape Room Players</h3>
          <p>Is simply dummy text of the printing and type is a settingsetting industry Lorem Ipsum.</p>
          <ul>
            <li><i class="fa-solid fa-check"></i> Perfect match making for the escape room gamers.</li>
            <li><i class="fa-solid fa-check"></i> Best review system for finding good escape rooms.</li>
            <li><i class="fa-solid fa-check"></i> Easy booking system</li>
            <li><i class="fa-solid fa-check"></i> Review feed for sharing your escape room expriences.</li>
            <li><i class="fa-solid fa-check"></i> Review feed for sharing your escape room expriences.</li>
          </ul>
          <div class="button">
            <router-link class="btn1" :to="{ name: 'escape_room_players' }"> Learn More </router-link>
          </div>
        </div>
        <div class="owners">
          <img src="../assets/img/key1.svg" alt="" />
          <h3>Escape Room Owners</h3>
          <p>Is simply dummy text of the printing and type is a settingsetting industry Lorem Ipsum.</p>
          <ul>
            <li><i class="fa-solid fa-check"></i> Perfect match making for the escape room gamers.</li>
            <li><i class="fa-solid fa-check"></i> Best review system for finding good escape rooms.</li>
            <li><i class="fa-solid fa-check"></i> Easy booking system</li>
            <li><i class="fa-solid fa-check"></i> Review feed for sharing your escape room expriences.</li>
            <li><i class="fa-solid fa-check"></i> Review feed for sharing your escape room expriences.</li>
          </ul>
          <div class="button">
            <router-link class="btn2" :to="{ name: 'escape_room_owners' }">Learn More</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style src="@/assets/css/components/MissionVision.scss" lang="scss">

</style>
