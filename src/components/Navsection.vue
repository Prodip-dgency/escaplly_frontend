<template>
  <div class="nav-container">
    <div class="container1 body-container">
      <div class="logo">
        <img src="../assets/escaplly_logo.svg" alt="" />
      </div>
      <div class="menu-bar"><i class="fa-solid fa-bars"></i></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
$media-mobile-sm: "only screen and (max-width : 480px)";
.nav-container {
  height: 69px;
  background: var(--text-color-light-varient8);
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
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
    width: 414px;
  }
}
</style>
