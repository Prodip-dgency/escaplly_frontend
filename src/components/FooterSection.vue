<template>
  <footer>
    <div class="footer-container">
      <div class="container1 body-container">
        <div class="footer-upper">
          <div class="upper1">
            <div class="logo-text">
              <img src="../assets/img/escaplly_logo.svg" alt="" />
              <p>
                Lorem Ipsum has been the industry's dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                make a type specimen It.
              </p>
            </div>
            <div class="list">
              <ul>
                <p @click="linkopen('link')"><a class="list-btn">+</a> Escape Room Fans</p>

                <div :class="activeclass">
                  <li>Link 1</li>
                  <li>Link 2</li>
                  <li>Link 3</li>
                  <li>Link 4</li>
                </div>
              </ul>
              <ul>
                <p @click="linkopen1('link')"><a class="list-btn">+</a> Escape Room Owner</p>

                <div :class="activeclass1">
                  <li>Link 1</li>
                  <li>Link 2</li>
                  <li>Link 3</li>
                  <li>Link 4</li>
                </div>
              </ul>
              <ul>
                <p @click="linkopen2('link')"><a class="list-btn">+</a> About Company</p>

                <div :class="activeclass2">
                  <li>Link 1</li>
                  <li>Link 2</li>
                  <li>Link 3</li>
                  <li>Link 4</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-middle">
          <div class="mobile-responsive">
            <div class="divider middle">
              <router-link :to="{ name: 'termsandconditions' }">
                <p>Terms & Conditions</p>
              </router-link>
            </div>
            <div class="divider middle">
              <router-link :to="{ name: 'privacy-policy' }">
                <p class="divider">Privacy Policy</p>
              </router-link>
            </div>
            <div class="divider middle">
              <router-link :to="{ name: 'cookie-policy' }">
                <p class="divider">Cookie Policy</p>
              </router-link>
            </div>
          </div>
          <div class="mobile-responsive2">
            <div class="divider middle">
              <router-link :to="{ name: 'disclaimer' }">
                <p class="divider">Disclaimer</p>
              </router-link>
            </div>
            <div class="divider"><p>Sitemap</p></div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-down">
      <div class="down-container body-container">
        <div class="right-section">
          <i class="fa-regular fa-copyright"></i>
          <p>Escaplly - All Rights Reserved</p>
        </div>
        <div class="logo-section">
          <i class="fa-brands fa-square-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-linkedin"></i>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      activeclass: "link",
      activeclass1: "link",
      activeclass2: "link",
    };
  },
  methods: {
    linkopen(x) {
      if (this.activeclass) {
        this.activeclass = "";
      } else {
        this.activeclass = x;
      }
    },
    linkopen1(x) {
      if (this.activeclass1) {
        this.activeclass1 = "";
      } else {
        this.activeclass1 = x;
      }
    },
    linkopen2(x) {
      if (this.activeclass2) {
        this.activeclass2 = "";
      } else {
        this.activeclass2 = x;
      }
    },
  },
};
</script>

<style src="@/assets/css/components/FooterSection.scss" lang="scss">

</style>
