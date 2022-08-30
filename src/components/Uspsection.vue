<template>
  <div class="usp-container">
    <!-- <div class="container body-container"> -->
    <div class="inner-container">
      <div class="first-section text-section">
        <h3>15</h3>
        <h4>Countries</h4>
      </div>
      <div class="second-section text-section">
        <h3>5000+</h3>
        <h4>Companies</h4>
      </div>
      <div class="third-section text-section">
        <h3>20000+</h3>
        <h4>Games</h4>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
$media-mobile-sm: "only screen and (max-width : 480px)";
$media-mobile-ex-sm: "only screen and (max-width : 375px)";

.usp-container {
  display: flex;
  justify-content: center;
  position: relative;

  .inner-container {
    border-radius: 5px;
    background: var(--text-color-light-varient8);
    position: absolute;
    top: -2.5rem;
    display: flex;
    justify-content: space-between;

    h3 {
      font-family: "Roboto", sans-serif;
      font-size: 40px;
      color: var(--primary-color);
      @media #{$media-mobile-sm} {
        font-size: 22px;
      }
      @media #{$media-mobile-ex-sm}{
        font-size: 18px;
      }
    }
    h4 {
      font-family: "Roboto", sans-serif;
      font-size: 30px;
      font-weight: 300;
      color: var(--text-color-light-varient4);
      @media #{$media-mobile-sm} {
        font-size: 18px;
      }
       @media #{$media-mobile-ex-sm}{
        font-size: 14px;
      }
    }
    .text-section {
      padding: 0 120px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 20px 0;
      @media #{$media-mobile-sm} {
        padding: 0 20px;
      }
    }
    .first-section {
      border-right: 2.5px solid var(--primary-color);
    }
    .second-section {
      border-right: 2.5px solid var(--primary-color);
    }

    @media #{$media-mobile-sm} {
      
      height: 74px;
      top: -2rem;
    }
  }

}
</style>
