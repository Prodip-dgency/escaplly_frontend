<template>
  <div class="companies-container" >
    <div class="container body-container">
      <div class="header-text">
        <h2  class="page-title">Top Escape Room Companies</h2>
        <h6 class="page-description">
          Lorem Ipsum is simply dummy text of the text a Lorem Ipsum is simply
          dummy text of the text a lpsum simply text for dummy only.
        </h6>
      </div>
      <Carousel :settings="settings" v-show="!mobileshow()">
        <Slide v-for="item in items" :key="item">
          <div class="slider-container" >
            <div class="game-card">
              <div class="header">
                <p><i class="fa-regular fa-calendar-check"></i> Book Here</p>
                <p><i class="fa-solid fa-person-running"></i> In Person</p>
              </div>
              <img src="../assets/companycard4.jpg" alt="" />
              <div class="card-body">
                <div class="card-header">
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
                  <div class="footer-text">
                    <p>From <span>$29</span>/Person</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>
        <template #addons>
          <Pagination />
          <!-- <Navigation /> -->
        </template>
      </Carousel>
      <!-- Mobile responsive section -->
      <div class="mobile-card" v-show="mobileshow()" v-for="item in items" :key="item">
        <div class="header">
          <p><i class="fa-regular fa-calendar-check"></i> Book Here</p>
          <p><i class="fa-solid fa-person-running"></i> In Person</p>
        </div>
        <div class="img-body">
          <img src="../assets/companycard4.jpg" alt="" />
          <div class="card-body">
            <div class="card-header">
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
              <div class="footer-text">
                <p>From <span>$29</span>/Person</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-btn-container">
        <a class="footer-btn" href="#"  > View more escape rooms</a>
        <i class="fa-solid fa-chevron-right"></i>
      </div>
    </div>
  </div>
  
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "WrapAround",
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,
  },
  data() {
    return {
      items: ["a", "b", "c", "d", "e", "f", "g", "h"],
      settings: {
        itemsToShow: 4,
        // itemsToScroll: 2,
        snapAlign: "end",
        transition: 1000,
        autoplay: 3000,
        wrapAround: true,
      },
    };
  },
  methods:{
    mobileshow(){
      // const box= document.querySelector('.companies-container')
      // const resizeObserver = new ResizeObserver((entries) => {
      //     console.log(entries);
      //   })

      //   resizeObserver.observe(box);

      let w = screen.width;
      
      if(w <= 480){
        return true
      }else{
       return false
      }
     
    }

  }
};
</script>

<style lang="scss">
$media-mobile-sm: "only screen and (max-width : 480px)";
.companies-container {
  margin-top: 25px;
  background: var(--text-color-light-varient3);
  display: flex;
  justify-content: center;

  .container {
    .header-text {
      @media #{$media-mobile-sm} {
        margin-bottom: 30px;
      }
    }
    .slider-container {
      padding-top: 60px;
      font-family: "Roboto", sans-serif;
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
        img {
          height: 160px;
          width: 276px;
        }
        .card-body {
          padding: 7px 0 0 0;
          display: flex;
          flex-direction: column;
          gap: 20px;
          .card-header {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
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
          }
          .card-footer {
            font-size: 18px;
            height: 56px;
            display: flex;
            flex-direction: column;
            gap: 6px;
            .location {
              display: flex;
              align-items: center;
              gap: 6px;
              font-weight: 400;
              p {
                color: var(--text-color-light-varient4);
              }
            }
            .footer-text {
              display: flex;
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
      @media #{$media-mobile-sm} {
        padding-top: 30px;
      }
    }
    @media #{$media-mobile-sm} {
      padding: 40px 10px;
      display: block;
    }
    // card design for movile

    .mobile-card {
      padding: 6px 7px;
      border-radius: 5px;
      box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.2);
      font-family: "Roboto", sans-serif;
      margin-bottom: 20px;

      .header {
        display: flex;
        gap: 15px;
        color: var(--text-color-light-varient4);
        font-size: 16px;
        padding: 1px 0 6px 0;
      }
      .img-body {
        display: flex;
        gap: 10px;

        img {
          height: 118px;
          width: 118px;
          object-fit: cover;
        }
        .card-body {
          display: flex;
          flex-direction: column;
          gap: 15px;
          .card-header {
            h5 {
              font-size: 18px;
              line-height: 25px;
            }
            p {
              font-size: 16px;
              line-height: 22px;
              font-weight: 400;
            }
          }
          .card-footer {
            .location {
              display: flex;
              gap: 3px;
              p {
                color: var(--text-color-light-varient4);
              }
            }
            .footer-text {
              span {
                color: var(--secondary-color);
                font-weight: 700;
              }
            }
          }
        }
      }
    }
  }
  // .carousel {
  //   @media #{$media-mobile-sm} {
  //     display: none;
  //   }
  // }
  .carousel__viewport {
    padding-bottom: 10px;
    overflow: hidden;
  }
  .carousel__pagination {
    padding-top: 12px;
  }
  .carousel__pagination-button {
    background: var(--text-color-light-varient6);
    height: 12px;
    width: 12px;
    border-radius: 50%;
  }
  .carousel__pagination-button--active {
    background: var(--text-color-light-varient4);
  }
  @media #{$media-mobile-sm} {
    padding-bottom: 7px;
  }
}
</style>
