<template>
  <div class="escape-container">
    <div class="body-container">
      <div class="container">
        <div class="text">
          <h2>Top Escape Room And Fun Activities</h2>
          <h6>
            Lorem Ipsum is simply dummy text of the text a Lorem Ipsum is simply
            dummy text of the text a lpsum simply text for dummy only.
          </h6>
        </div>
        <div class="inner-container">
          <div class="game-card" v-for="item in items" :key="item">
            <div class="header">
              <p><i class="fa-regular fa-calendar-check"></i> Book Here</p>
              <p><i class="fa-solid fa-person-running"></i> In Person</p>
            </div>
            <img src="../assets/cardimg1.jpg" alt="" />
            <div class="card-body">
              <div>
                <h2>Escape Game Name</h2>
                <div class="company-name">
                  <span>by </span>
                  <p>Escape Room Company</p>
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
      </div>
      <div class="footer-btn-container">
        <a class="footer-btn" href="#"> View more escape rooms</a>
        <i class="fa-solid fa-chevron-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ["a", "b", "c", "d", "e", "f", "g", "h"],
    };
  },
};
</script>

<style lang="scss">
$media-mobile-sm: "only screen and (max-width : 480px)";
.escape-container {
  height: 1448px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  .container {
    display: flex;
    flex-direction: column;
    gap: 10rem;
    .text {
      height: 70px;
      width: 820px;
      padding: 180px 281px 100px 210px;
      text-align: center;
      h2 {
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        font-size: 50px;
        width: 820px;
        @media #{$media-mobile-sm} {
          font-size: 24px;
          width: 414px;
        }
      }
      h6 {
        width: 809px;
        font-family: "Roboto", sans-serif;
        font-size: 24px;
        font-weight: 400;
        line-height: 33.6px;
        color: var(--text-color-light-varient4);
        margin-top: 1.3rem;
      }
      @media #{$media-mobile-sm} {
        width: 414px;
        height: 70px;
       padding: 50px 25px;
       
      }
    }

    .inner-container {
      font-family: "Roboto", sans-serif;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      justify-items: center;
      row-gap: 50px;
      .game-card {
        width: 290px;
        height: 400px;
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
          width: 276px;
          height: 180px;
        }
        .card-body {
          padding: 7px 0 0 0;
          height: 175px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          h2 {
            font-size: 26px;
            line-height: 36.4px;
          }
          .company-name {
            font-size: 18px;
            line-height: 26px;
            display: flex;
            gap: 7px;
            span {
              font-weight: 300;
              color: var(--text-color-light-varient4);
            }
            p {
              font-style: italic;
              text-decoration: underline;
              font-weight: 400;
            }
          }
          .card-footer {
            font-size: 18px;
            height: 56px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
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
        &:hover {
          box-shadow: 0px 1px 35px 1px rgba(0, 0, 0, 0.25);
          transition: all 1s;
        }
      }
    }
    @media #{$media-mobile-sm} {
      gap: 4rem;

    }
  }
   @media #{$media-mobile-sm} {
    width: 414px;
    justify-content: start;
  }

}
</style>
