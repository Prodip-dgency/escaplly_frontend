<template>
  <div class="curious-container">
    <div class="container body-container">
      <div class="header-text">
        <h2 class="page-title">Curious Want To Know!</h2>
        <h6 class="page-description">
          Lorem Ipsum is simply dummy text of the text a Lorem Ipsum is simply
          dummy text of the text a lpsum simply text for dummy only.
        </h6>
      </div>
      <div class="body-text">
        <div
          class="text-container"
          v-for="item in bodysection"
          :key="item.title"
        >
          <div class="text">
            <h4>{{ item.title }}</h4>
            <p>{{ item.description }}</p>
          </div>

          <div class="btn-container">
            <button :class="item.classname">
              <i class="fa-solid fa-play"></i>{{ item.btn_name }}
            </button>
            <a href="">Learn more <i class="fa-solid fa-chevron-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bodysection: {
        section1: {
          title: "What is an Escape Room?",
          description:
            "Is simply dummy text of the printing and is the typesetti Jum has been the industry's standard dummy tex ever since the 150s. Has been the industry's standard dummy tex ever since the 150s...",
          btn_name: "Escape Room",
          classname: "red",
        },
        section2: {
          title: "What is an Escaplly?",
          description:
            "Is simply dummy text of the printing and is the typesetti Jum has been the industry's standard dummy tex ever since the 150s. Has been the industry's standard dummy tex ever since the 150s...",
          btn_name: "About Escaplly",
          classname: "violet",
        },
      },
    };
  },
};
</script>

<style lang="scss">
.curious-container {
  margin-top: 25px;
  height: 684px;
  background: var(--text-color-light-varient3);
  display: flex;
  justify-content: center;
  .container {
    padding: 100px 0;

    .body-text {
      display: flex;
      justify-content: space-between;
      gap: 100px;
      padding-top: 60px;
      .text-container {
        font-family: "Roboto", sans-serif;
        display: flex;
        flex-direction: column;
        gap: 52.5px;
        .text {
            display: flex;
            flex-direction: column;
            gap: 10px;
          h4 {
            font-size: 30px;
            font-weight: 500;
            line-height: 42px;
          }
          p {
            font-size: 22px;
            font-weight: 400;
            line-height: 30.8px;
            color: var(--Text-color-dark-varient2);
          }
        }
        .btn-container {
          display: flex;
          align-items: center;
          gap: 40px;

          button {
            display: flex;
            gap: 10px;
            padding: 14px 30px;
            color: var(--text-color-light-varient3);
            border: none;
            border-radius: 5px;
            font-family: "Roboto", sans-serif;
            font-size: 18px;
            font-weight: 500;
          }
          a {
            text-decoration: none;
            color: var(--link-and-icon-color);
            display: flex;
            align-items: center;
            gap: 16.89px;
            font-size: 18px;
            font-weight: 500;
          }
        }
        .red {
          background: var(--Secondary-color-light-varient3);
        }
        .violet {
          background: var(--primary-color);
        }
      }
    }
  }
}
</style>
