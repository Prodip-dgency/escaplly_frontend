<template>
  <nav class="nav-container">
    <div class="main-container">
      <div class="container1 body-container">
        <div class="logo">
          <img src="../assets/escaplly_logo.svg" alt="" />
        </div>
        <div class="dropdown">
          <button class="menu-bar" @click="dropdown_function"><i class="fa-solid fa-bars"></i></button>
          <div v-show="dropdown_show" id="dropDown" class="dropdown-content">
            <a href="#">Home</a>
            <a href="#">Companies</a>
            <a href="#">Escape Rooms</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

  data(){
    return{
      dropdown_show: false
    }

  },
  methods: {
    dropdown_function(){
      return this.dropdown_show = !this.dropdown_show;

    }
  }
};
</script>

<style lang="scss">

.dropdown > .menu-bar {
  position: relative;
}

.dropdown > button {
  border: none;
  background: inherit;
  cursor: pointer;
}

.dropdown {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.dropdown-content {
  background: #fffffff0;
  position: absolute;
  top: 73px;
  min-width: 250px;
}

.dropdown-content > a {
  display: block;
  list-style: none;
  color: inherit;
  padding: 10px;
  text-decoration: none;
}

$media-mobile-sm: "only screen and (max-width : 480px)";
.nav-container {
  position: sticky;
  top: -1px;
  z-index: 999;
 
  .main-container {
   background: var(--text-color-light-varient8);
    display: flex;
    justify-content: center;
    padding: 12px 0;
    .container1 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .menu-bar {
        font-size: 30px;
      }
      @media #{$media-mobile-sm} {
        padding: 0 10px;
      }
    }
    @media #{$media-mobile-sm} {
      justify-content: flex-start;
    }
  }
 
}
</style>
