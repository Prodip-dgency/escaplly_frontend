<template>
  <div class="curious-container">
    <div class="container body-container">
      <div class="header-text">
        <h2 class="page-title">Curious Want To Know!</h2>
        <h6 class="page-description">
          Lorem Ipsum is simply dummy text of the text a Lorem Ipsum is simply dummy text of the text a lpsum simply text for dummy only.
        </h6>
      </div>
      <div class="body-text">
        <div class="text-container" v-for="item in bodysection" :key="item.title">
          <div class="text">
            <h4>{{ item.title }}</h4>
            <p>{{ item.description }}</p>
          </div>
          <router-link :to="{ name: item.link }" class="btn-container">
            <button :class="item.classname"><i class="fa-solid fa-play"></i>{{ item.btn_name }}</button>
            <a>
              Learn more <i class="fa-solid fa-chevron-right"></i>
            </a>
          </router-link>
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
          link: "what-is-escaperoom",
        },
        section2: {
          title: "What is  Escaplly?",
          description:
            "Is simply dummy text of the printing and is the typesetti Jum has been the industry's standard dummy tex ever since the 150s. Has been the industry's standard dummy tex ever since the 150s...",
          btn_name: "About Escaplly",
          classname: "violet",
          link: "about",
        },
      },
    };
  },
};
</script>

<style src="@/assets/css/components/CuriousSection.scss" lang="scss">

</style>
