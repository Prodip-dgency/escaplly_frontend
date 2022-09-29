<template>
  <div class="companies-container">
    <div class="container body-container">
      <div class="header-text">
        <h2 class="page-title">Top Escape Room Companies</h2>
        <h6 class="page-description">
          Lorem Ipsum is simply dummy text of the text a Lorem Ipsum is simply dummy text of the text a lpsum simply text for dummy only.
        </h6>
      </div>
      <div v-if="companies.length">
        <Carousel :settings="settings">
          <Slide v-for="company in this.companies" :key="company.id">
            <div class="slider-container">
              <div class="game-card">
                <div class="header">
                  <p><i class="fa-regular fa-calendar-check"></i> Book Here</p>
                  <p><i class="fa-solid fa-person-running"></i> In Person</p>
                </div>
                <router-link :to="{ name: 'company_details', params: { id: company.id } }">
                  <img :src="company.profile_image.image" alt="" />
                </router-link>
                <div class="card-body">
                  <div class="card-header">
                    <router-link :to="{ name: 'company_details', params: { id: company.id } }">
                      <h5>{{ company.title }}</h5>
                    </router-link>
                    <div class="available-game">
                      <p>Available escape game: {{ activityFunctions(company).activity_count }}</p>
                    </div>
                  </div>
                  <div class="card-footer">
                    <div class="location">
                      <span class="material-symbols-outlined"> location_on </span>
                      <p>{{ company.state }}, {{ company.city }}</p>
                    </div>
                    <div class="footer-text">
                      <p>
                        From <span class="game_price">${{ activityFunctions(company).lowest_price }}</span
                        >/Person
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
          <template #addons>
            <!-- <Navigation /> -->
            <Pagination />
          </template>
        </Carousel>
      </div>

      <!-- Mobile responsive section -->
      <div class="mobile-card" v-show="mobileshow()" v-for="company in this.companies" :key="company.id">
        <div class="header">
          <p><i class="fa-regular fa-calendar-check"></i> Book Here</p>
          <p><i class="fa-solid fa-person-running"></i> In Person</p>
        </div>
        <div class="img-body">
          <img :src="company.profile_image.image" alt="" />
          <div class="card-body">
            <div class="card-header">
              <h5>{{ company.title }}</h5>
              <div class="available-game">
                <p>Available escape game: {{ activityFunctions(company).activity_count }}</p>
              </div>
            </div>

            <div class="card-footer">
              <div class="location">
                <span class="material-symbols-outlined"> location_on </span>
                <p>{{ company.state }}, {{ company.city }}</p>
              </div>
              <div class="footer-text">
                <p>
                  From <span>${{ activityFunctions(company).lowest_price }}</span
                  >/Person
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-btn-container">
        <a class="footer-btn" href="#" @click="myfunc"> View more escape rooms</a>
        <i class="fa-solid fa-chevron-right"></i>
      </div>
    </div>
    <!-- This is {{ this.activity_profiles }} -->
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  // name: "Carousel",
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,
  },
  props: {
    companies: Array,
    activity_profiles: Array,
  },
  data() {
    return {
      // items: ["a", "b", "c", "d", "e", "f", "g", "h"],
      settings: {
        itemsToShow: 4,
        itemsToScroll: 1,
        transition: 700,
        autoplay: 3000,
        wrapAround: true,
      },
    };
  },
  mounted(){
      let w = screen.width;
      if (w > 730 && w<=1024) {
        this.settings.itemsToShow = 2.3;
      }else{
        if(w > 480 && w <= 730){
          this.settings.itemsToShow = 1.5;
        }
      }
  },
  methods: {
    companyDetails() {
      console.log(this.companies);
    },

    activityFunctions(icompany) {
      let activity_list = [];
      for (let x = 0; x < this.activity_profiles.length; x++) {
        if (this.activity_profiles[x].activity.company.id == icompany.company.id) {
          activity_list.push(this.activity_profiles[x]);
        }
      }
      let lowest_price = null;
      for (let y = 0; y < activity_list.length; y++) {
        if (!lowest_price) {
          lowest_price = activity_list[y].price;
        } else {
          if (activity_list[y].price < lowest_price) {
            lowest_price = activity_list[y].price;
          }
        }
      }
      let activity_count = activity_list.length;
      return {
        activity_count: activity_count,
        lowest_price: lowest_price,
      };
    },

    mobileshow() {
      let w = screen.width;

      if (w <= 480) {
        return true;
      } else {
        return false;
      }
    },

  },

};
</script>

<style src="@/assets/css/components/TopCompanies.scss" lang="scss" >

</style>
