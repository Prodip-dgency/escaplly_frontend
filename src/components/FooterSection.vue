<template>
  <footer>
    <div class="footer-container">
      <div class="container1 body-container">
        <div class="footer-upper">
          <div class="upper1">
            <div class="logo-text">
              <img src="../assets/escaplly_logo.svg" alt="" />
              <p>
                Lorem Ipsum has been the industry's dummy text ever since the
                1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen It.
              </p>
            </div>
            <div class="list">
              <ul>
                <p>
                  <a class="list-btn" @click="linkopen('link')">+</a> Escape
                  Room Fans
                </p>

                <div :class="activeclass">
                  <li>Link 1</li>
                  <li>Link 2</li>
                  <li>Link 3</li>
                  <li>Link 4</li>
                </div>
              </ul>
              <ul>
                <p>
                  <a class="list-btn" @click="linkopen1('link')">+</a> Escape
                  Room Owner
                </p>

                <div :class="activeclass1">
                  <li>Link 1</li>
                  <li>Link 2</li>
                  <li>Link 3</li>
                  <li>Link 4</li>
                </div>
              </ul>
              <ul>
                <p>
                  <a class="list-btn" @click="linkopen2('link')">+</a> About
                  Company
                </p>

                <div :class="activeclass2">
                  <li>Link 1</li>
                  <li>Link 2</li>
                  <li>Link 3</li>
                  <li>Link 4</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-middle">
          <div class="mobile-responsive">
            <div class="divider middle"><p>Terms & Conditions</p></div>
            <div class="divider middle">
              <p class="divider">Privacy Policy</p>
            </div>
            <div class="divider middle">
              <p class="divider">Cookie Policy</p>
            </div>
          </div>
          <div class="mobile-responsive2">
            <div class="divider middle"><p class="divider">Disclaimer</p></div>
            <div class="divider"><p>Sitemap</p></div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-down">
      <div class="down-container body-container">
        <div class="right-section">
          <i class="fa-regular fa-copyright"></i>
          <p>Escaplly - All Rights Reserved</p>
        </div>
        <div class="logo-section">
          <i class="fa-brands fa-square-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-linkedin"></i>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      activeclass: "link",
      activeclass1: "link",
      activeclass2: "link",
    };
  },
  methods: {
    linkopen(x) {
      if (this.activeclass) {
        this.activeclass = "";
      } else {
        this.activeclass = x;
      }
    },
    linkopen1(x) {
      if (this.activeclass1) {
        this.activeclass1 = "";
      } else {
        this.activeclass1 = x;
      }
    },
    linkopen2(x) {
      if (this.activeclass2) {
        this.activeclass2 = "";
      } else {
        this.activeclass2 = x;
      }
    },
  },
};
</script>

<style lang="scss">
$media-mobile-sm: "only screen and (max-width : 480px)";
footer {
  .footer-container {
    background: #000000;
    display: flex;
    justify-content: center;
    .container1 {
      font-family: "Roboto", sans-serif;
      .footer-upper {
        padding: 37px 0 35px 0;
        .upper1 {
          display: flex;
          gap: 90px;
          .logo-text {
            flex: 1;
            p {
              padding-top: 20px;
              color: var(--text-color-light-varient4);
              font-weight: 400;
              font-size: 18px;
              line-height: 25.2px;
              //   height: 103px;
            }
          }
          .list {
            flex: 3;
            color: #ffffff;
            display: flex;
            justify-content: center;
            gap: 110px;
            ul {
              p {
                font-size: 22px;
                font-weight: 400;
                line-height: 30px;
                padding-bottom: 20px;
                color: var(--text-color-light-varient8);
                .list-btn {
                  display: none;
                  @media #{$media-mobile-sm} {
                    display: inline;
                  }
                }
                @media #{$media-mobile-sm} {
                  padding-bottom: 0;
                  font-size: 18px;
                  line-height: 21px;
                }
              }
              li {
                list-style: none;
                color: var(--text-color-light-varient6);
                font-weight: 400;
                font-size: 18px;
                line-height: 25px;
                padding-bottom: 10px;
                @media #{$media-mobile-sm} {
                  padding-left: 20px;
                }
              }
              .link {
                @media #{$media-mobile-sm} {
                  display: none;
                }
              }
            }
            @media #{$media-mobile-sm} {
              flex-direction: column;
              gap: 15px;
              &:before {
                content: "Useful Links";
                color: #ffffff;
                font-size: 20px;
                font-weight: 500;
              }
            }
          }
          @media #{$media-mobile-sm} {
            flex-direction: column;
            gap: 20px;
          }
        }
        @media #{$media-mobile-sm} {
          padding: 0 0 35px 0;
        }
      }
      .footer-middle {
        border-top: 2px solid #2d2d2d;
        color: var(--text-color-light-varient6);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 25px 0;
        font-size: 17px;
        font-weight: 400;
        
        .divider {
          display: flex;
          justify-content: center;
          padding: 0 20px;
          @media #{$media-mobile-sm} {
            padding: 0 2px 0 0;
            justify-content: inherit;
          }
        }
        .middle {
          border-right: 1px solid #2d2d2d;
        }
        .mobile-responsive {
          display: flex;
          @media #{$media-mobile-sm} {
            gap: 30px;
            margin-bottom: 10px;
          }
        }
        .mobile-responsive2 {
          display: flex;
          @media #{$media-mobile-sm} {
            gap: 30px;
          }
        }

        @media #{$media-mobile-sm} {
         display: inherit;
          font-size: 15px;
          padding: 25px 0 30px 0;
        }
      }
      @media #{$media-mobile-sm} {
        padding: 40px 10px 0 10px;
      }
    }
  }
  .footer-down {
    background: #191919;
    color: #ffffff;
    display: flex;
    justify-content: center;
    font-family: "Roboto", sans-serif;
    padding: 26px 0;
    .down-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .right-section {
        display: flex;
        gap: 11px;
      }
      .logo-section {
        font-size: 28px;
        display: flex;
        gap: 30px;
        @media #{$media-mobile-sm} {
          gap: 20px;
        }
      }
      @media #{$media-mobile-sm} {
        flex-direction: column;
        justify-content: inherit;
        gap: 15px;
      }
    }
    @media #{$media-mobile-sm} {
      padding: 20px 0;
    }
  }
 
}
</style>
