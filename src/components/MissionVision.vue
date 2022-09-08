<template>
  <div class="mission-container">
    <div class="container body-container">
      <div class="header-text">
        <h2 class="page-title">Our Mission and Vision</h2>
        <h6 class="page-description">
          Lorem Ipsum is simply dummy text of the text a Lorem Ipsum is simply dummy text of the text a lpsum simply text for dummy only.
        </h6>
      </div>
      <div class="players-owners">
        <div class="players">
          <img src="../assets/img/team1.svg" alt="" />
          <h3>Escape Room Players</h3>
          <p>Is simply dummy text of the printing and type is a settingsetting industry Lorem Ipsum.</p>
          <ul>
            <li><i class="fa-solid fa-check"></i> Perfect match making for the escape room gamers.</li>
            <li><i class="fa-solid fa-check"></i> Best review system for finding good escape rooms.</li>
            <li><i class="fa-solid fa-check"></i> Easy booking system</li>
            <li><i class="fa-solid fa-check"></i> Review feed for sharing your escape room expriences.</li>
            <li><i class="fa-solid fa-check"></i> Review feed for sharing your escape room expriences.</li>
          </ul>
          <div class="button">
            <router-link class="btn1" :to="{ name: 'escape_room_players' }"> Learn More </router-link>
          </div>
        </div>
        <div class="owners">
          <img src="../assets/img/key1.svg" alt="" />
          <h3>Escape Room Owners</h3>
          <p>Is simply dummy text of the printing and type is a settingsetting industry Lorem Ipsum.</p>
          <ul>
            <li><i class="fa-solid fa-check"></i> Perfect match making for the escape room gamers.</li>
            <li><i class="fa-solid fa-check"></i> Best review system for finding good escape rooms.</li>
            <li><i class="fa-solid fa-check"></i> Easy booking system</li>
            <li><i class="fa-solid fa-check"></i> Review feed for sharing your escape room expriences.</li>
            <li><i class="fa-solid fa-check"></i> Review feed for sharing your escape room expriences.</li>
          </ul>
          <div class="button">
            <router-link class="btn2" :to="{ name: 'escape_room_owners' }">Learn More</router-link>
          </div>
        </div>
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

.mission-container {
  margin-top: 25px;
  background: var(--text-color-light-varient3);
  display: flex;
  justify-content: center;
  .container {
    .players-owners {
      padding-top: 60px;
      display: flex;
      gap: 50px;
      font-family: "Roboto", sans-serif;

      h3 {
        font-weight: 600;
        font-size: 40px;
        line-height: 56px;
        @media #{$media-mobile-sm} {
          font-size: 20px;
          line-height: 28px;
          margin-bottom: 5px;
        }
        @media #{$media-tab} {
          font-size: 28px;
        }
      }
      p {
        font-weight: 400;
        font-size: 22px;
        color: var(--text-color-light-varient4);
        line-height: 30.8px;
        @media #{$media-mobile-sm} {
          font-size: 18px;
          line-height: 25px;
        }
        @media #{$media-tab} {
          font-size: 20px;
          line-height: 28px;
        }
      }
      ul {
        margin: 20px 0 40px 0;
        li {
          list-style: none;
          display: flex;
          align-items: center;
          gap: 11.5px;
          font-weight: 400;
          font-size: 18px;
          line-height: 25.2px;
          padding-bottom: 10px;
          @media #{$media-mobile-sm} {
            padding-bottom: 5px;
          }
          @media #{$media-tab} {
            align-items: inherit;
            line-height: 22px;
          }
        }
        @media #{$media-mobile-sm} {
          margin: 20px 0 20px 0;
        }
        @media #{$media-tab} {
          margin: 20px 0 25px 0;
        }
      }
      img {
      }

      .button{
        display: flex;
        flex-direction: row;
      }
      .players {
        background: var(--Secondary-color-v2-dark-varient3);
        padding: 50px 55px 50px 50px;
        i {
          color: #53a318;
        }
        .btn1 {
          color: #53a318;
          border: 2px solid #53a318;
          background: none;
          padding: 15px 40px;
          font-weight: 500;
          font-size: 18px;
          border-radius: 6px;
          // @media #{$media-tab} {
          //   padding: 10px 20px;
          // }
        }
        @media #{$media-mobile-sm} {
          padding: 30px 11px 40px 11px;
        }
        @media #{$media-tab} {
          padding: 10px 7px 20px 7px;
        }
      }
      .owners {
        background: var(--Secondary-color-v1-light-varient3);
        padding: 50px 55px 50px 50px;
        i {
          color: #ff492c;
        }
        .btn2 {
          color: #ff492c;
          border: 2px solid #ff492c;
          background: none;
          padding: 15px 40px;
          font-weight: 500;
          font-size: 18px;
          border-radius: 6px;
        }
        @media #{$media-mobile-sm} {
          padding: 30px 11px 40px 11px;
        }
        @media #{$media-tab} {
          padding: 10px 5px;
        }
      }
      @media #{$media-mobile-sm} {
        flex-direction: column;
        padding-top: 20px;
        gap: 10px;
      }
      @media #{$media-tab} {
        gap: 15px;
      }
    }
  }
  @media #{$media-mobile-sm} {
  }
}
</style>
