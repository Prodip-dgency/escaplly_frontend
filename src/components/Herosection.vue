<template>
  <div class="hero-container">
    <div class="container body-container">
      <h1>Top Escape Room Near You</h1>
      <div class="text">
        <p>
           Lorem Ipsum is simply dummy text of the text
          a simply dummy dummy. a lpsum simply text for dummy.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.hero-container {
  height: 520px;
  background-image: url("../assets/hero_image.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      color: #fff;
      font-family: "Roboto", sans-serif;
      font-size: 66px;
    }

    .text {
        width: 724px;
        margin: 1rem 1rem;
        text-align: center;
      p {
        color: #ebebeb;
        font-family: "Roboto", sans-serif;
        font-size: 24px;
        line-height: 33.6px;
      }
    }
  }
}
</style>
