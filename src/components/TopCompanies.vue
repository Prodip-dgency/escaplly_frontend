<template>
  <div class="companies-container">
    <div class="container body-container">
      <div class="header-text">
        <h2>Top Escape Room Companies</h2>
        <h6>
          Lorem Ipsum is simply dummy text of the text a Lorem Ipsum is simply
          dummy text of the text a lpsum simply text for dummy only.
        </h6>
      </div>
      <VueCarousel v-bind="settings">
        <div class="slider-container">
          <div class="game-card" v-for="item in items" :key="item">
            <div class="header">
              <p><i class="fa-regular fa-calendar-check"></i> Book Here</p>
              <p><i class="fa-solid fa-person-running"></i> In Person</p>
            </div>
            <img src="../assets/companycard4.jpg" alt="" />
            <div class="card-body">
              <div>
                <h5>Escape Game Name</h5>
                <div class="available-game">
                  <p>Available escape game: 9</p>
                </div>
              </div>

              <div class="card-footer">
                <div class="location">
                  <span class="material-symbols-outlined"> location_on </span>
                  <P>New York City, US</P>
                </div>
                <p>From <span>$29</span>/Person</p>
              </div>
            </div>
          </div>
        </div>
      </VueCarousel>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import VueCarousel from 'vue-carousel';
export default {
  name: "MyComponent",
  components: { VueCarousel },
  settings: {
    dots: true,
    focusOnSelect: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    touchThreshold: 5,
  },

  data() {
    return {
      items: ["a", "b", "c", "d"],
    };
  },
};
</script>

<style lang="scss">
.companies-container {
  margin-top: 25px;
  height: 888px;
  background: var(--text-color-light-varient3);
  display: flex;
  justify-content: center;
  .container {
    padding: 100px 0;
    .header-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      text-align: center;
      font-family: "Roboto", sans-serif;

      h2 {
        font-size: 50px;
        font-weight: 500;
        line-height: 70px;
      }
      h6 {
        width: 809px;
        font-size: 24px;
        font-weight: 400;
        line-height: 33.6px;
        color: var(--text-color-light-varient4);
      }
    }
    .slider-container {
      display: flex;
      padding-top: 60px;
      font-family: "Roboto", sans-serif;
      .game-card {
        width: 290px;
        height: 348px;
        padding: 6px 7px;
        border-radius: 5px;
        box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.2);
        .header {
          display: flex;
          gap: 15px;
          color: var(--text-color-light-varient4);
          font-size: 16px;
          padding: 1px 0 4px 0;
        }
        img {
          height: 160px;
          width: 276px;
        }
        .card-body {
          padding: 7px 0 0 0;
          display: flex;
          flex-direction: column;
          gap: 20px;
          h5 {
            font-size: 26px;
            line-height: 36.4px;
          }
          .available-game {
            font-size: 18px;
            line-height: 25.2px;
            opacity: 80%;
            p {
              font-weight: 400;
            }
          }
          .card-footer {
            font-size: 18px;
            height: 56px;
            display: flex;
            flex-direction: column;
            gap: 5px;
            .location {
              display: flex;
              align-items: center;
              gap: 6px;
              font-weight: 400;
              p {
                color: var(--text-color-light-varient4);
              }
            }
            p {
              font-weight: 400;
              span {
                font-weight: 700;
                color: var(--secondary-color);
              }
            }
          }
        }
      }
    }
  }
}
</style>
