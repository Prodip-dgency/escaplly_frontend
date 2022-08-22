<template>
  <div class="nav-container">
    <div class="container body-container">
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
.nav-container {
  height: 69px;
  width: 100%;
  background: var(--text-color-light-varient8);
  display: flex;
  justify-content: center;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .menu-bar {
      font-size: 30px;
    }
  }
}
</style>
