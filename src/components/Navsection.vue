<template>
  <nav class="nav-container">
    <div class="main-container">
      <div class="container1 body-container">
        <div class="logo">
          <router-link :to="{ name: 'home' }">
            <img src="../assets/escaplly_logo.svg" alt="" />
          </router-link>
        </div>
        <div class="dropdown">
          <button class="menu-bar" @click="dropdown_function">
            <i class="fa-solid fa-bars"></i>
          </button>
          <div id="dropDown" :class="activeclass" class="dropdown-content">
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

<style lang="scss">
$media-mobile-sm: "only screen and (max-width : 480px)";
.nav-container {
  position: sticky;
  top: -1px;
  z-index: 999;
  box-shadow: 0px 5px 15px 1px rgba(0, 0, 0, 0.2);
  .main-container {
    background: var(--text-color-light-varient8);
    display: flex;
    justify-content: center;
    padding: 12px 0;
    .container1 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .dropdown {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        font-family: "Roboto", sans-serif;
        .menu-bar {
          font-size: 30px;
          transition: all 1s;
          // position: relative;
          border: none;
          background: inherit;
          cursor: pointer;
          &:hover {
            transform: scale(1.2);
          }
        }
        .dropdown-content {
          z-index: -1;
          background: #f3f3f3;
          position: absolute;
          top: 73px;
          min-width: 300px;
          padding: 20px 0;
          opacity: 0;
          transform: scale(0.5);
          transition: all 400ms;
          a {
            display: block;
            list-style: none;
            color: inherit;
            text-decoration: none;
            font-size: 18px;
            font-weight: 400;
            padding: 12px 0 12px 30px;
            i {
              margin-right: 10px;
            }
            &:hover {
              background: #ffffff;
            }
          }
          .line-break {
            border-bottom: 2px solid #cecccc;
            margin: 30px 0 30px 50px;
          }
          .feedback {
            color: blue;
          }
          @media #{$media-mobile-sm} {
            right: 0;
            min-width: 260px;
          }
        }
        .active {
          opacity: 1;
          transform: scale(1);
          transition: transform 300ms cubic-bezier(0.18, 0.89, 0.43, 1.19);
        }
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
