<template>
  <div class="hero-container">
    <div class="container1 body-container">
      <h1>Top Escape Room Near You</h1>
      <div class="text">
        <p>Lorem Ipsum is simply dummy text of the text a simply dummy dummy. a lpsum simply text for dummy.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
$media-mobile-sm: "only screen and (max-width : 480px)";
$media-tab: "only screen and (min-width : 530px) and (max-width : 1024px)";

.hero-container {
  height: 520px;
  background-image: url("../assets/img/hero_image.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  .container1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      color: #fff;
      font-family: "Roboto", sans-serif;
      font-size: 66px;
      @media #{$media-mobile-sm} {
        font-size: 28px;
      }
      @media #{$media-tab} {
        font-size: 39px;
      }
    }

    .text {
      margin: 1rem 15rem;
      text-align: center;
      p {
        color: #ebebeb;
        font-family: "Roboto", sans-serif;
        font-size: 24px;
        line-height: 33.6px;
        @media #{$media-mobile-sm} {
          font-size: 18px;
          line-height: 25px;
        }
        @media #{$media-tab} {
          width: 80%;
          margin: auto;
        }
      }
      @media #{$media-mobile-sm} {
        margin: inherit;
      }
      @media #{$media-tab} {
        margin: inherit;
      }
    }
    @media #{$media-mobile-sm} {
      display: block;
      text-align: center;
      padding-top: 38px;
    }
  }
  @media #{$media-mobile-sm} {
    height: 305px;
    object-fit: cover;
  }
  @media #{$media-tab} {
    height: 400px;
  }
}
</style>
