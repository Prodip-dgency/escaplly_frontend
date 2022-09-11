<template>
  <nav class="nav-container">
    <div class="main-container">
      <div class="container1 body-container">
        <div class="logo">
          <router-link :to="{ name: 'home' }">
            <img src="../assets/img/escaplly_logo.svg" alt="" />
          </router-link>
        </div>
        <div class="dropdown">
          <button class="menu-bar" @click="dropdown_function">
            <i class="fa-solid fa-bars"></i>
          </button>
          <div  :class="activeclass" class="dropdown-content">
            <router-link :to="{ name: 'home' }"> <i class="fa-solid fa-house"></i> Home</router-link>
            <router-link :to="{ name: 'company_list' }"> <i class="fa-solid fa-building"></i> Companies</router-link>
            <div class="line-break"></div>
            <router-link :to="{ name: 'game_list' }"> <i class="fa-solid fa-puzzle-piece"></i> Escape Rooms</router-link>
            <router-link :to="{ name: 'contact' }"> <i class="fa-solid fa-address-book"></i> Contact</router-link>
            <div class="line-break"></div>
            <a href=""> <i class="fa-solid fa-circle-exclamation"></i> See Errors ?</a>
            <a href="" class="feedback"> Give Us Feedback</a>
          </div>
        </div>
      </div>
    </div>
    <div class="shadow"></div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      dropdown_show: false,
      activeclass: "",
    };
  },
  methods: {
    dropdown_function() {
      if (this.activeclass) {
        this.activeclass = "";
      } else {
        this.activeclass = "active";
      }
      return (this.dropdown_show = !this.dropdown_show);
    },
  },
};
</script>

<style src="@/assets/css/components/Navsection.scss" lang="scss">

</style>
