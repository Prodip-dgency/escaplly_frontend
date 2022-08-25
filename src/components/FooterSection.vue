<template>
  <footer>
    <div class="footer-container">
      <div class="container body-container">
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
                <p>Escape Room Fans</p>
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
                <li>Link 4</li>
              </ul>
              <ul>
                <p>Escape Room Fans</p>
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
                <li>Link 4</li>
              </ul>
              <ul>
                <p>Escape Room Fans</p>
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
                <li>Link 4</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-middle">
          <div class="divider middle"><p>Terms & Conditions</p></div>
          <div class="divider middle">
            <p class="divider">Privacy Policy</p>
          </div>
          <div class="divider middle"><p class="divider">Cookie Policy</p></div>
          <div class="divider middle"><p class="divider">Disclaimer</p></div>
          <div class="divider"><p>Sitemap</p></div>
        </div>
      </div>
    </div>
    <div class="footer-down">
        <div class="down-container body-container">
           <div class="right-section">
            <i class="fa-regular fa-copyright"></i>
            <p>escaplly - All Rights Reserved</p>
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
export default {};
</script>

<style lang="scss">
footer {
  .footer-container {
    background: #000000;
    height: 362px;
    display: flex;
    justify-content: center;
    .container {
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
              }
              li {
                list-style: none;
                color: var(--text-color-light-varient6);
                font-weight: 400;
                font-size: 18px;
                line-height: 25px;
                padding-bottom: 10px;
              }
            }
          }
        }
      }
      .footer-middle {
        border-top: 1px solid var(--text-color-light-varient6);
        color: var(--text-color-light-varient6);
        display: flex;
        justify-content: center;
        align-items: center;
        height: 70px;
        font-size: 17px;
        font-weight: 400;
        .divider {
          display: flex;
          justify-content: center;
          width: 177px;
        }
        .middle {
          border-right: 1px solid #2d2d2d;
        }
      }
    }
  }
  .footer-down {
    height: 78px;
    background: #191919;
    color: #ffffff;
    display: flex;
    justify-content: center;
    .down-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .right-section{
            display: flex;
            gap: 11px;
        }
        .logo-section{
            font-size: 28px;
            display: flex;
            gap: 30px;
        }
    }
  }
}
</style>
