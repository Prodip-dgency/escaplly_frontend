<template>
  <div class="mission-container">
    <div class="container body-container">
      <div class="header-text">
        <h2 class="page-title">Our Mission and Vision</h2>
        <h6 class="page-description">
          Lorem Ipsum is simply dummy text of the text a Lorem Ipsum is simply
          dummy text of the text a lpsum simply text for dummy only.
        </h6>
      </div>
      <div class="players-owners">
        <div class="players">
          <img src="" alt="" />
          <h3>Escape Room Games</h3>
          <p>
            Is simply dummy text of the printing and type is a settingsetting
            industry Lorem Ipsum.
          </p>
          <ul>
            <li>
              <i class="fa-solid fa-check"></i> Perfect match making for the
              escape room gamers.
            </li>
            <li>
              <i class="fa-solid fa-check"></i> Best review system for finding
              good escape rooms.
            </li>
            <li><i class="fa-solid fa-check"></i> Easy booking system</li>
            <li>
              <i class="fa-solid fa-check"></i> Review feed for sharing your
              escape room expriences.
            </li>
            <li>
              <i class="fa-solid fa-check"></i> Review feed for sharing your
              escape room expriences.
            </li>
          </ul>
          <div class="btn">
            <button>Learn More</button>
          </div>
        </div>
        <div class="owners"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.mission-container {
  margin-top: 25px;
  height: 1014px;
  background: var(--text-color-light-varient3);
  display: flex;
  justify-content: center;
  .container {
    padding: 100px 0;

    .players-owners {
      padding-top: 60px;
      display: flex;
      gap: 50px;
      font-family: "Roboto", sans-serif;

      h3 {
        font-weight: 400;
        font-size: 40px;
        line-height: 56px;
      }
      p {
        font-weight: 400;
        font-size: 22px;
        color: var(--text-color-light-varient4);
        line-height: 30.8px;
      }
      .players {
        width: 594px;
        height: 596px;
        background: var(--Secondary-color-v2-dark-varient3);
        padding: 50px 55px 50px 50px;
        li {
          list-style: none;
          display: flex;
          gap: 11.5px;
          i {
            color: #53a318;
          }
        }
      }
      .owners {
        width: 594px;
        height: 596px;
        background: var(--Secondary-color-v1-light-varient3);
      }
    }
  }
}
</style>
