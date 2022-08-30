<template>
  <div class="escape-container">
    <div class="body-container">
      <div class="container1">
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
            <div class="img-body">
              <img src="../assets/cardimg1.jpg" alt="" />
              <div class="card-body">
                <div>
                  <h5>Escape Game Name</h5>
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
  background: #ffffff;
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  .container1 {
    display: flex;
    flex-direction: column;
    .text {
      padding: 180px 210px 100px 210px;
      text-align: center;
      
      h2 {
        font-family: "Roboto", sans-serif;
        font-weight: 600;
        font-size: 50px;
        line-height: 33px;
        @media #{$media-mobile-sm} {
          font-size: 24px;
          text-align: start;
        }
      }
      h6 {
        font-family: "Roboto", sans-serif;
        font-size: 24px;
        font-weight: 400;
        line-height: 33.6px;
        color: var(--text-color-light-varient4);
        margin-top: 1.3rem;
        @media #{$media-mobile-sm} {
          font-size: 18px;
          line-height: 25px;
          text-align: start;
        }
      }
      @media #{$media-mobile-sm} {
        padding: 70px 10px 30px 20px; 
        gap: 30px;
        
      }
    }

    .inner-container {
      font-family: "Roboto", sans-serif;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      justify-items: center;
      row-gap: 50px;
      .game-card {
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
        .img-body {
          img {
            width: 276px;
            height: 180px;
            @media #{$media-mobile-sm} {
              width: 152px;
              height: 118px;
            }
          }
          .card-body {
            padding: 7px 0 0 0;
            display: flex;
            flex-direction: column;
            gap: 20px;
            h5 {
              font-size: 26px;
              line-height: 36.4px;
              font-weight: 500;
              @media #{$media-mobile-sm} {
                font-size: 18px;
                line-height: 25px;
              }
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
              @media #{$media-mobile-sm} {
                font-size: 16px;
                line-height: 22px;
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
              @media #{$media-mobile-sm} {
                justify-content: inherit;
                gap: 5px;
                font-size: 16px;
                line-height: 22px;
              }
            }
            @media #{$media-mobile-sm} {
              padding: 0;
              justify-content: inherit;
              gap: 15px;
            }
          }
          @media #{$media-mobile-sm} {
            display: flex;
            gap: 10px;
          }
        }
        &:hover {
          box-shadow: 0px 1px 35px 1px rgba(0, 0, 0, 0.25);
          transition: all 1s;
        }
        @media #{$media-mobile-sm} {
         
        }
      }
      @media #{$media-mobile-sm} {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-left: 10px;
      }
    }
    @media #{$media-mobile-sm} {
       padding-right: 10px;
    }
  }
  @media #{$media-mobile-sm} {
    padding-bottom: 47px;
  }
}
</style>
