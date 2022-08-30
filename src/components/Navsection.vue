<template>
  <div class="nav-container">
    <div class="main-container">
      <div class="container1 body-container">
        <div class="logo">
          <img src="../assets/escaplly_logo.svg" alt="" />
        </div>
        <div class="menu-bar"><i class="fa-solid fa-bars"></i></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
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
